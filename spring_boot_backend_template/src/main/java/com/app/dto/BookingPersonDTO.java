package com.app.dto;

import javax.validation.constraints.NotBlank;

public class BookingPersonDTO {

	private Long bookingPersonID;
	@NotBlank
	private String firstName;
	@NotBlank
	private String lastName;
	@NotBlank
	private String phone;
	@NotBlank
	private String email;
	@NotBlank
	private String password;

	public BookingPersonDTO() {
		super();
	}

	public BookingPersonDTO(Long bookingPersonID, String firstName, String lastName, String phone, String email,
			String password) {
		super();
		this.bookingPersonID = bookingPersonID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.password = password;
	}

	@Override
	public String toString() {
		return "BookingPersonDTO [bookingPersonID=" + bookingPersonID + ", firstName=" + firstName + ", lastName="
				+ lastName + ", phone=" + phone + ", email=" + email + ", password=" + password + "]";
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

}
