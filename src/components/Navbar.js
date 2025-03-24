import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeToggle from "./DarkModeToggle";  // Import Dark Mode Toggle

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">🛡️ Scam Detector</Link>
        
        {/* Navbar Links */}
        <div className="d-flex align-items-center">
          <Link className="nav-link d-inline p-2 text-white" to="/">Home</Link>
          <Link className="nav-link d-inline p-2 text-white" to="/history">History</Link>
          <Link className="nav-link d-inline p-2 text-white" to="/reports">Reports</Link>
          
          {/* Dark Mode Toggle Button */}
          <div className="ms-3">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
