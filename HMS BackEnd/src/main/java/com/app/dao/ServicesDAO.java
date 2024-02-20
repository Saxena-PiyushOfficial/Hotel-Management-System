package com.app.dao;

import com.app.entity.Services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesDAO extends JpaRepository<Services, Long> {
	List<Services> findByServiceName(String serviceName) ;
	List<Services> findByCost(double cost);
	List<Services> findByDescription(String description);
}
