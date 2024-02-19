import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
const BookingList = () => {
  // State to store staff information
  const [booking, setBooking] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    fetchBooking();
  }, []);

  

  const fetchBooking = async () => {
    try {
      const response = await axios.get('http://localhost:7070/hms/booking'); // Change the API endpoint as per your backend
      setBooking(response.data);
    } catch (error) {
      console.error('Error fetching booking:', error);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  };
 
 


  const filteredBooking = booking.filter((booking) =>
  `${booking.bookingID}`.includes(searchQuery)
);

  return (
    <div style={styles.adminPage}>
      <div style={styles.adminHeader}>
        <h1>Booking List</h1>
      
      </div>
      <div style={styles.adminActions}>
     
        <input
          type="text"
          placeholder="Search Booking"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div style={styles.bookingList}>
        <table style={styles.table}>
          <thead>
            <tr>
            <th style={styles.columnName}>Booking Id</th> 
            <th style={styles.columnName}>Room Number</th>
            <th style={styles.columnName}>Check In Date</th>
            <th style={styles.columnName}>Check Out Date</th>
            <th style={styles.columnName}>Document Submitted</th>
            <th style={styles.columnName}>No Of Guest</th>
      
            </tr>
          </thead>
          <tbody>
            {filteredBooking.map((employee) => (
              <tr key={employee.bookingID}>
                 <td>{employee.bookingID}</td> 
                <td>{employee.roomNumber}</td>
                <td>{formatDate(employee.checkInDate)}</td>
                <td>{formatDate(employee.checkOutDate)}</td>
                <td>{employee.docsDescription}</td>
                <td>{employee.noOfGuest}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  columnName: {
    padding: '10px', 
  },
  adminPage: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  adminHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  adminActions: {
    display: 'inline-flex',
    marginBottom: '20px',
  },
  staffList: {
    maxWidth: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  },
  th: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.1)',
    fontWeight: 'bold',
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    border: 'none',
    borderBottom: '1px solid #ddd',
    padding: '10px',
  },
  row: {
    transition: 'background-color 0.3s ease',
  },
  button: {
    marginRight: '10px',
    padding: '10px 20px',
    backgroundColor: '#000000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default BookingList;