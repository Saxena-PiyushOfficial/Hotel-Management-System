package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.OwnerDAO;
import com.app.dto.OwnerDTO; // Import the DTO class
import com.app.dto.OwnerDTOAuth;
import com.app.entity.Owner;
import com.app.exception.EmptyDataException;

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

    public List<OwnerDTO> getAllOwners() throws EmptyDataException {
        List<Owner> owners = ownerDAO.findAll();
        if (owners.isEmpty()) {
            throw new EmptyDataException("No owner found in the database");
        }
        return owners.stream()
                .map(owner -> modelMapper.map(owner, OwnerDTO.class))
                .collect(Collectors.toList());
    }

    public void deleteOwner(Long ownerId) {
        ownerDAO.deleteById(ownerId);
    }
    
    public Optional<OwnerDTO> authenticateOwner(String email, String password) {
        Optional<Owner> ownerOptional = ownerDAO.findByEmail(email);
        
        if (ownerOptional.isPresent()) {
            Owner owner = ownerOptional.get();
            if (password.equals(owner.getPassword())) {
                return Optional.of(modelMapper.map(owner, OwnerDTO.class));
            }
        }

        return Optional.empty();
    }
    
    
}
