package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Manager;
import com.app.entity.Owner;

public interface ManagerDAO extends JpaRepository<Manager, Long> {
	Optional<Manager> findByEmail(String email);
}
