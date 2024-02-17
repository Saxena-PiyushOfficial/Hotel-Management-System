package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.HotelDTO;
import com.app.exception.EmptyDataException;
import com.app.service.HotelService;

import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/hotels")
@CrossOrigin
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @PostMapping
    public ResponseEntity<HotelDTO> createHotel(@Valid @RequestBody HotelDTO hotelDTO) {
    	 System.out.println("Received HotelDTO: " + hotelDTO.toString());
    	HotelDTO savedHotel = hotelService.saveHotel(hotelDTO);
        return new ResponseEntity<>(savedHotel, HttpStatus.CREATED);
    }

    @GetMapping("/{hotelId}")
    public ResponseEntity<HotelDTO> getHotelById(@PathVariable Long hotelId) {
        return hotelService.getHotelById(hotelId)
                .map(hotelDTO -> new ResponseEntity<>(hotelDTO, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public ResponseEntity<List<HotelDTO>> getAllHotels() throws EmptyDataException {
        List<HotelDTO> hotels = hotelService.getAllHotels();
        return new ResponseEntity<>(hotels, HttpStatus.OK);
    }

    @GetMapping("/owner/{ownerId}")
    public ResponseEntity<List<HotelDTO>> getHotelsByOwner(@PathVariable Long ownerId) {
        List<HotelDTO> hotels = hotelService.getHotelsByOwner(ownerId);
        return new ResponseEntity<>(hotels, HttpStatus.OK);
    }

    @DeleteMapping("/{hotelId}")
    public ResponseEntity<Void> deleteHotel(@PathVariable Long hotelId) {
        hotelService.deleteHotel(hotelId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
