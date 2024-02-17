package com.app.service;
import com.app.dao.HotelDAO;
import com.app.dao.RoomDAO;
import com.app.dto.RoomDTOReq;
import com.app.dto.RoomDTOResp;
import com.app.entity.Hotel;

import com.app.entity.Room;
import com.app.entity.RoomTypes;
import com.app.exception.EmptyDataException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class RoomServiceImpl implements RoomService {

    private final RoomDAO roomDAO;
    private final HotelDAO hotelDAO;
    private final ModelMapper modelMapper;

    @Autowired
    public RoomServiceImpl(RoomDAO roomDAO, ModelMapper modelMapper,HotelDAO hotelDAO) {
        this.roomDAO = roomDAO;
        this.hotelDAO=hotelDAO;
        this.modelMapper = modelMapper;
    }

    @Override
    public RoomDTOResp createRoom(RoomDTOReq roomDTO) {
        long id = roomDTO.getHotelID();
        Optional<Hotel> optionalHotel = hotelDAO.findById(1L);
        Hotel oldHotel = optionalHotel.orElse(null);
        roomDTO.setHotel(oldHotel);

        Room room = modelMapper.map(roomDTO, Room.class);
        Room savedRoom = roomDAO.save(room);
        
        return convertToDto(savedRoom);
    }

    private RoomDTOResp convertToDto(Room room) {
        RoomDTOResp roomDTOResp = modelMapper.map(room, RoomDTOResp.class);
        if (room.getHotel() != null) {
            roomDTOResp.setHotel(room.getHotel());
        }
        return roomDTOResp;
    }

    
    @Override
    public RoomDTOReq getRoomById(Long roomID) {
        Room room = roomDAO.findById(roomID)
                .orElseThrow(() -> new RuntimeException("Room not found with id: " + roomID));
        RoomDTOReq roomDTOReq = modelMapper.map(room, RoomDTOReq.class);
       roomDTOReq.setHotelID(room.getHotel().getHotelID());
        return roomDTOReq;
    }

    @Override
    public List<RoomDTOReq> getAllRooms() throws EmptyDataException {
        List<Room> rooms = roomDAO.findAll();
        if (rooms.isEmpty()) {
            throw new EmptyDataException("No rooms found in the database");
        }
        return rooms.stream()
                .map(room -> modelMapper.map(room, RoomDTOReq.class))
                .collect(Collectors.toList());
    }

    @Override
    public Long deleteRoom(Long roomID) {
        roomDAO.findById(roomID)
                .orElseThrow(() -> new RuntimeException("Room not found with id: " + roomID));
        roomDAO.deleteById(roomID);
        return roomID;
    }

    @Override
    public List<String> getAllRoomTypes() {
        return List.of(RoomTypes.values()).stream()
                .map(Enum::name)
                .collect(Collectors.toList());
    }
}
