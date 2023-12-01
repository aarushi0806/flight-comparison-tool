import logo from './logo.svg';
import './App.css';

import React from 'react';
import FlightsList from './FlightsList'; // Import the component

function App() {
    return (
        <div className="App">
            <h1>Flight Search Results</h1>
            <FlightsList /> {/* Use the component */}
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

export default App;
