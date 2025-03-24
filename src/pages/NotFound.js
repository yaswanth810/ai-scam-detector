import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center mt-5 text-light">
      <h1>❌ 404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
}

export default NotFound;
