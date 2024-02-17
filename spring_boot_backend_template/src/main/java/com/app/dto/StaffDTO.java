package com.app.dto;

import java.time.LocalDate;

import com.app.entity.Manager;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StaffDTO {
	private Long staffId;

	private String firstName;
	private String lastName;
	private String position;
	private double salary;
	private LocalDate dob;
	private String phone;
	private String email;
	private String password;
	private LocalDate hireDate;
	
	private Long managerId;
	@JsonIgnore
	private Manager manager;

}
