package com.app.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Booking;

public interface BookingDao extends JpaRepository<Booking, Long>{
	
}
