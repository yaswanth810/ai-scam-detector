import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // New Footer Component
import Home from "./pages/Home";
import History from "./pages/History";
import Reports from "./pages/Reports";
import About from "./pages/About"; // About Page
import Contact from "./pages/Contact"; // Contact Page
import NotFound from "./pages/NotFound"; // 404 Page

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/about" element={<About />} /> {/* New About Page */}
          <Route path="/contact" element={<Contact />} /> {/* New Contact Page */}
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </Router>
  );
}

export default App;
