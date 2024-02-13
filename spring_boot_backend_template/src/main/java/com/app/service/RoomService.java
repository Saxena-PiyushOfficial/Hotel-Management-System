package com.app.service;

import com.app.dao.RoomDAO;
import com.app.dto.RoomDTO;
import com.app.entity.Room;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoomService {

    @Autowired
    private RoomDAO roomDAO;

    @Autowired
    private ModelMapper modelMapper;

    public RoomDTO saveRoom(RoomDTO roomDTO) {
        Room room = modelMapper.map(roomDTO, Room.class);
        room = roomDAO.save(room);
        return modelMapper.map(room, RoomDTO.class);
    }

    public Optional<RoomDTO> getRoomById(Long roomId) {
        Optional<Room> roomOptional = roomDAO.findById(roomId);
        return roomOptional.map(room -> modelMapper.map(room, RoomDTO.class));
    }

    public List<RoomDTO> getAllRooms() {
        List<Room> rooms = roomDAO.findAll();
        return rooms.stream()
                .map(room -> modelMapper.map(room, RoomDTO.class))
                .collect(Collectors.toList());
    }

    public void deleteRoom(Long roomId) {
        roomDAO.deleteById(roomId);
    }
}
