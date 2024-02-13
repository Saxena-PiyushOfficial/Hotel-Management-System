package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.BookingDTO;

public interface BookingService {
	BookingDTO addBooking(BookingDTO newBooking);
	Optional<BookingDTO> getBookingById(Long bookingID);
	List<BookingDTO> getAllBookings();
	void deleteBooking(Long id);
}
