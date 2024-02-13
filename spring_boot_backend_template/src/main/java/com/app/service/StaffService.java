package com.app.service;

import java.util.List;

import com.app.dto.StaffDTO;
import com.app.entity.Staff;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.StaffDAO;


@Service
public class StaffService {

    @Autowired
    private StaffDAO staffDAO;

    @Autowired
    private ModelMapper modelMapper;

    public StaffDTO saveStaff(StaffDTO staffDTO) {
        Staff staff = modelMapper.map(staffDTO, Staff.class);
        staff = staffDAO.save(staff);
        return modelMapper.map(staff, StaffDTO.class);
    }

    public StaffDTO getStaffById(Long staffId) {
        Staff staff = staffDAO.findById(staffId)
                .orElseThrow(() -> new NoSuchElementException("Staff with id " + staffId + " not found"));
        return modelMapper.map(staff, StaffDTO.class);
    }

    public List<StaffDTO> getAllStaff() {
        List<Staff> staffList = staffDAO.findAll();
        return staffList.stream()
                .map(staff -> modelMapper.map(staff, StaffDTO.class))
                .collect(Collectors.toList());
    }

    public void deleteStaff(Long staffId) {
        staffDAO.deleteById(staffId);
    }
}

