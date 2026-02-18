import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-container">
        <h1>Civilization Sprite</h1>
        <h2>Contact Us</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
