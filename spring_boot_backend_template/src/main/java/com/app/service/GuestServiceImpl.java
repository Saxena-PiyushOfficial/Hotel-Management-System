package com.app.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.GuestDAO;
import com.app.dto.GuestDTO;
import com.app.entity.Guest;

@Transactional
@Service
public class GuestServiceImpl implements GuestService {

	private final GuestDAO guestDao;
	private final ModelMapper modelMapper;

	@Autowired
	public GuestServiceImpl(GuestDAO guestDao, ModelMapper modelMapper) {
		this.guestDao = guestDao;
		this.modelMapper = modelMapper;
	}

	@Override
	public GuestDTO createGuest(GuestDTO guestDTO) {
		Guest guest = modelMapper.map(guestDTO, Guest.class);
		Guest savedGuest = guestDao.save(guest);
		return modelMapper.map(savedGuest, GuestDTO.class);
	}

	@Override
	public GuestDTO getGuestById(Long guestId) {
		Guest guest = guestDao.findById(guestId)
				.orElseThrow(() -> new NoSuchElementException("Guest not found with id: " + guestId));
		return modelMapper.map(guest, GuestDTO.class);
	}

	@Override
	public List<GuestDTO> getAllGuests() {
		List<Guest> guests = guestDao.findAll();
		return guests.stream().map(guest -> modelMapper.map(guest, GuestDTO.class)).collect(Collectors.toList());
	}

	@Override
	public void deleteGuest(Long guestId) {
		 guestDao.deleteById(guestId);

	}

}
