package com.app.service;

import java.util.List;

import com.app.dto.GuestDTO;
import com.app.dto.GuestDTOAuth;

public interface GuestService {
	GuestDTO createGuest(GuestDTO guestDTO);

	GuestDTO getGuestById(Long guestId);

	List<GuestDTO> getAllGuests();

	Long deleteGuest(Long guestId);
	GuestDTO authenticateGuest(GuestDTOAuth authDTO);
}
