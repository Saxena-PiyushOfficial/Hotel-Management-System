package com.app.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OwnerDTO {
    private Long ownerID;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String password;  
}

