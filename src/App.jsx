import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Research from "./pages/Research";
import PlaceDetails from "./pages/PlaceDetails";
import Booking from "./pages/Booking";
import Tourism from "./pages/Tourism";
import RareSites from "./pages/Rare";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/rare" element={<RareSites />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
