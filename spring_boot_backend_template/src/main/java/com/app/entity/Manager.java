package com.app.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Manager {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "manager_id")
	private Long managerId;

	@ManyToOne
	@JoinColumn(name = "hotel_id")
	private Hotel hotel;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	private double salary;

	private LocalDate dob;

	private String phone;

	private String email;

	private String password;

	@Column(name = "hire_date")
	private LocalDate hireDate;

	@OneToMany(mappedBy = "manager", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Staff> staffs = new ArrayList<>();

	public void addChild(Staff staff) {
		staffs.add(staff);
		staff.setManager(this); // Set the parent reference on the child
	}

	public void removeChild(Staff staff) {
		staffs.remove(staff);
		staff.setManager(null); // Remove the parent reference from the child
	}
}
