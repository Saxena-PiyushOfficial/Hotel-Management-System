package com.app.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingPersonDAO;
import com.app.dto.BookingPersonDTO;
import com.app.entity.BookingPerson;

@Transactional
@Service
public class BookingPersonServiceImpl implements BookingPersonService {

	private final BookingPersonDAO bookingPersonDao;
	private final ModelMapper modelMapper;

	@Autowired
	public BookingPersonServiceImpl(BookingPersonDAO bookingPersonDao, ModelMapper modelMapper) {
		this.bookingPersonDao = bookingPersonDao;
		this.modelMapper = modelMapper;
	}

	@Override
	public BookingPersonDTO createBookingPerson(BookingPersonDTO bookingPersonDTO) {
		BookingPerson bookingPerson = modelMapper.map(bookingPersonDTO, BookingPerson.class);
		BookingPerson savedBookingPerson = bookingPersonDao.save(bookingPerson);
		return modelMapper.map(savedBookingPerson, BookingPersonDTO.class);
	}

	@Override
	public BookingPersonDTO getBookingPersonById(Long bookingPersonId) {
		BookingPerson bookingPerson = bookingPersonDao.findById(bookingPersonId)
				.orElseThrow(() -> new NoSuchElementException("BookingPerson not found with id: " + bookingPersonId));
		return modelMapper.map(bookingPerson, BookingPersonDTO.class);
	}

	@Override
	public List<BookingPersonDTO> getAllBookingPersons() {
		List<BookingPerson> bookingPersons = bookingPersonDao.findAll();
		return bookingPersons.stream().map(bookingPerson -> modelMapper.map(bookingPerson, BookingPersonDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public void deleteBookingPerson(Long bookingPersonId) {
		 bookingPersonDao.deleteById(bookingPersonId);

	}

}
