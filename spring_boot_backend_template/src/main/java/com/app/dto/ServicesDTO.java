package com.app.dto;
import com.app.entity.Hotel;

import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ServicesDTO {
    private Long serviceID;
    private String serviceName;
    private String description;
    private double cost;
    private Hotel hotel;
    
    
	
	
}
