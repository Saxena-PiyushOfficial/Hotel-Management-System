package com.app.service;

import com.app.dto.ServicesDTO;
import com.app.entity.Services;
import com.app.dao.ServicesDAO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HotelServicesService {

    private ServicesDAO servicesdao;
    private ModelMapper modelMapper;

    @Autowired
    public HotelServicesService(ServicesDAO servicesRepository, ModelMapper modelMapper) {
        this.servicesdao = servicesRepository;
        this.modelMapper = modelMapper;
    }

    public List<ServicesDTO> getAllServices() {
        List<Services> servicesList = servicesdao.findAll();
        return servicesList.stream()
                .map(service -> modelMapper.map(service, ServicesDTO.class))
                .collect(Collectors.toList());
    }

    public Optional<ServicesDTO> getServiceByID(Long serviceID) {
        Optional<Services> service = servicesdao.findById(serviceID);
        return service.map(s -> modelMapper.map(s, ServicesDTO.class));
    }

    public List<ServicesDTO> getServicesByServiceName(String serviceName) {
        List<Services> servicesList = servicesdao.findByServiceName(serviceName);
        return servicesList.stream()
                .map(service -> modelMapper.map(service, ServicesDTO.class))
                .collect(Collectors.toList());
    }

    public List<ServicesDTO> getServicesByCost(double cost) {
        List<Services> servicesList = servicesdao.findByCost(cost);
        return servicesList.stream()
                .map(service -> modelMapper.map(service, ServicesDTO.class))
                .collect(Collectors.toList());
    }

    public List<ServicesDTO> getServicesByDescription(String description) {
        List<Services> servicesList = servicesdao.findByDescription(description);
        return servicesList.stream()
                .map(service -> modelMapper.map(service, ServicesDTO.class))
                .collect(Collectors.toList());
    }

    public void addService(ServicesDTO servicesDTO) {
        Services service = modelMapper.map(servicesDTO, Services.class);
        servicesdao.save(service);
    }

    

}
