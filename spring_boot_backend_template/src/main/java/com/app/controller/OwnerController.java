package com.app.controller;

import com.app.dto.OwnerDTO;
import com.app.service.HotelService;
import com.app.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/owners")
@CrossOrigin
public class OwnerController {

    @Autowired
    private OwnerService ownerService;

    @Autowired
    private HotelService hotelService;


    @GetMapping("/revenue")
    public ResponseEntity<Double> getRevenue(){
    	return new ResponseEntity<Double>(hotelService.getTotalRevenue(), HttpStatus.OK) ;
    }

    @GetMapping("/{ownerId}")
    public ResponseEntity<OwnerDTO> getOwnerById(@PathVariable Long ownerId) {
        Optional<OwnerDTO> ownerDTO = ownerService.getOwnerById(ownerId);
        return ownerDTO.map(dto -> new ResponseEntity<>(dto, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/by-email/{email}")
    public ResponseEntity<OwnerDTO> getOwnerByEmail(@PathVariable String email) {
        Optional<OwnerDTO> ownerDTO = ownerService.getOwnerByEmail(email);
        return ownerDTO.map(dto -> new ResponseEntity<>(dto, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public ResponseEntity<List<OwnerDTO>> getAllOwners() {
        List<OwnerDTO> owners = ownerService.getAllOwners();
        return new ResponseEntity<>(owners, HttpStatus.OK);
    }

    @DeleteMapping("/{ownerId}")
    public ResponseEntity<Void> deleteOwner(@PathVariable Long ownerId) {
        ownerService.deleteOwner(ownerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
  
    
}
