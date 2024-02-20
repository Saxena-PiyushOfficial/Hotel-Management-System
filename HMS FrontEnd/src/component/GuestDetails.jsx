import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const GuestList = () => {
  
  const [guest, setGuests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchGuest();
  }, []);



  const fetchGuest = async () => {
    try {
      const response = await axios.get('http://localhost:7070/hms/api/guests'); // Change the API endpoint as per your backend
      setGuests(response.data);
    } catch (error) {
      console.error('Error fetching guest:', error);
    }
  };
 
  


  // Filter staff based on search query
  const filteredGuest = guest.filter((employee) =>
    `${employee.guestID} ${employee.firstName} ${employee.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.adminPage}>
      <div style={styles.adminHeader}>
        <h1>Guest List</h1>
        {/* <button style={{ ...styles.button, padding: '2px 4px 2px 4px' }} ><Link to="/home">Logout</Link></button> */}
      </div>
      <div style={styles.adminActions}>
        
       
        <input
          type="text"
          placeholder="Search Guest"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div style={styles.guestList}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>GuestID</th>
              <th>First Name</th>
              <th>LastName</th>
              <th>Dob</th>
              <th>Address</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredGuest.map((employee) => (
              <tr key={employee.guestID}>
                 <td>{employee.guestID}</td> 
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.dob}</td>
                <td>{employee.address}</td>
                <td>{employee.email}</td>
                <td>{employee.password}</td>
                <td>{employee.phone}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  adminPage: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  adminHeader: {
    display: 'flex',
    justifyContent: 'space-between',
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

export default GuestList;