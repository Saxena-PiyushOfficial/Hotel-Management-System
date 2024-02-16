package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.*;

import com.app.entity.Booking;
import com.app.entity.Hotel;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GuestDTO {

	private Long guestID;
	@NotBlank
	private String firstName;
	@NotBlank
	private String lastName;
	@NotNull
	@Past
	private LocalDate dob;
	@NotBlank
	private String address;
	@NotBlank
	private String phone;
	@NotBlank
	@Email
	private String email;
	@NotBlank
	private String password;
	
	private int noOfGuest;
	
	private Long hotelID;
	
	private Long bookingID;
	
	@JsonIgnore
	private Hotel hotel;
	@JsonIgnore
	private Booking booking;

	

}
