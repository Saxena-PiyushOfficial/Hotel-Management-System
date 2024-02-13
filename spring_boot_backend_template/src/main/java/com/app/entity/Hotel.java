package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "Hotel")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hotelID;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ownerID")
    private Owner owner;

    private String name;
    private String address;
    private String phone;
    private String email;
    private int stars;
    private String checkInTime;
    private String checkOutTime;

    @JsonIgnore
    @OneToMany( mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Staff> staffs = new ArrayList<>();
    
    @JsonIgnore
    @OneToMany( mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Services> services = new ArrayList<>();

    @JsonIgnore
    @OneToMany( mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Room> rooms = new ArrayList<>();
    
    @JsonIgnore
    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Booking> bookings = new ArrayList<>();

    
    
    
	public Hotel() {
		super();
	}

	
	public Hotel(Long hotelID, Owner owner, String name, String address, String phone, String email, int stars,
			String checkInTime, String checkOutTime, List<Staff> staffs, List<Services> services, List<Room> rooms,
			List<Booking> bookings) {
		super();
		this.hotelID = hotelID;
	
		this.owner = owner;
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.stars = stars;
		this.checkInTime = checkInTime;
		this.checkOutTime = checkOutTime;
		this.staffs = staffs;
		this.services = services;
		this.rooms = rooms;
		this.bookings = bookings;
	}

	public void addService(Services service) {
	    services.add(service);
	    service.setHotel(this); // set the bidirectional relationship

	    if (service.getHotel() == null || !service.getHotel().equals(this)) {
	        service.setHotel(this);
	    }
	}
	public void removeService(Services service) {
	    services.remove(service);
	    service.setHotel(null); // remove the bidirectional relationship

	    if (service.getHotel() != null && service.getHotel().equals(this)) {
	        service.setHotel(null);
	    }
	}
	public void addStaff(Staff staff) {
	    staffs.add(staff);
	    staff.setHotel(this); // set the bidirectional relationship

	    if (staff.getHotel() == null || !staff.getHotel().equals(this)) {
	        staff.setHotel(this);
	    }
	}
	public void removeStaff(Staff staff) {
	    staffs.remove(staff);
	    staff.setHotel(null); // remove the bidirectional relationship

	    if (staff.getHotel() != null && staff.getHotel().equals(this)) {
	        staff.setHotel(null);
	    }
	}
	public void addRoom(Room room) {
        rooms.add(room);
        room.setHotel(this); 
    }


    public void removeRoom(Room room) {
        rooms.remove(room);
        room.setHotel(null); 
    }
	 public Long getHotelID() {
		return hotelID;
	}


	public void setHotelID(Long hotelID) {
		this.hotelID = hotelID;
	}


	public Owner getOwner() {
		return owner;
	}


	public void setOwner(Owner owner) {
	        this.owner = owner;

	        if (owner != null) {
	            owner.getHotels().add(this);
	        }
	    }
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public int getStars() {
		return stars;
	}

	public void setStars(int stars) {
		this.stars = stars;
	}

	public String getCheckInTime() {
		return checkInTime;
	}

	public void setCheckInTime(String checkInTime) {
		this.checkInTime = checkInTime;
	}

	public String getCheckOutTime() {
		return checkOutTime;
	}

	public void setCheckOutTime(String checkOutTime) {
		this.checkOutTime = checkOutTime;
	}

	public List<Staff> getStaffs() {
		return staffs;
	}

	public void setStaffs(List<Staff> staffs) {
		this.staffs = staffs;
	}

	public List<Services> getServices() {
		return services;
	}

	public void setServices(List<Services> services) {
		this.services = services;
	}

	public List<Room> getRooms() {
		return rooms;
	}

	public void setRooms(List<Room> rooms) {
		this.rooms = rooms;
	}

	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}

    
}