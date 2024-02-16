package com.app.service;

import com.app.dto.RoomDTOReq;
import com.app.dto.RoomDTOResp;

import java.util.List;

public interface RoomService {
	RoomDTOResp createRoom(RoomDTOReq roomDTO);

    RoomDTOReq getRoomById(Long roomID);

    List<RoomDTOReq> getAllRooms();

    Long deleteRoom(Long roomID);

    List<String> getAllRoomTypes();
    
    
}
