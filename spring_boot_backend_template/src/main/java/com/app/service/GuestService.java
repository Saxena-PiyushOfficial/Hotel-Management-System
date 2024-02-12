package com.app.service;

import java.util.List;

import com.app.dto.GuestDTO;

public interface GuestService {
	GuestDTO createGuest(GuestDTO guestDTO);

	GuestDTO getGuestById(Long guestId);

	List<GuestDTO> getAllGuests();

	void deleteGuest(Long guestId);
}
