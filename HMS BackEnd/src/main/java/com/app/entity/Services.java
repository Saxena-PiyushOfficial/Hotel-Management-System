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

	public Services() {
		super();
	}

	public Services(Long serviceID, String serviceName, String description, double cost, Hotel hotel) {
		super();
		this.serviceID = serviceID;
		this.serviceName = serviceName;
		this.description = description;
		this.cost = cost;
		this.hotel = hotel;
	}

	public Long getServiceID() {
		return serviceID;
	}

	public void setServiceID(Long serviceID) {
		this.serviceID = serviceID;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

  
}