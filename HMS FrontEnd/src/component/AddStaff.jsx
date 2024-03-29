import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import HmsAPIService from "../services/HmsAPIService";

const base_url = "http://localhost:7070/hms";

const StaffForm = () => {
  


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    salary: '',
    dob: '',
    phone: '',
    email: '',
    password: '',
    hireDate: '',
    managerId: '' // Now storing managerId instead of manager name
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      staffId:0,
      firstName: '',
      lastName: '',
      position: '',
      salary: '',
      dob: '',
      phone: '',
      email: '',
      password: '',
      hireDate: '',
      managerId: ''
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve userinfo from session storage
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
    if (userinfo) {
      // Extract managerId from userinfo and set it as the initial value for formData.managerId
      setFormData(prevState => ({
        ...prevState,
        managerId: userinfo.managerId.toString() // Assuming managerId is a number
      }));
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount


  const addData = (event) => {
    event.preventDefault();
    if (formData.firstName === "" || formData.lastName === "" || formData.position === "" || formData.salary
      === "" || formData.dob === "" || formData.phone === "" || formData.email === "" || formData.password === ""
      || formData.hireDate === "" || formData.managerId === "") {
      toast.error("Please enter valid data..");
      return;
    }
    let signUpData1 = {
      staffId:0,
      firstName: formData.firstName, lastName: formData.lastName, position: formData.position,
      salary: formData.salary, dob: formData.dob, phone: formData.phone, email: formData.email,
      password: formData.password, hireDate: formData.hireDate, managerId: formData.managerId
    }

    HmsAPIService.addStaff(signUpData1).then((result) => {
      console.log(result);
      navigate('/staffList', { replace: true });
      toast.success("Staff Added Successful..");
    }).catch((error) => {
      console.log(error);
      toast.error("Error 400/500..");
    });
  };

  return (
    <div style={styles.formContainer}>
      <h2>Add New Staff</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="hireDate">Hire Date:</label>
          <input
            type="date"
            id="hireDate"
            name="hireDate"
            value={formData.hireDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" onClick={addData}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontFamily: 'Arial, sans-serif',
  },
  formGroup: {
    marginBottom: '15px',
  },
};

export default StaffForm;