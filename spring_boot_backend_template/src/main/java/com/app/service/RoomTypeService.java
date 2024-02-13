package com.app.service;



import com.app.dao.RoomTypeDAO;
import com.app.dto.RoomTypeDTO;
import com.app.entity.RoomType;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoomTypeService {

    @Autowired
    private RoomTypeDAO roomTypeDAO;

    @Autowired
    private ModelMapper modelMapper;

    public RoomTypeDTO saveRoomType(RoomTypeDTO roomTypeDTO) {
        RoomType roomType = modelMapper.map(roomTypeDTO, RoomType.class);
        roomType = roomTypeDAO.save(roomType);
        return modelMapper.map(roomType, RoomTypeDTO.class);
    }

    public Optional<RoomTypeDTO> getRoomTypeById(Long typeId) {
        Optional<RoomType> roomTypeOptional = roomTypeDAO.findById(typeId);
        return roomTypeOptional.map(roomType -> modelMapper.map(roomType, RoomTypeDTO.class));
    }

    public List<RoomTypeDTO> getAllRoomTypes() {
        List<RoomType> roomTypes = roomTypeDAO.findAll();
        return roomTypes.stream()
                .map(roomType -> modelMapper.map(roomType, RoomTypeDTO.class))
                .collect(Collectors.toList());
    }

    public void deleteRoomType(Long typeId) {
        roomTypeDAO.deleteById(typeId);
    }
}
