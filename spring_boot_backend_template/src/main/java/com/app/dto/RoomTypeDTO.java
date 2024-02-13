package com.app.dto;

import com.app.entity.RoomTypes; 

public class RoomTypeDTO {
    private Long typeId;
    private RoomTypes roomType; 

    private String description;
    private double pricePerNight;

    public RoomTypeDTO() {
    }

    public RoomTypeDTO(Long typeId, RoomTypes roomType, String description, double pricePerNight) {
        super();
        this.typeId = typeId;
        this.roomType = roomType;
        this.description = description;
        this.pricePerNight = pricePerNight;
    }

    public void setTypeId(Long typeId) {
        this.typeId = typeId;
    }

    public Long getTypeId() {
        return typeId;
    }

    public RoomTypes getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomTypes roomType) {
        this.roomType = roomType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPricePerNight() {
        return pricePerNight;
    }

    public void setPricePerNight(double pricePerNight) {
        this.pricePerNight = pricePerNight;
    }
}
