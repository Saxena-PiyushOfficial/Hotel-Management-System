package com.app.dto;

import java.time.LocalDate;

import com.app.entity.Hotel;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ManagerDTOResp {

	private Hotel hotel;
	private String firstName;
	private String lastName;
	private double salary;
	private LocalDate dob;
	private String phone;
	private String email;
	private String password;
	private LocalDate hireDate;

}
