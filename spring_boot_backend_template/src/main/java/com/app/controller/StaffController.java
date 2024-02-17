package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.HotelDTO;
import com.app.dto.StaffDTO;
import com.app.service.StaffService;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

@RestController
@RequestMapping("/staff")
@CrossOrigin
public class StaffController {

    @Autowired
    private StaffService staffService;

    @PostMapping
    public ResponseEntity<StaffDTO> createStaff(@Valid @RequestBody StaffDTO staffDTO) {
        StaffDTO savedStaff = staffService.saveStaff(staffDTO);
        return new ResponseEntity<>(savedStaff, HttpStatus.CREATED);
    }

  
    @GetMapping("/{staffId}")
    public ResponseEntity<StaffDTO> getStaffById(@PathVariable Long staffId) {
        StaffDTO staffDTO = staffService.getStaffById(staffId);

        if (staffDTO != null) {
            return new ResponseEntity<>(staffDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


   

    @GetMapping
    public ResponseEntity<List<StaffDTO>> getAllStaff() {
        List<StaffDTO> staffList = staffService.getAllStaff();
        return new ResponseEntity<>(staffList, HttpStatus.OK);
    }

    @DeleteMapping("/{staffId}")
    public ResponseEntity<String> deleteStaff(@PathVariable Long staffId) {
        Long deletedStaffID=staffService.deleteStaff(staffId);
        return new ResponseEntity<>("Staff with ID " + deletedStaffID + " has been deleted successfully.",HttpStatus.OK);
    }
    
    
}
