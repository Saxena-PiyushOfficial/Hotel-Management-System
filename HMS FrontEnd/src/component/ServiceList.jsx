import React from 'react';
import backgroundImage from '../images/man.jpg';

const ServiceList = () => {
  const hardcodedServices = [
    { id: 1, name: 'Parking', description: 'Safe and convenient parking facilities.' },
    { id: 2, name: 'Cleaning', description: 'Regular cleaning services for a tidy environment.' },
    { id: 3, name: 'TV', description: 'Television services with various channels.' },
    { id: 4, name: 'WiFi', description: 'High-speed internet access.' },
    { id: 5, name: 'AC', description: 'Air conditioning for a comfortable stay.' },
    // { id: 6, name: 'Telephone', description: 'Telephone services for communication.' },
    { id: 7, name: 'Balcony', description: 'Rooms with a private balcony.' },
    { id: 8, name: 'Washing Machine', description: 'Laundry facilities with washing machines.' },
    { id: 9, name: 'Security Services', description: '24/7 security services for safety.' },
    { id: 10, name: 'Entertainment', description: 'Various entertainment options.' },
    { id: 11, name: 'Accommodation', description: 'Comfortable and spacious accommodation.' },
  ];

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'darkgray',
  };

  const postcardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  };

  const postcardStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'left',
  };

  const headingStyle = {
    marginBottom: '10px',
    color: '#333',
  };

  const descriptionStyle = {
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#333' }}>All Services</h2>
      <br></br>  <br></br>  <br></br>
      <div style={postcardContainerStyle}>
        {hardcodedServices.map((service) => (
          <div key={service.id} style={postcardStyle}>
            <h3 style={headingStyle}>{service.name}</h3>
            <p style={descriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
