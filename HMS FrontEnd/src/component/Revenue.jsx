import React, { useState, useEffect } from 'react';
import '../css/revenue.css' ;
import axios from 'axios';

const Revenue = () => {
    const base_url = "http://localhost:7070/hms";

    const [revenue, setRevenue] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRevenue = async () => {
            try {
                const response = await axios.get(base_url + '/managers/revenue');
                setRevenue(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchRevenue();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="revenue-container">
            <br /><br /><br /><br /><br /><br />
            <div className="revenue-content">
                <h2>Total Revenue</h2>
                <p className="revenue-amount"> {revenue}</p>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default Revenue;

