import React from 'react';
import './App.css';
import FlightsList from './FlightsList';


function NavBar() {
  return (
    <nav className="app-nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Flight Comparison Website</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Flight Search Engine</h1>
      </header>
      <FlightsList />
      <Footer />
    </div>
  );
}

export default App;
