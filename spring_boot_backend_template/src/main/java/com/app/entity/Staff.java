package com.app.entity;
import java.time.LocalDate;

import javax.persistence.*;
@Entity
@Table(name = "Staff")
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffID;

    @ManyToOne
    @JoinColumn(name = "hotelID")
    private Hotel hotel;

    private String firstName;
    private String lastName;
    private String position;
    private double salary;
    private LocalDate dob;
    private String phone;
    private String email;
    private String password;
    private LocalDate hireDate;

    // Getters and setters
}
