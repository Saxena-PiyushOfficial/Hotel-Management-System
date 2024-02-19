package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Hotel;
@Repository
public interface HotelDAO extends JpaRepository<Hotel, Long>  {
	List<Hotel> findByOwnerOwnerID(Long ownerID);
}
