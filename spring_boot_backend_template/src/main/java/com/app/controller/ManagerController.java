package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.app.dto.ManagerDTOReq;
import com.app.dto.ManagerDTOResp;
import com.app.service.HotelService;
import com.app.service.ManagerService;

import java.util.List;

@RestController
@RequestMapping("/managers")
@CrossOrigin
public class ManagerController {
	@Autowired
	private ManagerService managerService;

	@Autowired
	public ManagerController(ManagerService managerService) {
		this.managerService = managerService;
	}

	@Autowired
	private HotelService hotelService;

	@GetMapping("/revenue")
	public ResponseEntity<Double> getRevenue() {
		return new ResponseEntity<Double>(hotelService.getTotalRevenue(), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<ManagerDTOResp> createManager(@RequestBody ManagerDTOReq managerDTO) {
		ManagerDTOResp createdManager = managerService.createManager(managerDTO);
		return new ResponseEntity<>(createdManager, HttpStatus.CREATED);
	}

	@GetMapping("/{managerId}")
	public ResponseEntity<ManagerDTOReq> getManagerById(@PathVariable Long managerId) {
		ManagerDTOReq managerDTO = managerService.getManagerById(managerId);
		return ResponseEntity.ok(managerDTO);
	}

	@GetMapping
	public ResponseEntity<List<ManagerDTOReq>> getAllManagers() {
		List<ManagerDTOReq> managers = managerService.getAllManagers();
		return ResponseEntity.ok(managers);
	}

	@DeleteMapping("/{managerId}")
	public ResponseEntity<String> deleteManager(@PathVariable Long managerId) {
		Long deletedManagerId = managerService.deleteManager(managerId);
		return ResponseEntity.ok("Manager with ID " + deletedManagerId + " has been deleted successfully.");
	}

}
