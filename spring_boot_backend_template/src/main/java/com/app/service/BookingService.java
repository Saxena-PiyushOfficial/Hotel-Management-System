package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.BookingDTO;
import com.app.dto.PaymentDTO;

public interface BookingService {
	BookingDTO addBooking(BookingDTO newBooking);
	Optional<BookingDTO> getBookingById(Long bookingID);
	List<BookingDTO> getAllBookings();
	Long deleteBooking(Long id);
	PaymentDTO addedPayment(Long bookingID);
}
