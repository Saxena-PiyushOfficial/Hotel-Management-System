package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.BookingPersonDTO;
import com.app.service.BookingPersonService;

import java.util.List;

@RestController
@RequestMapping("/api/bookingpersons")
public class BookingPersonController {

    private final BookingPersonService bookingPersonService;

    @Autowired
    public BookingPersonController(BookingPersonService bookingPersonService) {
        this.bookingPersonService = bookingPersonService;
    }

    @PostMapping
    public ResponseEntity<BookingPersonDTO> createBookingPerson(@RequestBody BookingPersonDTO bookingPersonDTO) {
        BookingPersonDTO createdBookingPerson = bookingPersonService.createBookingPerson(bookingPersonDTO);
        return new ResponseEntity<>(createdBookingPerson, HttpStatus.CREATED);
    }

    @GetMapping("/{bookingPersonId}")
    public ResponseEntity<BookingPersonDTO> getBookingPersonById(@PathVariable Long bookingPersonId) {
        BookingPersonDTO bookingPersonDTO = bookingPersonService.getBookingPersonById(bookingPersonId);
        return ResponseEntity.ok(bookingPersonDTO);
    }

    @GetMapping
    public ResponseEntity<List<BookingPersonDTO>> getAllBookingPersons() {
        List<BookingPersonDTO> bookingPersons = bookingPersonService.getAllBookingPersons();
        return ResponseEntity.ok(bookingPersons);
    }

    @DeleteMapping("/{bookingPersonId}")
    public ResponseEntity<Void> deleteBookingPerson(@PathVariable Long bookingPersonId) {
        bookingPersonService.deleteBookingPerson(bookingPersonId);
        return ResponseEntity.noContent().build();
    }
}
