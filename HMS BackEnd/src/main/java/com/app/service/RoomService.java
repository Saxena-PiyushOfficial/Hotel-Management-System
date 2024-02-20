package com.app.service;

import com.app.dto.RoomDTOReq;
import com.app.dto.RoomDTOResp;
import com.app.exception.EmptyDataException;

import java.util.List;

public interface RoomService {
	RoomDTOResp createRoom(RoomDTOReq roomDTO);

    RoomDTOReq getRoomById(Long roomID);

    List<RoomDTOReq> getAllRooms() throws EmptyDataException;

    Long deleteRoom(Long roomID);

    List<String> getAllRoomTypes();
    
    
}
