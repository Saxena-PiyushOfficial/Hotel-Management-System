package com.app.controller;

import com.app.dto.ServicesDTO;
import com.app.service.HotelServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;


@RestController
@RequestMapping("/services")
@CrossOrigin
public class ServicesController {

    private final HotelServicesService hotelServicesService;

    @Autowired
    public ServicesController(HotelServicesService hotelServicesService) {
        this.hotelServicesService = hotelServicesService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ServicesDTO>> getAllServices() {
        List<ServicesDTO> servicesDTOList = hotelServicesService.getAllServices();
        return new ResponseEntity<>(servicesDTOList, HttpStatus.OK);
    }

    @GetMapping("/{serviceID}")
    public ResponseEntity<ServicesDTO> getServiceByID(@PathVariable Long serviceID) {
        Optional<ServicesDTO> serviceDTO = hotelServicesService.getServiceByID(serviceID);
        return serviceDTO.map(dto -> new ResponseEntity<>(dto, HttpStatus.OK))
                        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/byName/{serviceName}")
    public ResponseEntity<List<ServicesDTO>> getServicesByServiceName(@PathVariable String serviceName) {
        List<ServicesDTO> servicesDTOList = hotelServicesService.getServicesByServiceName(serviceName);
        return new ResponseEntity<>(servicesDTOList, HttpStatus.OK);
    }

    @GetMapping("/byCost/{cost}")
    public ResponseEntity<List<ServicesDTO>> getServicesByCost(@PathVariable double cost) {
        List<ServicesDTO> servicesDTOList = hotelServicesService.getServicesByCost(cost);
        return new ResponseEntity<>(servicesDTOList, HttpStatus.OK);
    }

    @GetMapping("/byDescription/{description}")
    public ResponseEntity<List<ServicesDTO>> getServicesByDescription(@PathVariable String description) {
        List<ServicesDTO> servicesDTOList = hotelServicesService.getServicesByDescription(description);
        return new ResponseEntity<>(servicesDTOList, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addService(@Valid @RequestBody ServicesDTO servicesDTO) {
        hotelServicesService.addService(servicesDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

   
}
