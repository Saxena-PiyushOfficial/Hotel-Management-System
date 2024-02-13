package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingDao;
import com.app.dto.BookingDTO;
import com.app.entity.Booking;


@Service
@Transactional
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	BookingDao bookingDao;
	
	@Autowired
	ModelMapper modelMapper;

	@Override
	public BookingDTO addBooking(BookingDTO newBooking) {
		Booking booking= modelMapper.map(newBooking, Booking.class);
		bookingDao.save(booking);
		return modelMapper.map(booking, BookingDTO.class);
	}

	@Override
	public void deleteBooking(Long id) {
		
		bookingDao.deleteById(id);

	}

	@Override
	public Optional<BookingDTO> getBookingById(Long bookingID) {
		Optional<Booking> oldBooking=bookingDao.findById(bookingID);
		return oldBooking.map(booking->modelMapper.map(booking, BookingDTO.class));
	}

	

	@Override
	public List<BookingDTO> getAllBookings() {
		List<Booking> bookings = bookingDao.findAll();
        return bookings.stream()
                .map(booking -> modelMapper.map(booking, BookingDTO.class))
                .collect(Collectors.toList());
	}

}
