package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Entity
@Table(name = "RoomType")
public class RoomType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long typeID;

    @Enumerated(EnumType.STRING)
    private RoomTypes roomType; 

    private String description;
    private double pricePerNight;

    @JsonIgnore
    @OneToMany(mappedBy = "roomType", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Room> rooms = new ArrayList<>();
    
    
    public void addRoom(Room room) {
        rooms.add(room);
        room.setRoomType(this); 
    }


    public void removeRoom(Room room) {
        rooms.remove(room);
        room.setRoomType(null); 
    }
  
  
}
