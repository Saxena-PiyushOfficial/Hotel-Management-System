package com.app.entity;

import javax.persistence.*;
@Entity
@Table(name = "Services")
public class Services {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long serviceID;

    private String serviceName;
    private String description;
    private double cost;

    @ManyToOne
    @JoinColumn(name = "hotelID")
    private Hotel hotel;

    // Getters and setters
}