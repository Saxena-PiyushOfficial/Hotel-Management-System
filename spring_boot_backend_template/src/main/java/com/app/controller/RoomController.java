package com.app.controller;

import com.app.dto.RoomDTO;
import com.app.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

	@Autowired
	private RoomService roomService;

	@PostMapping
	public ResponseEntity<RoomDTO> createRoom(@RequestBody RoomDTO roomDTO) {
		RoomDTO savedRoom = roomService.saveRoom(roomDTO);
		return new ResponseEntity<>(savedRoom, HttpStatus.OK);
	}
	@GetMapping("/{roomId}")
	public ResponseEntity<RoomDTO> getRoomById(@PathVariable Long roomId) {
		return roomService.getRoomById(roomId).map(roomDTO -> new ResponseEntity<>(roomDTO, HttpStatus.OK))
				.orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@GetMapping
	public ResponseEntity<List<RoomDTO>> getAllRooms() {
		List<RoomDTO> rooms = roomService.getAllRooms();
		return new ResponseEntity<>(rooms, HttpStatus.OK);
	}

	@DeleteMapping("/{roomId}")
	public ResponseEntity<Void> deleteRoom(@PathVariable Long roomId) {
		roomService.deleteRoom(roomId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
