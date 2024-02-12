package com.app.entity;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "BookingPerson")
public class BookingPerson {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "booking_person_id")
	private Long bookingPersonID;

	@Size(max = 50)
	@Column(name = "first_name", nullable = false, length = 50)
	private String firstName;

	@Size(max = 50)
	@Column(name = "last_name", nullable = false, length = 50)
	private String lastName;

	@Size(max = 100)
	@Column(name = "phone", nullable = false, length = 100)
	private String phone;

	@Size(max = 100)
	@Column(name = "email", nullable = false, length = 100)
	private String email;

	@Size(max = 100)
	@Column(name = "password", nullable = false, length = 100)
	private String password;

	public BookingPerson() {
		super();
	}

	public BookingPerson(Long bookingPersonID, @NotBlank @Size(max = 50) String firstName,
			@NotBlank @Size(max = 50) String lastName, @NotBlank @Size(max = 100) String phone,
			@NotBlank @Size(max = 100) String email, @NotBlank @Size(max = 100) String password) {
		super();
		this.bookingPersonID = bookingPersonID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.password = password;
	}

	public Long getBookingPersonID() {
		return bookingPersonID;
	}

	public void setBookingPersonID(Long bookingPersonID) {
		this.bookingPersonID = bookingPersonID;
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

	@Override
	public String toString() {
		return "BookingPerson [bookingPersonID=" + bookingPersonID + ", firstName=" + firstName + ", lastName="
				+ lastName + ", phone=" + phone + ", email=" + email + ", password=" + password + "]";
	}

}