import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  return (
    <nav className="nav">
      <h2 className="logo">𓂀 Civilisation Spirit</h2>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/Research">Research</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/tourism">Tourism</NavLink>
        <NavLink to="/rare">Rare Sites</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button onClick={logout} className="logout">
          Log out
        </button>
      </div>

      <div className="menu" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}
