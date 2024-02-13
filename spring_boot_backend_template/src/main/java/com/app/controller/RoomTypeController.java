package com.app.controller;

import com.app.dto.RoomTypeDTO;
import com.app.service.RoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roomtypes")
public class RoomTypeController {

    private final RoomTypeService roomTypeService;

    @Autowired
    public RoomTypeController(RoomTypeService roomTypeService) {
        this.roomTypeService = roomTypeService;
    }

    @PostMapping
    public ResponseEntity<RoomTypeDTO> createRoomType(@RequestBody RoomTypeDTO roomTypeDTO) {
        RoomTypeDTO savedRoomType = roomTypeService.saveRoomType(roomTypeDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedRoomType);
    }

    @GetMapping("/{typeId}")
    public ResponseEntity<RoomTypeDTO> getRoomTypeById(@PathVariable Long typeId) {
        return roomTypeService.getRoomTypeById(typeId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<RoomTypeDTO>> getAllRoomTypes() {
        List<RoomTypeDTO> roomTypes = roomTypeService.getAllRoomTypes();
        return ResponseEntity.ok(roomTypes);
    }

    @DeleteMapping("/{typeId}")
    public ResponseEntity<Void> deleteRoomType(@PathVariable Long typeId) {
        roomTypeService.deleteRoomType(typeId);
        return ResponseEntity.noContent().build();
    }

    
}
