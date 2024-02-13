package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.*;


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
	private String documentDescription;

	public GuestDTO() {
		super();
	}

	public GuestDTO(Long guestID, String firstName, String lastName, LocalDate dob, String address, String phone,
			String email, String password, String documentDescription) {
		super();
		this.guestID = guestID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.documentDescription = documentDescription;
	}

	public Long getGuestID() {
		return guestID;
	}

	public void setGuestID(Long guestID) {
		this.guestID = guestID;
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

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDocumentDescription() {
		return documentDescription;
	}

	public void setDocumentDescription(String documentDescription) {
		this.documentDescription = documentDescription;
	}

	@Override
	public String toString() {
		return "GuestDTO [guestID=" + guestID + ", firstName=" + firstName + ", lastName=" + lastName + ", dob=" + dob
				+ ", address=" + address + ", phone=" + phone + ", email=" + email + ", password=" + password
				+ ", documentDescription=" + documentDescription + "]";
	}

}
