package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Manager;

public interface ManagerDAO extends JpaRepository<Manager, Long> {

}
