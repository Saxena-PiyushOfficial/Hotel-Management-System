package com.app.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingDAO;
import com.app.dao.GuestDAO;
import com.app.dao.HotelDAO;
import com.app.dao.PaymentDAO;
import com.app.dto.BookingDTO;
import com.app.dto.PaymentDTO;
import com.app.entity.Booking;
import com.app.entity.Guest;
import com.app.entity.Hotel;
import com.app.entity.Payment;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingDAO bookingDao;

	@Autowired
	HotelDAO hotelDao;

	@Autowired
	PaymentDAO paymentDao;
	
	@Autowired
	GuestDAO guestDao;

	@Autowired
	ModelMapper modelMapper;

	@Override
	public BookingDTO addBooking(BookingDTO newBooking) {
		Long hotelID = newBooking.getHotelID();
		Long guestID = newBooking.getGuestID();

		Hotel oldHotel = hotelDao.findById(1L).orElse(null);
		Guest oldGuest = guestDao.findById(guestID).orElse(null);

		newBooking.setHotel(oldHotel);
		newBooking.setGuest(oldGuest);
		newBooking.setPayment(null);

		Booking booking = modelMapper.map(newBooking, Booking.class);
		
		booking.setPayment(null);
		
		
		
		bookingDao.save(booking);
		
		
		return convertToDto(booking);
	}

	@Override
	public Optional<BookingDTO> getBookingById(Long bookingID) {
		Optional<Booking> oldBooking = bookingDao.findById(bookingID);
		
		return oldBooking.map(booking->convertToDto(booking)) ;
	}

	@Override
	public List<BookingDTO> getAllBookings() {
		List<Booking> bookings = bookingDao.findAll();
		return bookings.stream().map(this::convertToDto).collect(Collectors.toList());
	}
	
	public PaymentDTO addedPayment(Long bookingID)
	{
		Booking oldBooking=bookingDao.findById(bookingID).orElse(null);
		double totalPayment = calculatePayment(1200, oldBooking.getCheckInDate(), oldBooking.getCheckOutDate());
		
		Payment newPayment=new Payment();
		newPayment.setPaymentDate(LocalDate.now());
		newPayment.setBooking(oldBooking);
		newPayment.setPaymentMethod("UPI");
		newPayment.setAmount(totalPayment);
		
		Payment savedPayment = paymentDao.save(newPayment);
		
		oldBooking.setPayment(savedPayment);
		bookingDao.save(oldBooking);
		
		return modelMapper.map(savedPayment, PaymentDTO.class);
	}

	@Override
	public Long deleteBooking(Long id) {
		bookingDao.findById(id).orElseThrow(() -> new NoSuchElementException("Booking not found with id : " + id));
		bookingDao.deleteById(id);
		return id;
	}

	private BookingDTO convertToDto(Booking booking) {
		BookingDTO bookingDto = modelMapper.map(booking, BookingDTO.class);
		if (booking.getHotel() != null) {
			bookingDto.setHotelID(booking.getHotel().getHotelID()); // Set only the hotel ID

			if (booking.getGuest() != null) {
				bookingDto.setGuestID(booking.getGuest().getGuestID());
			} else {
				bookingDto.setGuestID(null);
			}
		} else {
			bookingDto.setHotelID(null); // Set hotel ID as null if hotel is null
		}
		return bookingDto;
	}
	public double calculateTotalPayment(List<Booking> bookings) {
        double totalPayment = 0.0;
        for (Booking booking : bookings) {
            Payment payment = booking.getPayment(); // Assuming Payment is a member of Booking
            if (payment != null) {
                totalPayment += payment.getAmount();
            }
        }
        return totalPayment;
    }
 
 public double calculatePayment(double pricePerNight, LocalDate checkInDate, LocalDate checkOutDate) {
        long numberOfNights = ChronoUnit.DAYS.between(checkInDate, checkOutDate);
        return pricePerNight * numberOfNights;
    }


}
