import React, { useState, useEffect } from 'react';

function FlightsList() {
    const [flights, setFlights] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('price');
    const [selectedFlights, setSelectedFlights] = useState([]);
    const [airlineFilter, setAirlineFilter] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/flight-search')
            .then(response => response.json())
            .then(data => setFlights(data));
    }, []);

    const handleFlightSelect = (flightId) => {
        if (selectedFlights.includes(flightId)) {
            setSelectedFlights(selectedFlights.filter(id => id !== flightId));
        } else {
            setSelectedFlights([...selectedFlights, flightId]);
        }
    };

    const sortedFlights = [...flights].sort((a, b) => {
        if (sortCriteria === 'price') {
            return a.price - b.price; // Assuming flights have a 'price' property
        }
        // Add more sorting criteria as needed
    });

    const filteredFlights = sortedFlights.filter(flight => {
        return airlineFilter ? flight.airline === airlineFilter : true;
        // Add more filter conditions as needed
    });

    return (
        <div>
            <select value={sortCriteria} onChange={e => setSortCriteria(e.target.value)}>
                <option value="price">Price</option>
                {/* Add more sorting options here */}
            </select>

            <select value={airlineFilter} onChange={e => setAirlineFilter(e.target.value)}>
                {/* Options for airlines */}
            </select>

            {filteredFlights.map(flight => (
                <div key={flight.id}>
                    <input
                        type="checkbox"
                        checked={selectedFlights.includes(flight.id)}
                        onChange={() => handleFlightSelect(flight.id)}
                    />
                    <p>{flight.departureAirportCode} to {flight.arrivalAirportCode}</p>
                    <p>Departure: {flight.departureTime} - Arrival: {flight.arrivalTime}</p>
                    {/* Add more flight details here */}
                </div>
            ))}

            {selectedFlights.length > 0 && (
                <div>
                    <h2>Comparison View</h2>
                    {selectedFlights.map(flightId => {
                        const flight = flights.find(f => f.id === flightId);
                        return (
                            <div key={flight.id}>
                                {/* Display details for comparison */}
                                <p>{flight.departureAirportCode} to {flight.arrivalAirportCode}</p>
                                <p>Departure: {flight.departureTime} - Arrival: {flight.arrivalTime}</p>
                                {/* Add more flight details here */}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default FlightsList;
