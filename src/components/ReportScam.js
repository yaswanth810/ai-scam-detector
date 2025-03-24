import React, { useState } from "react";

function ReportScam() {
  const [report, setReport] = useState({ text: "", email: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (report.text.trim() === "" || report.email.trim() === "") {
      setMessage("⚠️ Please fill in all fields!");
      return;
    }
    setMessage("✅ Scam Report Submitted! Thank you for your help.");
    setReport({ text: "", email: "" }); // Clear form
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-danger fw-bold">🚨 Report a Scam</h2>
      <div className="card shadow-lg p-4 report-scam-card">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Scam Details</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Describe the scam..."
              value={report.text}
              onChange={(e) => setReport({ ...report, text: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email (Optional)</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email..."
              value={report.email}
              onChange={(e) => setReport({ ...report, email: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">📩 Submit Report</button>
        </form>
        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
    </div>
  );
}

export default ReportScam;
