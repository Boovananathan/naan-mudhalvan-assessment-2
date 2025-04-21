import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import AboutUs from './pages/AboutUs';
import Doctors from './pages/Doctors';
import AppointmentForm from './pages/AppointmentForm';
import Footer from './pages/Footer';
import './App.css';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <Doctors setSelectedDoctor={setSelectedDoctor} />
          </>
        } />
        <Route path="/book" element={<AppointmentForm selectedDoctor={selectedDoctor} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
