package com.app.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Owner")
public class Owner {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ownerID;

	private String firstName;
	private String lastName;
	private String phone;
	private String email;
	private String password;

	@JsonIgnore
	@OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Hotel> hotels = new ArrayList<>();

	public Owner() {
		super();
	}

	public Owner(Long ownerID, String firstName, String lastName, String phone, String email, String password,
			List<Hotel> hotels) {
		super();
		this.ownerID = ownerID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.hotels = hotels;
	}
	

	public Long getOwnerID() {
		return ownerID;
	}
	
	

	public void setOwnerID(Long ownerID) {
		this.ownerID = ownerID;
	}

	public void addHotel(Hotel hotel) {
		hotels.add(hotel);
		hotel.setOwner(this);
	}

	public void removeHotel(Hotel hotel) {
		hotels.remove(hotel);
		hotel.setOwner(null);
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Hotel> getHotels() {
		return hotels;
	}

	public void setHotels(List<Hotel> hotels) {
		this.hotels = hotels;
	}

}
