package com.app.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.HotelDAO;
import com.app.dao.ManagerDAO;
import com.app.dto.ManagerDTOAuth;
import com.app.dto.ManagerDTOReq;
import com.app.dto.ManagerDTOResp;
import com.app.entity.Hotel;
import com.app.entity.Manager;


@Transactional
@Service
public class ManagerServiceImpl implements ManagerService {

    private final ManagerDAO managerDAO;
    private final HotelDAO hotelDAO;
    private final ModelMapper modelMapper;

    @Autowired
    public ManagerServiceImpl(ManagerDAO managerDAO, ModelMapper modelMapper,HotelDAO hotelDAO) {
        this.managerDAO = managerDAO;
        this.modelMapper = modelMapper;
        this.hotelDAO=hotelDAO;
    }

    @Override
    public ManagerDTOResp createManager(ManagerDTOReq managerDTO) {
    	long id= managerDTO.getHotelId();
    	Optional<Hotel> optionalHotel= hotelDAO.findById(id);
    	Hotel oldHotel= optionalHotel.orElse(null);
    	managerDTO.setHotel(oldHotel);
        Manager manager = modelMapper.map(managerDTO, Manager.class);
//        manager.setHotel(oldHotel);
        Manager savedManager = managerDAO.save(manager);
        return modelMapper.map(savedManager, ManagerDTOResp.class);
    }

    @Override
    public ManagerDTOReq getManagerById(Long managerId) {
        Manager manager = managerDAO.findById(managerId)
                .orElseThrow(() -> new NoSuchElementException("Manager not found with id: " + managerId));
        ManagerDTOReq managerDTO = convertToDto(manager);
        return managerDTO;
    }
    
   
    @Override
    public List<ManagerDTOReq> getAllManagers() {
        List<Manager> managers = managerDAO.findAll();
        return managers.stream().map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private ManagerDTOReq convertToDto(Manager manager) {
    	ManagerDTOReq managerDTO = modelMapper.map(manager, ManagerDTOReq.class);
    	if (manager.getHotel() != null) {
        managerDTO.setHotelId(manager.getHotel().getHotelID()); // Set only the hotel ID
    } else {
        managerDTO.setHotelId(null); // Set hotel ID as null if hotel is null
    }
        return managerDTO;
    }

    
    @Override
    public Long deleteManager(Long managerId) {
    	managerDAO.findById(managerId)
                .orElseThrow(() -> new NoSuchElementException("Manager not found with id: " + managerId));
        managerDAO.deleteById(managerId);
        return managerId;
    }
    
    
    @Override
    public ManagerDTOResp authenticateManager(ManagerDTOAuth authDTO) {
        String email = authDTO.getEmail();
        String password = authDTO.getPassword();

        Manager manager = managerDAO.findByEmail(email)
                .orElseThrow(() -> new NoSuchElementException("Manager not found with email: " + email));

        if (password.equals(manager.getPassword())) {
            return modelMapper.map(manager, ManagerDTOResp.class);
        } else {
            throw new RuntimeException("Incorrect password for manager with email: " + email);
        }
    }
    
    
    
    
    
    
    
}
