package com.app.controller;

import java.util.NoSuchElementException;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.GuestDTO;
import com.app.dto.GuestDTOAuth;
import com.app.dto.ManagerDTOAuth;
import com.app.dto.ManagerDTOResp;
import com.app.dto.OwnerDTO;
import com.app.dto.OwnerDTOAuth;
import com.app.service.GuestServiceImpl;
import com.app.service.ManagerService;
import com.app.service.OwnerService;



@RestController
@CrossOrigin
public class LoginController {
	
	  @Autowired
    private ManagerService managerService;
	  @Autowired
    private OwnerService ownerService;
	  @Autowired
	    private GuestServiceImpl guestService;
	
	 @PostMapping("managers/authenticate")
	    public ResponseEntity<ManagerDTOResp> authenticateManager(@Valid @RequestBody ManagerDTOAuth authDTO) {
	        ManagerDTOResp authenticatedManager = managerService.authenticateManager(authDTO);
	        return ResponseEntity.ok(authenticatedManager);
	    }
	  @PostMapping("owners/authenticate")
	    public ResponseEntity<OwnerDTO> authenticateOwner(@Valid @RequestBody OwnerDTOAuth requestOwner) {
	        Optional<OwnerDTO> authenticatedOwner = ownerService.authenticateOwner(requestOwner.getEmail(), requestOwner.getPassword());
	        
	        return authenticatedOwner.map(dto -> new ResponseEntity<>(dto, HttpStatus.OK))
	                .orElseGet(() -> new ResponseEntity<>(HttpStatus.UNAUTHORIZED));
	    }
	  
	   

	    @PostMapping("guests/authenticate")
	    public ResponseEntity<GuestDTO> authenticateGuest(@Valid @RequestBody GuestDTOAuth authDTO) {
	        try {
	            GuestDTO authenticatedGuest = guestService.authenticateGuest(authDTO);
	            return ResponseEntity.ok(authenticatedGuest);
	        } catch (NoSuchElementException e) {
	            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	        } catch (RuntimeException e) {
	            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	        }
	    }
	

}
