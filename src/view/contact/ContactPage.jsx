import React from 'react';
import MapComponent from './MapComponent'; // Adjust the path based on your project structure
import './ContactPage.css'; // Add any additional styling if needed

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h1>Contact Us</h1>
      <div className="map-container">
        <MapComponent />
      </div>
      <div className="contact-details">
        <p>Email: davies&partners@company.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default ContactPage;
