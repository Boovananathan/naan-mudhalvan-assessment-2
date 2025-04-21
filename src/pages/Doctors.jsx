import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sampleDoctors = [
  {
    name: "Dr. Sarah Khan",
    specialization: "Cardiologist",
    experience: "10 Years",
    image: "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?ga=GA1.1.222153734.1745211518&semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Amit Verma",
    specialization: "Dermatologist",
    experience: "8 Years",
    image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?ga=GA1.1.222153734.1745211518&semt=ais_hybrid&w=740"
  },
  {
    name: "Dr. Priya Mehta",
    specialization: "Pediatrician,General",
    experience: "12 Years",
    image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?ga=GA1.1.222153734.1745211518&semt=ais_hybrid&w=740"
  }
];

const Doctors = ({ setSelectedDoctor }) => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('doctors', JSON.stringify(sampleDoctors));
    setDoctors(sampleDoctors);
  }, []);

  const handleBook = (doctor) => {
    setSelectedDoctor(doctor);
    navigate("/book");
  };

  return (
    <section className="doctors" id="doctors">
      <h2>Meet Our Doctors</h2>
      <div className="doctor-cards">
        {doctors.map((doc, i) => (
          <div key={i} className="card">
            <img src={doc.image} alt={doc.name} className="doctor-img" />
            <h3>{doc.name}</h3>
            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
            <button onClick={() => handleBook(doc)}>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
