package com.app.controller;

import com.app.dto.RoomDTOReq;
import com.app.dto.RoomDTOResp;
import com.app.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
@CrossOrigin
public class RoomController {

    private final RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping
    public ResponseEntity<RoomDTOResp> createRoom(@RequestBody RoomDTOReq roomDTO) {
        RoomDTOResp createdRoom = roomService.createRoom(roomDTO);
        return new ResponseEntity<>(createdRoom, HttpStatus.CREATED);
    }

    @GetMapping("/{roomID}")
    public ResponseEntity<RoomDTOReq> getRoomById(@PathVariable Long roomID) {
        RoomDTOReq roomDTO = roomService.getRoomById(roomID);
        return ResponseEntity.ok(roomDTO);
    }

    @GetMapping
    public ResponseEntity<List<RoomDTOReq>> getAllRooms() {
        List<RoomDTOReq> rooms = roomService.getAllRooms();
        return ResponseEntity.ok(rooms);
    }

    @GetMapping("/room-types")
    public ResponseEntity<List<String>> getAllRoomTypes() {
        List<String> roomTypes = roomService.getAllRoomTypes();
        return ResponseEntity.ok(roomTypes);
    }

    @DeleteMapping("/{roomID}")
    public ResponseEntity<String> deleteRoom(@PathVariable Long roomID) {
        Long deletedRoomID = roomService.deleteRoom(roomID);
        return ResponseEntity.ok("Room with ID " + deletedRoomID + " has been deleted successfully.");
    }
}
