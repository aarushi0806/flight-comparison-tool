import React from 'react';
import './FlightResults.css'; // Make sure to create and import a CSS file for styling

const FlightResults = ({ flights }) => {
  return (
    <div className="flight-results-container">
      {flights.length > 0 ? (
        flights.map((flight, index) => (
          <div key={index} className="flight-item">
            <img src={flight.imageUrl} alt="Flight" className="flight-image" />
            <div className="flight-details">
              <div>Airline: {flight.airline}</div>
              <div>From: {flight.departureAirportCode}</div>
              <div>To: {flight.arrivalAirportCode}</div>
              <div>Departure: {flight.departureTime}</div>
              <div>Arrival: {flight.arrivalTime}</div>
              <div>Price: ${flight.price}</div>
              {/* Add more flight details here */}
            </div>
          </div>
        ))
      ) : (
        <div className="no-flights-found">
          No flights found. Try adjusting your search criteria.
        </div>
      )}
    </div>
  );
};

export default FlightResults;
