package com.app.dto;

import java.time.LocalDate;

import com.app.entity.Hotel;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ManagerDTOReq {
	
	private Long hotelId;
	private String firstName;
	private String lastName;
	private double salary;
	private LocalDate dob;
	private String phone;
	private String email;
	private String password;
	private LocalDate hireDate;
	
	@JsonIgnore
	private Hotel hotel;
}
