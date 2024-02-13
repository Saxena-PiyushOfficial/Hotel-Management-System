package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Staff;

import java.util.List;

@Repository
public interface StaffDAO extends JpaRepository<Staff, Long> {
    List<Staff> findByPosition(String position);
}
