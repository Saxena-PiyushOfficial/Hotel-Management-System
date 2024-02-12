package com.app.entity;
import java.time.LocalDate;

import javax.persistence.*;
@Entity
@Table(name = "Staff")
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffID;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "hotelID")
    private Hotel hotel;

    private String firstName;
    private String lastName;
    private String position;
    private double salary;
    private LocalDate dob;
    private String phone;
    private String email;
    private String password;
    private LocalDate hireDate;
    
	public Long getStaffID() {
		return staffID;
	}
   
	public void setStaffID(Long staffID) {
		this.staffID = staffID;
	}

	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
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
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
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
	public LocalDate getHireDate() {
		return hireDate;
	}
	public void setHireDate(LocalDate hireDate) {
		this.hireDate = hireDate;
	}
	public Staff(Long staffID, Hotel hotel, String firstName, String lastName, String position, double salary,
			LocalDate dob, String phone, String email, String password, LocalDate hireDate) {
		super();
		this.staffID = staffID;
		this.hotel = hotel;
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
		this.salary = salary;
		this.dob = dob;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.hireDate = hireDate;
	}
	public Staff() {
		super();
	}
    
}
