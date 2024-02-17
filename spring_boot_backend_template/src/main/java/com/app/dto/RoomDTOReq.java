package com.app.dto;

import com.app.entity.Hotel;
import com.app.entity.RoomTypes;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RoomDTOReq {
   
    private long roomNumber;
    private Long hotelID; 
    private RoomTypes roomType;

    private double pricePerNight;
    private String isAvailable;
    private String cleanStatus;
    @JsonIgnore
    private Hotel hotel; 
    
}
