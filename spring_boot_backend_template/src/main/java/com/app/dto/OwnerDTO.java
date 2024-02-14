package com.app.dto;

public class OwnerDTO {
    private Long ownerID;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String password;

    public OwnerDTO() {
    }

    public OwnerDTO(Long ownerID, String firstName, String lastName, String phone, String email,String password) {
        this.ownerID = ownerID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
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

