import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StaffList = () => {
  // State to store staff information
  const [staff, setStaff] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // // Dummy staff data
  // const dummyStaff = [
  //   { ManagerId: 1, firstName: 'John', lastName: 'Doe', salary: 60000, dob: '1990-01-01', phone: '123-456-7890', email: 'john.doe@example.com', password: 'password123', hireDate: '2022-01-15' },
  //   { id: 2, firstName: 'Jane', lastName: 'Smith', salary: 50000, dob: '1992-05-20', phone: '987-654-3210', email: 'jane.smith@example.com', password: 'pass456', hireDate: '2022-02-20' },
  //   // Add more dummy staff data as needed
  // ];

  useEffect(() => {
    fetchStaff();
  }, []);

  // const fetchStaff = async () => {
  //   try {
  //     setStaff(dummyStaff);
  //   } catch (error) {
  //     console.error('Error fetching staff:', error);
  //   }
  // };

  const fetchStaff = async () => {
    try {
      const response = await axios.get('http://localhost:7070/hms/staff'); // Change the API endpoint as per your backend
      setStaff(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };
  const deleteStaff = async (staffId) => {
    try {
      await axios.delete(`http://localhost:7070/hms/staff/${staffId}`);
      // After successful deletion, fetch the updated staff list
      fetchStaff();
    } catch (error) {
      console.error(`Error deleting staff with ID ${staffId}:`, error);
    }
  };
  const confirmDelete = (staffId) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      deleteStaff(staffId);
    }
  };
  


  // Filter staff based on search query
  const filteredStaff = staff.filter((employee) =>
    `${employee.id} ${employee.firstName} ${employee.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.adminPage}>
      <div style={styles.adminHeader}>
        <h1>Staff List</h1>
        <button style={{ ...styles.button, padding: '2px 4px 2px 4px' }} ><Link to="/home">Logout</Link></button>
      </div>
      <div style={styles.adminActions}>
        <button style={{ ...styles.button, marginRight: '150px', padding: '10px 20px 10px 20px' }}><Link to="/addStaff">Add New</Link></button>
       
        <input
          type="text"
          placeholder="Search Staff"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div style={styles.staffList}>
        <table style={styles.table}>
          <thead>
            <tr>
               <th>Staff Id</th> 
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
              <th>DOB</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
              <th>Hire Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((employee) => (
              <tr key={employee.id}>
                 <td>{employee.staffId}</td> 
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salary}</td>
                <td>{employee.dob}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.password}</td>
                <td>{employee.hireDate}</td>
                <td>
                  <button onClick={() => confirmDelete(employee.staffId)}>Delete</button>
                </td>
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

export default StaffList;