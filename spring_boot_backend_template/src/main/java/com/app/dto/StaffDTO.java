package com.app.dto;

import java.time.LocalDate;

import com.app.entity.Hotel;

public class StaffDTO {
    private Long staffId;
 
    private String firstName;
    private String lastName;
    private String position;
    private double salary;
    private LocalDate dob;
    private String phone;
    private String email;
    private String password;
    private LocalDate hireDate;
    private Hotel hotel;

    public StaffDTO() {
    }

    
    public StaffDTO(Long staffId, String firstName, String lastName, String position, double salary,
			LocalDate dob, String phone, String email, String password, LocalDate hireDate, Hotel hotel) {
		super();
		this.staffId = staffId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
		this.salary = salary;
		this.dob = dob;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.hireDate = hireDate;
		this.hotel = hotel;
	}


	public Long getStaffId() {
        return staffId;
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


	public Hotel getHotel() {
		return hotel;
	}


	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}


	public void setStaffId(Long staffId) {
		this.staffId = staffId;
	}

}
