package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Guest;
import com.app.entity.Owner;

public interface GuestDAO extends JpaRepository<Guest, Long>{
	Optional<Guest> findByEmail(String email);
}
