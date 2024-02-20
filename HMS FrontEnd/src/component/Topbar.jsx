import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../images/logo2.png';
import '../css/topbar.css'; // Import your CSS file for custom styles

export default function Topbar() {

   const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('userinfo') !== null);
   const [dropdownOpen, setDropdownOpen] = useState(false);

   const handleLogout = () => {
      sessionStorage.removeItem('userinfo');
      // Redirect to login page or any other desired page after logout
      window.location.href = '/home';
   };

   const getFirstName = () => {
      const userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
      if (userInfo) {
         return userInfo.firstName;
      }
      return '';
   };

   useEffect(() => {
      // Function to handle changes in session storage
      const handleSessionStorageChange = () => {
         setIsLoggedIn(sessionStorage.getItem('userinfo') !== null);
      };

      // Listen for changes in session storage
      window.addEventListener('storage', handleSessionStorageChange);

      // Clean up the listener when component unmounts
      return () => {
         window.removeEventListener('storage', handleSessionStorageChange);
      };
   }, []); 

   return (
      <div className="header">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 logo_section">
                  <div className="logo2">
                     <Link to="/home"><img src={logo2} alt="logo2" /></Link>
                  </div>
               </div>
               <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav className="navigation navbar navbar-expand-md navbar-light">
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav ml-auto">
                           <li className="nav-item">
                              <Link className="nav-link" to="/home">Home</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/about">About</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/room">Our Room</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/gallery">Gallery</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/blog">Blog</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/restaurant">Restaurant</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/contact">Contact Us</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/serviceList">Services</Link>
                           </li>
                           {isLoggedIn && (
                              <li className="nav-item dropdown">
                                 <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded={dropdownOpen} onClick={() => setDropdownOpen(!dropdownOpen)}>
                                       Welcome, {getFirstName()}
                                    </button>
                                    <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                                       <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                                    </div>
                                 </div>
                              </li>
                           )}
                           {!isLoggedIn && (
                              <li className="nav-item">
                                 <Link className="nav-link" to="/login">Signin/Signup</Link>
                              </li>
                           )}
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   );
}
