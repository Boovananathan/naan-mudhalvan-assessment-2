import React, { useState, useEffect } from 'react';

const AppointmentForm = ({ selectedDoctor }) => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    doctorName: selectedDoctor?.name || '',
    specialization: selectedDoctor?.specialization || '',
    date: '', time: ''
  });

  useEffect(() => {
    localStorage.setItem('appointmentForm', JSON.stringify(form));
  }, [form]);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book Your Appointment</h2>
      <input name="firstName" placeholder="First Name" required onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" required onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" pattern="\d{10}" required onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
      <input name="doctorName" value={form.doctorName} placeholder="Doctor Name" readOnly />
      <input name="specialization" value={form.specialization} placeholder="Specialization" readOnly />
      <input name="date" type="date" required onChange={handleChange} />
      <input name="time" type="time" required onChange={handleChange} />
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default AppointmentForm;
