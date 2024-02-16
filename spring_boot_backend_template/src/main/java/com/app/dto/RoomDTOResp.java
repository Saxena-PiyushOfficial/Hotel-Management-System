package com.app.dto;
import com.app.entity.Hotel;
import com.app.entity.RoomTypes;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RoomDTOResp {
    private Long roomID;
	private Hotel hotel;
    private long roomNumber;
    private RoomTypes roomType;
    private double pricePerNight;
    private String isAvailable;
    private String cleanStatus;
  
}
