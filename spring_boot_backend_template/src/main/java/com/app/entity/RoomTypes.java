package com.app.entity;
public enum RoomTypes {
    GOLD, 
    SILVER, 
    PLATINUM;

    private double roomCost;

    public double getCost(RoomType roomType) {
        return roomType.getPricePerNight();
    }

    public double getRoomCost(RoomType roomType) {
        this.roomCost = getCost(roomType);
        return roomCost;
    }

    public double getRoomCost() {
        return roomCost;
    }
}

