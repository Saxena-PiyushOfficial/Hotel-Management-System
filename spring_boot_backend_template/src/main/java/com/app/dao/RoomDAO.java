package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Room;



@Repository
public interface RoomDAO extends JpaRepository<Room, Long> {
   
}
