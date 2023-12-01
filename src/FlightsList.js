import React, { useState, useEffect } from 'react';

function FlightsList() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        // Fetch flights data from your backend
        fetch('http://localhost:3000/api/flight-search')
            .then(response => response.json())
            .then(data => setFlights(data));
    }, []); // The empty array ensures this effect runs once on mount

    return (
        <div>
            {flights.map(flight => (
                <div key={flight.id}>
                    <p>{flight.departureAirportCode} to {flight.arrivalAirportCode}</p>
                    <p>Departure: {flight.departureTime} - Arrival: {flight.arrivalTime}</p>
                    {/* Other flight details */}
                </div>
            ))}
        </div>
    );
}

export default FlightsList;
