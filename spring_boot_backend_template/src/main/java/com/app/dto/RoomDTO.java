package com.app.dto;

import com.app.entity.Hotel;
import com.app.entity.RoomType;

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
public class RoomDTO {

	private Long roomId;

	private RoomType roomType;

	private String status;

	private String cleanStatus;

	private Hotel hotel;
}
