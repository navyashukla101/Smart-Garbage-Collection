import React from 'react';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Garbage Collection Booking</h1>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="default-hero-message"> 
          <h2>Your Trusted Garbage Collection Partner</h2>
          <p>Keeping Your Community Clean and Green.</p>
        </div>
        <div className="hero-content"> 
          <h2>Welcome to Our Garbage Collection Service</h2>
          <p>Efficient and Reliable Waste Management Solutions at Your Fingertips.</p>
          <a href="#signup" className="cta-button">Get Started</a>
        </div>
      </section>

      <section className="info-boxes">
        <div className="info-box">
          <h3>Why Choose Us?</h3>
          <p>We provide reliable and efficient garbage collection services.</p>
        </div>
        <div className="info-box">
          <h3>Eco-Friendly Solutions</h3>
          <p>Committed to reducing waste through recycling and composting.</p>
        </div>
        <div className="info-box">
          <h3>24/7 Service</h3>
          <p>Available any time you need us, ensuring your convenience.</p>
        </div>
        <div className="info-box">
          <h3>Community Focused</h3>
          <p>Dedicated to making our community cleaner and greener.</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We provide top-notch garbage collection services, ensuring a cleaner and greener environment for our community.</p>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Residential Garbage Collection</li>
          <li>Commercial Waste Management</li>
          <li>Recycling and Composting</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>For more information, reach out to us at contact@garbagecollection.com or call us at (123) 456-7890.</p>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2024 Garbage Collection Booking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
