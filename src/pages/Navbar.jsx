import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="logo">Doctor Appointment Booking</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
