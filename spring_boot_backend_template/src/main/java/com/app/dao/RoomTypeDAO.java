package com.app.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.RoomType;

@Repository
public interface RoomTypeDAO extends JpaRepository<RoomType, Long> {
    
}

