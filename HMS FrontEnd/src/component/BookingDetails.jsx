import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/payment.css';
import axios from 'axios';

const BookingDetails = () => {
    const navigate = useNavigate();
    const base_url = "http://localhost:7070/hms";
    const guestID = JSON.parse(sessionStorage.getItem('userinfo')).guestID; // Assuming guestID is stored in session storage

    const [bookingData, setBookingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false); // State for payment success

    useEffect(() => {
        console.log("Guest ID:", guestID); // Debugging
        const fetchBookingDetails = async () => {
            try {
                const response = await axios.get(base_url + '/booking');
                console.log("Response:", response.data); // Debugging
                const filteredBookings = response.data.filter(booking => booking.guestID === guestID);
                console.log("Filtered Bookings:", filteredBookings); // Debugging
                setBookingData(filteredBookings);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBookingDetails();
    }, [guestID]); // Add guestID as a dependency for useEffect to refetch data when it changes

    const handlePayNow = () => {
        setPaymentSuccess(true);
    };
    

    const handleLogout = () => {
        sessionStorage.removeItem('userinfo');
        // Redirect to home page after logout
        navigate('/home');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Booking Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Room Number</th>
                        <th>Check-in Date</th>
                        <th>Check-out Date</th>
                        <th>Documents Description</th>
                        <th>Payment ID</th>
                        <th>No. of Guests</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingData.map(booking => (
                        <tr key={booking.bookingID}>
                            <td>{booking.roomNumber}</td>
                            <td>{booking.checkInDate}</td>
                            <td>{booking.checkOutDate}</td>
                            <td>{booking.docsDescription}</td>
                            <td>{booking.paymentID || 'N/A'}</td>
                            <td>{booking.noOfGuest}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {!paymentSuccess ? (
                <button onClick={handlePayNow}>Pay Now</button>
            ) : (
                <div>
                    <p>Payment Successful</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default BookingDetails;
