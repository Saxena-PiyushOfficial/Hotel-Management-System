package com.app.entity;

import java.time.LocalDate;

import javax.persistence.*;
@Entity
@Table(name = "Payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentID;

    @OneToOne
    @JoinColumn(name = "bookingID")
    private Booking booking;

    private double amount;
    private LocalDate paymentDate;
    private String paymentMethod;
    
    
	public Payment() {
		super();
	}
	public Payment(Long paymentID, Booking booking, double amount, LocalDate paymentDate, String paymentMethod) {
		super();
		this.paymentID = paymentID;
		this.booking = booking;
		this.amount = amount;
		this.paymentDate = paymentDate;
		this.paymentMethod = paymentMethod;
	}
	@Override
	public String toString() {
		return "Payment [paymentID=" + paymentID + ", booking=" + booking + ", amount=" + amount + ", paymentDate="
				+ paymentDate + ", paymentMethod=" + paymentMethod + "]";
	}
	public Long getPaymentID() {
		return paymentID;
	}
	public void setPaymentID(Long paymentID) {
		this.paymentID = paymentID;
	}
	public Booking getBooking() {
		return booking;
	}
	public void setBooking(Booking booking) {
		this.booking = booking;
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

}