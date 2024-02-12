package com.app.entity;

import java.time.LocalDate;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "Guest")
public class Guest {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "guest_id")
	private Long guestID;

	@Size(max = 50)
	@Column(name = "first_name", nullable = false, length = 50)
	private String firstName;

	@Size(max = 50)
	@Column(name = "last_name", nullable = false, length = 50)
	private String lastName;

	@Column(name = "dob", nullable = false)
	private LocalDate dob;

	@Size(max = 100)
	@Column(name = "address", nullable = false, length = 100)
	private String address;

	@Size(max = 20)
	@Column(name = "phone", nullable = false, length = 20)
	private String phone;

	@Size(max = 100)

	@Column(name = "email", nullable = false, length = 100)
	private String email;

	@Size(max = 100)
	@Column(name = "password", nullable = false, length = 100)
	private String password;

	@Size(max = 100)
	@Column(name = "document_description", length = 100)
	private String documentDescription;

	public Guest() {
		super();
	}

	public Guest(Long guestID, @NotBlank @Size(max = 50) String firstName, @NotBlank @Size(max = 50) String lastName,
			@NotNull @Past LocalDate dob, @NotBlank @Size(max = 100) String address,
			@NotBlank @Size(max = 20) String phone, @NotBlank @Size(max = 100) @Email String email,
			@NotBlank @Size(max = 100) String password, @Size(max = 100) String documentDescription) {
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
		return "Guest [guestID=" + guestID + ", firstName=" + firstName + ", lastName=" + lastName + ", dob=" + dob
				+ ", address=" + address + ", phone=" + phone + ", email=" + email + ", password=" + password
				+ ", documentDescription=" + documentDescription + "]";
	}

}