import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        We'd love to hear from you. Whether you have a question about our products, 
        a partnership inquiry, or just want to say hello, feel free to reach out.
      </p>
      
      <form 
        className="contact-form" 
        action="https://formspree.io/f/mdkdlyjw" 
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;