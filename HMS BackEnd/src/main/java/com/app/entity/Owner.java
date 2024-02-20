package com.app.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;


import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Owner")
public class Owner {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ownerID;

	private String firstName;
	private String lastName;
	private String phone;
	private String email;
	private String password;

	@JsonIgnore
	@OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Hotel> hotels = new ArrayList<>();


	public void addHotel(Hotel hotel) {
		hotels.add(hotel);
		hotel.setOwner(this);
	}

	public void removeHotel(Hotel hotel) {
		hotels.remove(hotel);
		hotel.setOwner(null);
	}


}
