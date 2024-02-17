package com.app.dto;

import java.time.LocalDate;
import com.app.entity.Guest;
import com.app.entity.Hotel;
import com.app.entity.Payment;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;
import lombok.Getter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class BookingDTO {

	private Long bookingID;
	private int roomNumber;
	private LocalDate checkInDate;
	private LocalDate checkOutDate;
	private String docsDescription;
	private String status;

	private Long paymentID;
	private Long hotelID;
	private Long guestID;
	
	@JsonIgnore
	private Payment payment;
	@JsonIgnore
	private Guest guest;
	@JsonIgnore
	private Hotel hotel;

}
