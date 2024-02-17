package com.app.service;

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
import com.app.dto.GuestDTO;
import com.app.dto.GuestDTOAuth;
import com.app.dto.ManagerDTOAuth;
import com.app.dto.ManagerDTOResp;
import com.app.entity.Booking;
import com.app.entity.Guest;
import com.app.entity.Hotel;
import com.app.entity.Manager;


@Transactional
@Service
public class GuestServiceImpl implements GuestService {

	private final GuestDAO guestDao;
	private final HotelDAO hotelDao;
	private final ModelMapper modelMapper;

	@Autowired
	public GuestServiceImpl(GuestDAO guestDao, ModelMapper modelMapper, BookingDAO bookingDao, HotelDAO hotelDao) {
		this.guestDao = guestDao;
		this.hotelDao = hotelDao;
		this.modelMapper = modelMapper;
	}

	@Override
	public GuestDTO createGuest(GuestDTO guestDTO) {
		guestDTO.setHotelID(1L);
		long hotelId = guestDTO.getHotelID();
		Optional<Hotel> optionalHotel = hotelDao.findById(hotelId);
		Hotel oldHotel = optionalHotel.orElse(null);
		guestDTO.setHotel(oldHotel);
		Guest guest = modelMapper.map(guestDTO, Guest.class);
		guest.setBooking(null);
		Guest savedGuest = guestDao.save(guest);
		return convertToDto(savedGuest);
	}

	@Override
	public GuestDTO getGuestById(Long guestId) {
		Guest guest = guestDao.findById(guestId)
				.orElseThrow(() -> new NoSuchElementException("Guest not found with id: " + guestId));
		return convertToDto(guest);
	}

	@Override
	public List<GuestDTO> getAllGuests() {
		List<Guest> guests = guestDao.findAll();
		return guests.stream().map(this::convertToDto).collect(Collectors.toList());
	}

	@Override
	public Long deleteGuest(Long guestId) {
		
		guestDao.findById(guestId)
        .orElseThrow(() -> new NoSuchElementException("Guest not found with id: " + guestId));
		guestDao.deleteById(guestId);
		return guestId;

	}
	
	
	private GuestDTO convertToDto(Guest guest) {
		GuestDTO guestDTO = modelMapper.map(guest, GuestDTO.class);
		if (guest.getHotel() != null) {
			guestDTO.setHotelID(guest.getHotel().getHotelID()); // Set only the hotel ID
			
		} else {
			guestDTO.setHotelID(null);
			; // Set hotel ID as null if hotel is null
		}
		return guestDTO;
	}
	
	@SuppressWarnings("unused")
	private GuestDTO convertToDto(Guest guest,Booking booking) {
		GuestDTO guestDTO = modelMapper.map(guest, GuestDTO.class);
		if (guest.getHotel() != null) {
			guestDTO.setHotelID(guest.getHotel().getHotelID()); // Set only the hotel ID
			if(guest.getBooking() != null) {
				guestDTO.setBookingID(booking.getBookingID());
			} else {
				guestDTO.setBookingID(null);
			}
			
		} else {
			guestDTO.setHotelID(null);
			; // Set hotel ID as null if hotel is null
		}
		return guestDTO;
	}
	
	
	 @Override
	    public GuestDTO authenticateGuest(GuestDTOAuth authDTO) {
	        String email = authDTO.getEmail();
	        String password = authDTO.getPassword();

	        Guest guest = guestDao.findByEmail(email)
	                .orElseThrow(() -> new NoSuchElementException("Guest not found with email: " + email));

	        if (password.equals(guest.getPassword())) {
	            return convertToDto(guest);
	        } else {
	            throw new RuntimeException("Incorrect password for guest with email: " + email);
	        }
	    }
}
