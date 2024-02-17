package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.GuestDTO;
import com.app.exception.EmptyDataException;
import com.app.service.GuestService;

import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/guests")
@CrossOrigin
public class GuestController {

    private final GuestService guestService;

    @Autowired
    public GuestController(GuestService guestService) {
        this.guestService = guestService;
    }

    @PostMapping
    public ResponseEntity<GuestDTO> createGuest(@Valid @RequestBody GuestDTO guestDTO) {
        GuestDTO createdGuest = guestService.createGuest(guestDTO);
        return new ResponseEntity<>(createdGuest, HttpStatus.CREATED);
    }

    @GetMapping("/{guestId}")
    public ResponseEntity<GuestDTO> getGuestById(@PathVariable Long guestId) {
        GuestDTO guestDTO = guestService.getGuestById(guestId);
        return ResponseEntity.ok(guestDTO);
    }

    @GetMapping
    public ResponseEntity<List<GuestDTO>> getAllGuests() throws EmptyDataException {
        List<GuestDTO> guests = guestService.getAllGuests();
        return ResponseEntity.ok(guests);
    }

    @DeleteMapping("/{guestId}")
    public ResponseEntity<String> deleteGuest(@PathVariable Long guestId) {
        Long deletedGuestId = guestService.deleteGuest(guestId);
        return ResponseEntity.ok("Guest with ID "+ deletedGuestId +" is been deleted successfully!");
    }
}
