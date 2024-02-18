
import React from 'react';
// import backgroundImage from '../images/man.jpg'; // Adjust the path accordingly
import { Link } from "react-router-dom";
const Manager = () => {
  const containerStyle = {
    // backgroundImage: url(${backgroundImage}),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'darkgray',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '30px',
    fontSize: '25px',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    border: '5px solid gray',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}><br></br>
      <h1>Manager Component</h1>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}><Link to="/staffList">List Of Staff</Link></button>
        <button style={buttonStyle}><Link to="/room">Add Room</Link></button>
        <button style={buttonStyle}><Link to="/service">Add Service</Link></button>
        <button style={buttonStyle}><Link to="/book1">Show All Bookings</Link></button>
        <button style={buttonStyle}><Link to="/book1">Revenue Collection</Link></button>
        <button style={buttonStyle}><Link to="/book1">Guest Details</Link></button>
      </div>
    </div>
  );
};

export default Manager;