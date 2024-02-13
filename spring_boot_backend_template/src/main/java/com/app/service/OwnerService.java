package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.OwnerDAO;
import com.app.dto.OwnerDTO; // Import the DTO class
import com.app.entity.Owner;

@Service
public class OwnerService {
    @Autowired
    private OwnerDAO ownerDAO;

    @Autowired
    private ModelMapper modelMapper; 

    public OwnerDTO saveOwner(OwnerDTO ownerDTO) {
        Owner owner = modelMapper.map(ownerDTO, Owner.class);
        owner = ownerDAO.save(owner);
        return modelMapper.map(owner, OwnerDTO.class);
    }

    public Optional<OwnerDTO> getOwnerById(Long ownerId) {
        Optional<Owner> ownerOptional = ownerDAO.findById(ownerId);
        return ownerOptional.map(owner -> modelMapper.map(owner, OwnerDTO.class));
    }

    public Optional<OwnerDTO> getOwnerByEmail(String email) {
        Optional<Owner> ownerOptional = ownerDAO.findByEmail(email);
        return ownerOptional.map(owner -> modelMapper.map(owner, OwnerDTO.class));
    }

    public List<OwnerDTO> getAllOwners() {
        List<Owner> owners = ownerDAO.findAll();
        return owners.stream()
                .map(owner -> modelMapper.map(owner, OwnerDTO.class))
                .collect(Collectors.toList());
    }

    public void deleteOwner(Long ownerId) {
        ownerDAO.deleteById(ownerId);
    }
}
