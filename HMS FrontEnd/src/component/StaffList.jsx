import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/staffList.css"; // Import CSS file
import axios from 'axios';

const StaffList = () => {
  // State to store staff information
  const [staff, setStaff] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get('http://localhost:7070/hms/staff');
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
    <div className="admin-page">
      <div className="admin-header">
        <h1>Staff List</h1>
        {/* <button className="logout-button"><Link to="/home">Logout</Link></button> */}
      </div>
      <div className="admin-actions">
        <button className="add-button"><Link to="/addStaff">Add New</Link></button>
        <input
          type="text"
          placeholder="Search Staff"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="staff-list">
        <table className="staff-table">
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

export default StaffList;
