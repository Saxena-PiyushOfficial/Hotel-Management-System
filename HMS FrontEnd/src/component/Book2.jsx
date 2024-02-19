import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "../css/style.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import HmsAPIService from "../services/HmsAPIService";

export default function BookingForm() {


  let [formData, setFormData] = useState({
    checkInDate: '', checkOutDate: '', docsDescription: '', noOfGuest: ''
    , guestID: '', roomNumber: ''
  });

  const navigate = useNavigate();

  const changeHandle = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value });
  }

  const addData = (event) => {
    debugger
    event.preventDefault();
    if (formData.checkInDate === "" || formData.checkOutDate === "" || formData.docsDescription === "" || formData.noOfGuest
      === "" || formData.roomNumber === "") {
      toast.error("Plase enter valid data..");
      return;
    }

    let formData1 = {
      checkInDate: formData.checkInDate, checkOutDate: formData.checkOutDate, docsDescription: formData.docsDescription,
      noOfGuest: formData.noOfGuest, guestID: formData.guestID, roomNumber: formData.roomNumber
    }

    HmsAPIService.addBooking(formData1).then((result) => {
      console.log(result);
      navigate('/bookingDetails', { replace: true });
      toast.success("Booked Successfully....");;
    }).catch((error) => {
      console.log(error);
      toast.error("Error 400/500..");
    });

    setFormData({
      checkInDate: '', checkOutDate: '', docsDescription: '', noOfGuest: '', phone: ''
      , guestID: '', roomNumber: ''
    })
  }

  useEffect(() => {
    // Retrieve userinfo from session storage
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
    if (userinfo) {
      // Extract managerId from userinfo and set it as the initial value for formData.managerId
      setFormData(prevState => ({
        ...prevState,
        guestID: userinfo.guestID.toString() // Assuming managerId is a number
      }));
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount


  return (
    <div>
      <div>
        <form className="booking-form" action="#" method="post">
          <div className="container mb-sm-6">
            <div className="row">
              <div className="elem-group inlined">
                <label htmlFor="adult">Adults</label>
                <input
                  type="number"
                  id="adult"
                  name="noOfGuest"
                  placeholder="Number Of Adults"
                  min="1"
                  required
                  value={formData.noOfGuest}
                  onChange={changeHandle}
                />
              </div>
              <div className="elem-group inlined">
                <label htmlFor="child">Children</label>
                <input
                  type="number"
                  id="child"
                  name="total_children"
                  placeholder="Number Of Children"
                  min="0"
                  required
                />
              </div>
              <div className="elem-group inlined">
                <label htmlFor="checkin-date">Check-in Date</label>
                <input
                  type="date"
                  id="checkin-date"
                  name="checkInDate"
                  required
                  value={formData.checkInDate}
                  onChange={changeHandle}
                />
              </div>
              <div className="elem-group inlined">
                <label htmlFor="checkout-date">Check-out Date</label>
                <input
                  type="date"
                  id="checkout-date"
                  name="checkOutDate"
                  required
                  value={formData.checkOutDate}
                  onChange={changeHandle}
                />


              </div>
              <div className="elem-group">
                <label htmlFor="room-selection">Select Room</label>
                <select
                  id="room-selection"
                  name="roomNumber"
                  required
                  value={formData.roomNumber}
                  onChange={changeHandle}
                >
                  <option value="">Choose a Room</option>
                  <option value="1">1</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="7">7</option>
                  <option value="9">9</option>
                  <option value="11">11</option>
                  <option value="13">13</option>
                  <option value="17">17</option>
                </select>
              </div>
              {/* New dropdown box for selecting documents */}
              <div className="elem-group">
                <label htmlFor="document-selection">Select Document</label>
                <select
                  id="document-selection"
                  name="docsDescription"
                  required
                  value={formData.docsDescription}
                  onChange={changeHandle}
                >
                  <option value="">Choose a Document</option>
                  <option value="aadhar">Aadhar Card</option>
                  <option value="voting">Voting Card</option>
                  <option value="pan">Pan Card</option>
                  <option value="passport">Passport</option>
                </select>
              </div>
              <hr />
              <button className="btn btn-primary" type="button" onClick={addData}>Book The Rooms</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}