import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <h1>Book Appointments with Trusted Doctors</h1>
    <p>Find the right specialist and schedule your visit in seconds.</p>
    <Link to="/book"><button>Book Appointment</button></Link>
  </section>
);

export default Hero;
