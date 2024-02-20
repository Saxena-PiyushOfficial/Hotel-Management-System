import React, { useState } from 'react';
import axios from 'axios';
import '../css/addManager.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../css/addManager.css'; // Import CSS file

const Addmanager = ({ onAddManager }) => {
  const navigate = useNavigate();

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const [managerData, setManagerData] = useState({
    firstName: '',
    lastName: '',
    salary: 0,
    dob: '',
    phone: '',
    email: '',
    password: '',
    hireDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setManagerData({
      ...managerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      managerData.firstName === '' ||
      managerData.lastName === '' ||
      managerData.salary === '' ||
      managerData.dob === '' ||
      managerData.email === '' ||
      managerData.phone === '' ||
      managerData.password === '' ||
      managerData.hireDate === ''
    ) {
      toast.error('Please enter valid data.');
      return;
    }

    const currentDate = new Date();
    const hireDate = new Date(managerData.hireDate);

    if (hireDate >= currentDate) {
      toast.error('Hire date must be in the past.');
      return;
    }
    const dobDate = new Date(managerData.dob);

    if (dobDate >= currentDate) {
      toast.error('Date of birth must be in the past.');
      return;
    }

    if (!isValidPhoneNumber(managerData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      // Make a POST request to add the manager
      const response = await axios.post('http://localhost:7070/hms/managers', managerData);
      // Reset the form after successful submission
      setManagerData({
        firstName: '',
        lastName: '',
        salary: 0,
        dob: '',
        phone: '',
        email: '',
        password: '',
        hireDate: '',
      });
      navigate('/managerList', { replace: true });
      toast.success('Manager Added Successfully');
    } catch (error) {
      console.error('Error adding manager:', error);
      toast.error('Error 400/500.');
    }
  };

  return (
    <div>
      <br /><br /><br />
      <div className="add-manager-container">

        <h2 className="add-manager-heading">Add Manager</h2>

        <form onSubmit={handleSubmit} className="add-manager-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={managerData.firstName}
              onChange={handleChange}
              required
              placeholder='Enter First Name'
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={managerData.lastName}
              onChange={handleChange}
              required
              placeholder='Enter Last Name'
            />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary:</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={managerData.salary || ''}
              onChange={handleChange}
              required
              placeholder='Enter Salary'
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={managerData.dob}
              onChange={handleChange}
              required
              placeholder='Select Date of Birth'
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={managerData.phone}
              onChange={handleChange}
              required
              placeholder='Enter Phone Number'
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={managerData.email}
              onChange={handleChange}
              required
              placeholder='Enter Email'
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={managerData.password}
              onChange={handleChange}
              required
              placeholder='Enter Password'
            />
          </div>
          <div className="form-group">
            <label htmlFor="hireDate">Hire Date:</label>
            <input
              type="date"
              id="hireDate"
              name="hireDate"
              value={managerData.hireDate}
              onChange={handleChange}
              required
              placeholder='Select Hire Date'
            />
          </div>
          <button type="submit" className="submit-button">
            Add Manager
          </button>
        </form>

      </div>
    </div>
  );
};

export default Addmanager;
