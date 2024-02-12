package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Booking;

public interface BookingDao extends JpaRepository<Booking, Long>{
	Optional<Booking> findByBookingPerson(Long id);
}
