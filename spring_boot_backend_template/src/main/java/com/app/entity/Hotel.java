package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;




@Entity
@Table(name = "Hotel")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
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
    private double revenue;

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

    @JsonIgnore
    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Guest> guests = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Manager> managers = new ArrayList<>();

    public void addManager(Manager manager) {
        managers.add(manager);
        manager.setHotel(this); // Set the bidirectional relationship

        if (manager.getHotel() == null || !manager.getHotel().equals(this)) {
            manager.setHotel(this);
        }
    }

    public void removeManager(Manager manager) {
        managers.remove(manager);
        manager.setHotel(null); // Remove the bidirectional relationship

        if (manager.getHotel() != null && manager.getHotel().equals(this)) {
            manager.setHotel(null);
        }
    }
    
	public void addGuest(Guest guest) {
	    guests.add(guest);
	    guest.setHotel(this); // set the bidirectional relationship

	    if (guest.getHotel() == null || !guest.getHotel().equals(this)) {
	        guest.setHotel(this);
	    }
	}
	public void removeGuest(Guest guest) {
	    guests.remove(guest);
	    guest.setHotel(null); // remove the bidirectional relationship

	    if (guest.getHotel() != null && guest.getHotel().equals(this)) {
	        guest.setHotel(null);
	    }
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
	


	public void setOwner(Owner owner) {
	        this.owner = owner;

	        if (owner != null) {
	            owner.getHotels().add(this);
	        }
	    }
	

	
}