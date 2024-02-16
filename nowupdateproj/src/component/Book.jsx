import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div>
      <div>
      <form className="booking-form" action="#" method="post">
      <div className="container mb-sm-6">
        <div className="row">
          <div className="elem-group">
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="visitor_name"
              placeholder="John Doe"
              pattern="[A-Z\sa-z]{3,20}"
              required
            />
          </div>
          <div className="elem-group">
            <label for="email">Your E-mail</label>
            <input
              type="email"
              id="email"
              name="visitor_email"
              placeholder="john.doe@email.com"
              required
            />
          </div>
        
          <hr />
          <div className="elem-group inlined">
            <label for="adult">Adults</label>
            <input
              type="number"
              id="adult"
              name="total_adults"
              placeholder="2"
              min="1"
              required
            />
          </div>
          <div className="elem-group inlined">
            <label for="child">Children</label>
            <input
              type="number"
              id="child"
              name="total_children"
              placeholder="2"
              min="0"
              required
            />
          </div>
          <div className="elem-group inlined">
            <label for="checkin-date">Check-in Date</label>
            <input type="date" id="checkin-date" name="checkin" required />
          </div>
          <div className="elem-group inlined">
            <label for="checkout-date">Check-out Date</label>
            <input type="date" id="checkout-date" name="checkout" required />
          </div>
          <div className="elem-group">
            <label for="room-selection">Select Room</label>
            <select id="room-selection" name="room_preference" required>
              <option value="">Choose a Room</option>
              <option value="connecting">2</option>
              <option value="adjoining">4</option>
              <option value="adjacent">6</option>
              <option value="adjacent">8</option>
              <option value="adjacent">10</option>
              <option value="adjacent">12</option>
              <option value="adjacent">14</option>
              <option value="adjacent">16</option>
              <option value="adjacent">18</option>
              <option value="adjacent">20</option>
              <option value="adjacent">22</option>
              <option value="adjacent">24</option>
              <option value="adjacent">26</option>
              <option value="adjacent">28</option>
              <option value="adjacent">30</option>
            </select>
          </div>
          <hr />
          <button><Link to="/login">Book The Rooms</Link></button>
        
      </div>
      </div>
      </form>
      </div>
    </div>
  );
}
