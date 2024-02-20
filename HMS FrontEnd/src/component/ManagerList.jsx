import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/managerList.css'; // Import CSS file for component styling

const ManagerList = () => {
  const [manager, setManager] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/addManager', { replace: true });
  };

  useEffect(() => {
    fetchManager();
  }, []);

  const fetchManager = async () => {
    try {
      const response = await axios.get('http://localhost:7070/hms/managers');
      setManager(response.data);
    } catch (error) {
      console.error('Error fetching manager:', error);
    }
  };

  const filteredManager = manager.filter((employee) =>
    `${employee.id} ${employee.firstName} ${employee.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div><br /><br /><br />
    <div className="adminPage">
      <div className="adminHeader">
        <h1>Manager List</h1>
      </div>
      <div className="adminActions">
        <button className="button" id= 'asd' style={{ marginRight: '150px', padding: '10px 20px' }} onClick={handleButtonClick}>
         Add New
        </button>
        <input
          type="text"
          placeholder="Search Manager"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="managerList">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
              <th>DOB</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
              <th>Hire Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredManager.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salary}</td>
                <td>{employee.dob}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.password}</td>
                <td>{employee.hireDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ManagerList;
