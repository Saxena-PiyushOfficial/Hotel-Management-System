package com.app.entity;
import java.time.LocalDate;
import javax.persistence.*;

import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "Staff")
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffID;

    private String firstName;
    private String lastName;
    private String position;
    private double salary;
    private LocalDate dob;
    private String phone;
    private String email;
    private String password;
    private LocalDate hireDate;
    

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "managerID")
    private Manager manager;

    
}
