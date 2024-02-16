package com.app.entity;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "Room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomID;

    private long roomNumber;
    @ManyToOne
    @JoinColumn(name = "hotelID")
    @JsonIgnoreProperties(value="hotel")
    private Hotel hotel;
    @Enumerated(EnumType.STRING)
    private RoomTypes roomType; 
 
    private double pricePerNight;
    private String isAvailable;
    private String cleanStatus;
   
}