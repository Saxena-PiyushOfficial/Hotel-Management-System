package com.app.dto;

import java.time.LocalDate;



import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PaymentDTO {

	private Long paymentID;
	private double amount;
	private LocalDate paymentDate;
	private String paymentMethod;
	
	
	
	
}
