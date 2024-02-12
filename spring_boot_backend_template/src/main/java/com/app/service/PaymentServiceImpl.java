package com.app.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PaymentDAO;
import com.app.dto.PaymentDTO;
import com.app.entity.Payment;

@Transactional
@Service
public class PaymentServiceImpl implements PaymentService {

	private final PaymentDAO paymentDao;
	private final ModelMapper modelMapper;

	@Autowired
	public PaymentServiceImpl(PaymentDAO paymentDao, ModelMapper modelMapper) {
		this.paymentDao = paymentDao;
		this.modelMapper = modelMapper;
	}

	@Override
	public PaymentDTO createPayment(PaymentDTO paymentDTO) {
		Payment payment = modelMapper.map(paymentDTO, Payment.class);
		Payment savedPayment = paymentDao.save(payment);
		return modelMapper.map(savedPayment, PaymentDTO.class);
	}

	@Override
	public PaymentDTO getPaymentById(Long paymentId) {
		Payment payment = paymentDao.findById(paymentId).orElseThrow(() -> new NoSuchElementException("Payment not found with id: " + paymentId));
return modelMapper.map(payment, PaymentDTO.class);
		
	}

	@Override
	public List<PaymentDTO> getAllPayments() {
		 List<Payment> payments = paymentDao.findAll();
	        return payments.stream()
	                       .map(payment -> modelMapper.map(payment, PaymentDTO.class))
	                       .collect(Collectors.toList());
	}

	@Override
	public void deletePayment(Long paymentId) {
		paymentDao.deleteById(paymentId);

	}

}
