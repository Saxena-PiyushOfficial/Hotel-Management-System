import React, { useState } from 'react';
// import { LocalDate } from 'your-local-date-library'; // Import your LocalDate library

const Addmanager= ({ onAddManager }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data if needed
    // You can add further validation logic here

    // Call the callback function to handle adding a new manager
    onAddManager(managerData);

    // Reset the form after submission
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
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>
        Hotel ID:
        <input type="number" name="hotelId" value={managerData.hotelId || ''} onChange={handleChange} required />
      </label> */}
      <label>
        First Name:
        <input type="text" name="firstName" value={managerData.firstName} onChange={handleChange} required />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={managerData.lastName} onChange={handleChange} required />
      </label>
      <label>
        Salary:
        <input type="number" name="salary" value={managerData.salary || ''} onChange={handleChange} required />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={managerData.dob} onChange={handleChange} required />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={managerData.phone} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={managerData.email} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={managerData.password} onChange={handleChange} required />
      </label>
      <label>
        Hire Date:
        <input type="date" name="hireDate" value={managerData.hireDate} onChange={handleChange} required />
      </label>

      <button type="submit">Add Manager</button>
    </form>
  );
};

export default Addmanager;