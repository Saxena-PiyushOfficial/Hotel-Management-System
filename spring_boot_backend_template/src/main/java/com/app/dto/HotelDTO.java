package com.app.dto;

import com.app.entity.Owner;

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
	
	
	public HotelDTO() {
		super();
	}
	public HotelDTO(Long hotelId, String name, String address, String phone, String email, int stars,
			String checkInTime, String checkOutTime, Owner owner) {
		super();
		this.hotelId = hotelId;
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.stars = stars;
		this.checkInTime = checkInTime;
		this.checkOutTime = checkOutTime;
		this.owner = owner;
	}
	public Long getHotelId() {
		return hotelId;
	}
	public void setHotelId(Long hotelId) {
		this.hotelId = hotelId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getStars() {
		return stars;
	}
	public void setStars(int stars) {
		this.stars = stars;
	}
	public String getCheckInTime() {
		return checkInTime;
	}
	public void setCheckInTime(String checkInTime) {
		this.checkInTime = checkInTime;
	}
	public String getCheckOutTime() {
		return checkOutTime;
	}
	public void setCheckOutTime(String checkOutTime) {
		this.checkOutTime = checkOutTime;
	}
	public Owner getOwner() {
		return owner;
	}
	public void setOwner(Owner owner) {
		this.owner = owner;
	}
	
	

}