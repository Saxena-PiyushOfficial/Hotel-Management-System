package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Owner;
@Repository
public interface OwnerDAO extends JpaRepository<Owner, Long> {
	Optional<Owner> findByEmail(String email);

}
