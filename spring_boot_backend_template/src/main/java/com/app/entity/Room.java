package com.app.entity;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name = "Room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomID;

    
    @ManyToOne
    @JoinColumn(name = "hotelID")
    @JsonIgnoreProperties(value="hotel")
    private Hotel hotel;

    public void setRoomID(Long roomID) {
		this.roomID = roomID;
	}
	@ManyToOne
    @JoinColumn(name = "typeID")
	 @JsonIgnoreProperties(value="roomType")
    private RoomType roomType;

    private String status;
    private String cleanStatus;
    
    
    

	public Room(Long roomID, Hotel hotel, RoomType roomType, String status, String cleanStatus) {
		super();
		this.roomID = roomID;
		this.hotel = hotel;
		this.roomType = roomType;
		this.status = status;
		this.cleanStatus = cleanStatus;
	}
	public Room() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getRoomID() {
		return roomID;
	}
	
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}
	public RoomType getRoomType() {
		return roomType;
	}
	public void setRoomType(RoomType roomType) {
		this.roomType = roomType;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getCleanStatus() {
		return cleanStatus;
	}
	public void setCleanStatus(String cleanStatus) {
		this.cleanStatus = cleanStatus;
	}

   
}