package com.app.dto;

import java.time.LocalDate;



import com.app.entity.BookingPerson;
import com.app.entity.Guest;
import com.app.entity.Hotel;
import com.app.entity.Payment;

public class BookingDTO {
	
	 private Long bookingID;
	 private Guest guest;
	 private int roomNumber;
	 private LocalDate checkInDate;
	 private LocalDate checkOutDate;
	 private double totalPrice;
	 private boolean status;
	 private Payment payment;
	 private BookingPerson bookingPerson;
	 private Hotel hotel;
	 
	 
	 
	 
	 
	@Override
	public String toString() {
		return "BookingDTO [bookingID=" + bookingID + ", guest=" + guest + ", roomNumber=" + roomNumber
				+ ", checkInDate=" + checkInDate + ", checkOutDate=" + checkOutDate + ", totalPrice=" + totalPrice
				+ ", status=" + status + ", payment=" + payment + ", bookingPerson=" + bookingPerson + ", hotel="
				+ hotel + "]";
	}

	public BookingDTO() {
		super();
	}
	
	public BookingDTO(Long bookingID, Guest guest, int roomNumber, LocalDate checkInDate, LocalDate checkOutDate,
			double totalPrice, boolean status, Payment payment, BookingPerson bookingPerson, Hotel hotel) {
		super();
		this.bookingID = bookingID;
		this.guest = guest;
		this.roomNumber = roomNumber;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.totalPrice = totalPrice;
		this.status = status;
		this.payment = payment;
		this.bookingPerson = bookingPerson;
		this.hotel = hotel;
	}
	public Long getBookingID() {
		return bookingID;
	}
	public void setBookingID(Long bookingID) {
		this.bookingID = bookingID;
	}
	public Guest getGuest() {
		return guest;
	}
	public void setGuest(Guest guest) {
		this.guest = guest;
	}
	public int getRoomNumber() {
		return roomNumber;
	}
	public void setRoomNumber(int roomNumber) {
		this.roomNumber = roomNumber;
	}
	public LocalDate getCheckInDate() {
		return checkInDate;
	}
	public void setCheckInDate(LocalDate checkInDate) {
		this.checkInDate = checkInDate;
	}
	public LocalDate getCheckOutDate() {
		return checkOutDate;
	}
	public void setCheckOutDate(LocalDate checkOutDate) {
		this.checkOutDate = checkOutDate;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public Payment getPayment() {
		return payment;
	}
	public void setPayment(Payment payment) {
		this.payment = payment;
	}
	public BookingPerson getBookingPerson() {
		return bookingPerson;
	}
	public void setBookingPerson(BookingPerson bookingPerson) {
		this.bookingPerson = bookingPerson;
	}
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	 
}
