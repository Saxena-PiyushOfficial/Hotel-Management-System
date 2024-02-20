package com.app.service;

import java.util.List;

import com.app.dto.PaymentDTO;

public interface PaymentService {

	PaymentDTO createPayment(PaymentDTO paymentDTO);

	PaymentDTO getPaymentById(Long paymentId);

	List<PaymentDTO> getAllPayments();

	void deletePayment(Long paymentId);

}
