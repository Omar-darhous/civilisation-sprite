import React, { useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dshnf9e",
        "template_p6cc06s",
        formData,
        "ash_hfTUuPTpZJQj1",
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        () => {
          alert("Failed to send message ❌");
        },
      );
  };

  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-container">
        <h1>Civilization Sprite</h1>
        <h2>Contact Us</h2>

        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
