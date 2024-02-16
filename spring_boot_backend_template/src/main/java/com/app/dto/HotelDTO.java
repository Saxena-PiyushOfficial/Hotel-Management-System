package com.app.dto;

import com.app.entity.Owner;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class HotelDTO {
	private Long hotelId;
	private String name;
	private String address;
	private String phone;
	private String email;
	private int stars;
	private String checkInTime;
	private String checkOutTime;
	private Owner owner;
	private double revenue;

}