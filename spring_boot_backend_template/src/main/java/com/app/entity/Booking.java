package com.app.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Booking")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingID;

    private int roomNumber;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String docsDescription;
    
    @Column(name = "no_of_guest", length = 100)
	private int noOfGuest;
    
   	    
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "paymentID")
    private Payment payment;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "guestID")
    private Guest guest;
    
   
    @ManyToOne
    @JoinColumn(name = "hotelID")
    private Hotel hotel;

    
}