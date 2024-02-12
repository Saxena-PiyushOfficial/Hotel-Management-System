package com.app.dto;

import com.app.entity.Hotel;

public class RoomDTO {
    private Long roomId;
    private Long hotelId;
    private Long typeId;
    private String status;
    private String cleanStatus;
     private Hotel hotel;
    public RoomDTO() {
    }

   

    public RoomDTO(Long roomId, Long hotelId, Long typeId, String status, String cleanStatus, Hotel hotel) {
		super();
		this.roomId = roomId;
		this.hotelId = hotelId;
		this.typeId = typeId;
		this.status = status;
		this.cleanStatus = cleanStatus;
		this.hotel = hotel;
	}



	public Long getRoomId() {
        return roomId;
    }

   

    public Long getHotelId() {
        return hotelId;
    }

    public void setHotelId(Long hotelId) {
        this.hotelId = hotelId;
    }

    public Long getTypeId() {
        return typeId;
    }

    public void setTypeId(Long typeId) {
        this.typeId = typeId;
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



	public Hotel getHotel() {
		return hotel;
	}



	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}



	public void setRoomId(Long roomId) {
		this.roomId = roomId;
	}
    
    
}

