import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Payment = () => {
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch guest ID from session storage
        const guestID = JSON.parse(sessionStorage.getItem('userinfo')).guestID;
        
        const fetchPaymentDetails = async () => {
            try {
                // Step 1: Get booking ID based on guest ID
                const bookingResponse = await axios.get(`http://localhost:7070/hms/booking/${guestID}`);
                const bookingID = bookingResponse.data.bookingID;

                // Step 2: Get payment ID based on booking ID
                const paymentResponse = await axios.get(`http://localhost:7070/hms/booking/payment/${bookingID}`);
                const paymentID = paymentResponse.data.paymentID;

                // Step 3: Get payment details based on payment ID
                const paymentDetailsResponse = await axios.get(`http://localhost:7070/hms/payment/${paymentID}`);
                const paymentDetails = paymentDetailsResponse.data;

                // Set payment details in state
                setPaymentDetails(paymentDetails);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchPaymentDetails();
    }, []); // Empty dependency array to ensure this effect runs only once

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Payment Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        {/* Add more payment details as needed */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{paymentDetails.paymentID}</td>
                        <td>{paymentDetails.amount}</td>
                        <td>{paymentDetails.date}</td>
                        {/* Display more payment details */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Payment;
