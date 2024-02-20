import React from 'react';
import { Link } from 'react-router-dom';
import '../css/manager.css'; // Import CSS file

const Manager = () => {
  return (
    <div className="manager-container">
      <h1 className="manager-heading">Manager Dashboard</h1>
      <br /><br /><br /><br /><br />
      <div className="button-container">
        <Link to="/staffList" className="button-link">
          <button className="button">List Of Staff</button>
        </Link>
        <Link to="/bookingList" className="button-link">
          <button className="button">Show All Bookings</button>
        </Link>
        <Link to="/revenue" className="button-link">
          <button className="button">Revenue Collection</button>
        </Link>
        <Link to="/guestDetails" className="button-link">
          <button className="button">Guest Details</button>
        </Link>
      </div>
      <br /><br /><br /><br />
    </div>
  );
};

export default Manager;
