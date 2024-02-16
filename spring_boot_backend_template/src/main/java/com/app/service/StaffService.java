package com.app.service;

import java.util.List;

import com.app.dto.ManagerDTOReq;
import com.app.dto.StaffDTO;

import com.app.entity.Manager;
import com.app.entity.Staff;

import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ManagerDAO;
import com.app.dao.StaffDAO;

@Service
public class StaffService {

	@Autowired
	private StaffDAO staffDAO;
	@Autowired
	private ManagerDAO managerDAO;

	@Autowired
	private ModelMapper modelMapper;

	public StaffDTO saveStaff(StaffDTO staffDTO) {
		long managerId = staffDTO.getManagerId();
		Optional<Manager> optionalManager = managerDAO.findById(managerId);
		Manager oldManager = optionalManager.orElse(null);
		Staff staff = modelMapper.map(staffDTO, Staff.class);
		staff.setManager(oldManager);
		staff = staffDAO.save(staff);
		return convertToDto(staff);

	}

	public StaffDTO getStaffById(Long staffId) {
		Staff staff = staffDAO.findById(staffId)
				.orElseThrow(() -> new NoSuchElementException("Staff with id " + staffId + " not found"));
		return convertToDto(staff);
	}

	public List<StaffDTO> getAllStaff() {
		List<Staff> staffList = staffDAO.findAll();
		return staffList.stream().map(staff -> modelMapper.map(staff, StaffDTO.class)).collect(Collectors.toList());
	}

	public Long deleteStaff(Long staffId) {
		staffDAO.findById(staffId).orElseThrow(() -> new NoSuchElementException("Manager not found with id: " + staffId));
		staffDAO.deleteById(staffId);
		return staffId;
	}
	
	 private StaffDTO convertToDto(Staff staff) {
		 StaffDTO staffDTO = modelMapper.map(staff, StaffDTO.class);
	    	if (staff.getManager() != null) {
	    		staffDTO.setManagerId(staffDTO.getManager().getManagerId()); // Set only the hotel ID
	    } else {
	    	staffDTO.setManagerId(null); // Set hotel ID as null if hotel is null
	    }
	        return staffDTO;
	    }
}
