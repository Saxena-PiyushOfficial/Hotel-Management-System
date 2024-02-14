package com.app.entity;

import java.time.LocalDate;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;
@Entity
@Table(name = "payment")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentID;

    private double amount;
    private LocalDate paymentDate;
    private String paymentMethod;
    
    
    @OneToOne(mappedBy = "payment")
    private Booking booking;
    
    
    public void setBooking(Booking booking) {
        this.booking = booking;
        if (booking != null) {
            booking.setPayment(this);
        }
    }

    public void removeBooking() {
        if (booking != null) {
            booking.setPayment(null);
            this.booking = null;
        }
    }

}