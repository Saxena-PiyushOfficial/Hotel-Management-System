package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import com.app.entity.Guest;
import com.app.entity.Hotel;
import com.app.entity.Payment;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class BookingDTO {
	
	private Long bookingID;
	@Positive(message = "Room number must be a positive value")
	private int roomNumber;
	
	@NotNull(message = "Check-in date is required")
    private LocalDate checkInDate;

    @NotNull(message = "Check-out date is required")
    private LocalDate checkOutDate;

    @NotBlank(message = "Documents description is required")
    private String docsDescription;



   
    private Long paymentID;
    
    @Positive(message="No of Guest should be positive")
    private int noOfGuest;

    
    private Long hotelID;

   
    private Long guestID;
	
	@JsonIgnore
	private Payment payment;
	@JsonIgnore
	private Guest guest;
	@JsonIgnore
	private Hotel hotel;

}
