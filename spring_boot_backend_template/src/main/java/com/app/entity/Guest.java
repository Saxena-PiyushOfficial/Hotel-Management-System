package com.app.entity;

import java.time.LocalDate;

import javax.persistence.*;
import javax.validation.constraints.*;


import lombok.*;

@Entity
@Table(name = "Guest")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
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

	@ManyToOne
	@JoinColumn(name = "hotelID", referencedColumnName = "hotelID")
	private Hotel hotel;

	@OneToOne(mappedBy = "guest", cascade = CascadeType.ALL)
	private Booking booking;

}