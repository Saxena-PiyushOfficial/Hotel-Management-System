package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Guest;

public interface GuestDAO extends JpaRepository<Guest, Long>{
	
}
