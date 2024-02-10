import React, { useState } from 'react';

function BookingForm() {
  const [city, setCity] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSearch = () => {
    // Handle the search logic, e.g., redirect to search results page
    console.log('Searching for hotels in', city, 'from', arrivalDate, 'to', departureDate);
  };

  return (
    <div>
      <h2>Book Hotel</h2>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="arrivalDate">Arrival Date:</label>
        <input
          type="date"
          id="arrivalDate"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default BookingForm;