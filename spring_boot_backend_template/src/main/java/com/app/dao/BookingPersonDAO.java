package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.BookingPerson;

public interface BookingPersonDAO extends JpaRepository<BookingPerson, Long> {

}
