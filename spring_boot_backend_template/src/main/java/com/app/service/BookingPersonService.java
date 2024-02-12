package com.app.service;

import java.util.List;

import com.app.dto.BookingPersonDTO;

public interface BookingPersonService {
	BookingPersonDTO createBookingPerson(BookingPersonDTO bookingPersonDTO);

	BookingPersonDTO getBookingPersonById(Long bookingPersonId);

	List<BookingPersonDTO> getAllBookingPersons();

	void deleteBookingPerson(Long bookingPersonId);
}
