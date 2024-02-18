import React from 'react';
import { Link } from 'react-router-dom';

const Owner = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '10px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '30%',
  };

  return (
    <div style={containerStyle}>
      <br></br><br></br><br></br><br></br><br></br>
      <button style={buttonStyle}><Link  to="/ownerlist">Manager List</Link></button><br></br><br></br>
      <button style={buttonStyle}>Show Revenue</button>
    </div>
  );
};

export default Owner;