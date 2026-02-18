import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Booking.css";

function Booking() {
  return (
    <div className="booking-page">
      <Navbar />

      <div className="overlay">
        {/* Booking Form */}
        <div className="booking-container">
          <h1>Book Your Trip</h1>
          <form className="booking-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="date" />
            <input type="date" />
            <button>Book Now</button>
          </form>
        </div>

        {/* Recommended Hotels */}
        <div className="recommended">
          <h2>Best Recommended</h2>

          <div className="hotel-cards">
            <div className="hotel-card">
              <img src="/images/hotel1.jpg" alt="Hotel" />
              <h3>Cherry Marex Hotel</h3>
              <p>⭐⭐⭐⭐</p>
            </div>

            <div className="hotel-card">
              <img src="/images/hotel2.jpg" alt="Hotel" />
              <h3>Freedom Hotel</h3>
              <p>⭐⭐⭐⭐⭐</p>
            </div>

            <div className="hotel-card">
              <img src="/images/hotel3.jpg" alt="Hotel" />
              <h3>Tolip Hotel</h3>
              <p>⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
