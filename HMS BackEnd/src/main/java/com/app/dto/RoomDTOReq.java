package com.app.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import com.app.entity.Hotel;
import com.app.entity.RoomTypes;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RoomDTOReq {
   
	@Positive(message = "Room number must be a positive value")
    private long roomNumber;

   
    private Long hotelID;

    @NotNull(message = "Room type is required")
    private RoomTypes roomType;

    @Positive(message = "Price per night must be a positive value")
    private double pricePerNight;

    @NotBlank(message = "Availability status is required")
    private String isAvailable;

    @NotBlank(message = "Clean status is required")
    private String cleanStatus;
    @JsonIgnore
    private Hotel hotel; 
    
}
