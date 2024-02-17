package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.HotelDAO;
import com.app.dao.PaymentDAO;
import com.app.dto.HotelDTO;
import com.app.entity.Hotel;
import com.app.entity.Payment;
import com.app.exception.EmptyDataException;

@Service
public class HotelService {

    @Autowired
    private HotelDAO hotelDAO;
    
    @Autowired
	private PaymentDAO paymentDAO;

    @Autowired
    private ModelMapper modelMapper;

    public HotelDTO saveHotel(HotelDTO hotelDTO) {
    
        Hotel hotel = modelMapper.map(hotelDTO, Hotel.class);
        
        hotel = hotelDAO.save(hotel);
        return modelMapper.map(hotel, HotelDTO.class);
        
        
    }

    public Optional<HotelDTO> getHotelById(Long hotelId) {
        Optional<Hotel> hotelOptional = hotelDAO.findById(1L);
        return hotelOptional.map(hotel -> modelMapper.map(hotel, HotelDTO.class));
    }

    public List<HotelDTO> getAllHotels() throws EmptyDataException {
        List<Hotel> hotels = hotelDAO.findAll();
        if (hotels.isEmpty()) {
            throw new EmptyDataException("No hotels found in the database");
        }
        return hotels.stream()
                .map(hotel -> modelMapper.map(hotel, HotelDTO.class))
                .collect(Collectors.toList());
    }

    public List<HotelDTO> getHotelsByOwner(Long ownerId) {
        List<Hotel> hotels = hotelDAO.findByOwnerOwnerID(ownerId);
        return hotels.stream()
                .map(hotel -> modelMapper.map(hotel, HotelDTO.class))
                .collect(Collectors.toList());
    }

    public void deleteHotel(Long hotelId) {
        hotelDAO.deleteById(hotelId);
    }
    
    public Double getTotalRevenue() {
		List<Payment> paymentList = paymentDAO.findAll();
		return calculateTotalPayment(paymentList);
	}

	public double calculateTotalPayment(List<Payment> payments) {
		double totalPayment = 0.0;
		for (Payment payment : payments) {

			totalPayment += payment.getAmount();

		}
		return totalPayment;
	}
    
    
}
