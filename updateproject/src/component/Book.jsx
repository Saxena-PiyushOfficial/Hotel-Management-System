import React from "react";
import "../css/style.css";

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
          <div className="elem-group">
            <label for="phone">Your Phone</label>
            <input
              type="tel"
              id="phone"
              name="visitor_phone"
              placeholder="498-348-3872"
              pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})"
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
            <label for="room-selection">Select Room Preference</label>
            <select id="room-selection" name="room_preference" required>
              <option value="">Choose a Room from the List</option>
              <option value="connecting">Connecting</option>
              <option value="adjoining">Adjoining</option>
              <option value="adjacent">Adjacent</option>
            </select>
          </div>
          <hr />
          <div className="elem-group">
            <label for="message">Anything Else?</label>
            <textarea
              id="message"
              name="visitor_message"
              placeholder="Tell us anything else that might be important."
              required
            ></textarea>
          </div>
          <button type="submit">Book The Rooms</button>
        
      </div>
      </div>
      </form>
      </div>
    </div>
  );
}
