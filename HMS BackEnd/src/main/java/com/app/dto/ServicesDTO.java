package com.app.dto;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import com.app.entity.Hotel;

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
public class ServicesDTO {
	
	    private Long serviceID;

	    @NotBlank(message = "Service name is required")
	    private String serviceName;

	    @NotBlank(message = "Description is required")
	    private String description;

	    @Positive(message = "Cost must be a positive value")
	    private double cost;
    private Hotel hotel;
    
    
	
	
}
