package com.app.entity;
import javax.persistence.*;
@Entity
@Table(name = "Room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomID;

    @ManyToOne
    @JoinColumn(name = "hotelID")
    private Hotel hotel;

    @ManyToOne
    @JoinColumn(name = "typeID")
    private RoomType roomType;

    private String status;
    private String cleanStatus;

   
}