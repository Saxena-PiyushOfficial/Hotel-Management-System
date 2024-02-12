package com.app.dto;

import java.time.LocalDate;

public class PaymentDTO {

	private Long paymentID;
	private Long bookingID;
	private double amount;
	private LocalDate paymentDate;
	private String paymentMethod;
	
	public PaymentDTO() {
		super();
	}

	public PaymentDTO(Long paymentID, Long bookingID, double amount, LocalDate paymentDate, String paymentMethod) {
		super();
		this.paymentID = paymentID;
		this.bookingID = bookingID;
		this.amount = amount;
		this.paymentDate = paymentDate;
		this.paymentMethod = paymentMethod;
	}

	public Long getPaymentID() {
		return paymentID;
	}

	public void setPaymentID(Long paymentID) {
		this.paymentID = paymentID;
	}

	public Long getBookingID() {
		return bookingID;
	}

	public void setBookingID(Long bookingID) {
		this.bookingID = bookingID;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	@Override
	public String toString() {
		return "PaymentDTO [paymentID=" + paymentID + ", bookingID=" + bookingID + ", amount=" + amount
				+ ", paymentDate=" + paymentDate + ", paymentMethod=" + paymentMethod + "]";
	}
	
	
	
}
