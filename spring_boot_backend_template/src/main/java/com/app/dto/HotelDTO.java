package com.app.dto;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;
import javax.validation.constraints.Pattern;

import com.app.entity.Owner;

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
public class HotelDTO {
	
    private Long hotelId;

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Address is required")
    private String address;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must contain only digits")
    private String phone;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @Min(value = 1, message = "Stars should be at least 1")
    @Max(value = 5, message = "Stars should not exceed 5")
    private int stars;

    @NotBlank(message = "Check-in time is required")
    private String checkInTime;

    @NotBlank(message = "Check-out time is required")
    private String checkOutTime;

    @Valid
    private Owner owner;

    @Min(value = 0, message = "Revenue cannot be negative")
    private double revenue;

}