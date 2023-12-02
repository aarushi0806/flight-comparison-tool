import React, { useState, useEffect } from 'react';
import FlightResults from './FlightResults'; // Ensure this is correctly imported
// import './FlightsList.css'; // Ensure you have created a FlightsList.css file

function SearchForm({ onSearch }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({ from, to, departureDate });
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <label htmlFor="from">From</label>
          <input
            id="from"
            type="text"
            placeholder="e.g., HEL"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="to">To</label>
          <input
            id="to"
            type="text"
            placeholder="e.g., OUL"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="departureDate">Depart On</label>
          <input
            id="departureDate"
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <button type="submit" className="search-button">Search Flights</button>
      </form>
    </div>
  );
}

function FlightsList() {
  const [flights, setFlights] = useState([]);
  // Remove the sort criteria state and its usage since you're not using price sorting anymore
  const [selectedFlights, setSelectedFlights] = useState([]);
  const [airlineFilter, setAirlineFilter] = useState('');

  const handleSearch = (searchParams) => {
    const queryParams = new URLSearchParams(searchParams).toString();
    fetch(`http://localhost:3000/api/flight-search?${queryParams}`)
      .then((response) => response.json())
      .then((data) => setFlights(data))
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    // Initial fetch for flights without search parameters
    fetch('http://localhost:3000/api/flight-search')
      .then(response => response.json())
      .then(data => setFlights(data));
  }, []);

  const handleFlightSelect = (flightId) => {
    const newSelectedFlights = selectedFlights.includes(flightId)
      ? selectedFlights.filter(id => id !== flightId)
      : [...selectedFlights, flightId];
    setSelectedFlights(newSelectedFlights);
  };

  // Filtered flights based on the airline filter
  const filteredFlights = flights.filter(flight => {
    return airlineFilter ? flight.airline === airlineFilter : true;
  });

  return (
    <div>
      <SearchForm onSearch={handleSearch} />

      {/* Remove sorting select input since you're not using price sorting anymore */}
      {/* Remove airline filter select input if not used or adjust as needed */}

      <FlightResults flights={filteredFlights} />

      {/* The comparison view logic can remain here if needed */}
      {selectedFlights.length > 0 && (
        <div className="comparison-view">
          <h2>Comparison View</h2>
          {/* Mapping through selected flights for comparison */}
        </div>
      )}
    </div>
  );
}

export default FlightsList;


// Alternative Hard Coded Version:
// The API calls were not working so we created a hardcoded version just to make sure the results displayed correctly

// import React, { useState } from 'react';
// import FlightResults from './FlightResults';
// import './FlightsList.css';

// function SearchForm({ onSearch }) {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [departureDate, setDepartureDate] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch({ from, to, departureDate });
//   };

//   return (
//     <div className="search-container">
//       <form onSubmit={handleSubmit} className="search-form">
//         <div className="input-group">
//           <label htmlFor="from">From</label>
//           <input
//             id="from"
//             type="text"
//             placeholder="e.g., HEL"
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="to">To</label>
//           <input
//             id="to"
//             type="text"
//             placeholder="e.g., OUL"
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="departureDate">Depart On</label>
//           <input
//             id="departureDate"
//             type="date"
//             value={departureDate}
//             onChange={(e) => setDepartureDate(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="search-button">Search Flights</button>
//       </form>
//     </div>
//   );
// }

// function FlightsList() {
//   // Initial state is an empty array, which simulates no data before search
//   const [flights, setFlights] = useState([]);

//   // Simulated flight data
//   const simulatedFlights = [
//     // ... same simulated flight data as before
//     {
//         id: 1,
//         airline: 'Airways #1',
//         departureAirportCode: 'SFO',
//         arrivalAirportCode: 'LAX',
//         departureTime: '10:00 AM',
//         arrivalTime: '12:00 PM',
//         price: Math.floor(Math.random() * 1000) + 100,
//         imageUrl: 'https://via.placeholder.com/150', // Placeholder image
//       },
//       {
//         id: 2,
//         airline: 'Airways #2',
//         departureAirportCode: 'JFK',
//         arrivalAirportCode: 'LHR',
//         departureTime: '8:00 PM',
//         arrivalTime: '8:00 AM',
//         price: Math.floor(Math.random() * 1000) + 100,
//         imageUrl: 'https://via.placeholder.com/150', // Placeholder image
//       },
//   ];

//   const handleSearch = (searchTerm) => {
//     if (searchTerm) {
//       // Update the flights state with simulated data
//       const updatedFlights = simulatedFlights.map(flight => ({
//         ...flight,
//         price: Math.floor(Math.random() * 1000) + 100
//       }));
//       setFlights(updatedFlights);
//     } else {
//       // Clear the flights data if search term is empty
//       setFlights([]);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       <FlightResults flights={flights} />
//     </div>
//   );
// }

// export default FlightsList;
