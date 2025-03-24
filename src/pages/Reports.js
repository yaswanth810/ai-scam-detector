import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Reports() {
  const [reports, setReports] = useState([]);
  const [reportText, setReportText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Function to handle scam report submission
  const submitReport = () => {
    if (!reportText.trim()) {
      alert("⚠️ Please enter scam details before submitting!");
      return;
    }

    const newReport = {
      id: reports.length + 1,
      text: reportText,
      date: new Date(),
    };

    setReports([newReport, ...reports]); // Add new report to the top
    setReportText("");
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">🚨 Report a Scam</h2>

      {/* Success Message */}
      {submitted && <div className="alert alert-success text-center mt-3">✅ Scam report submitted successfully!</div>}

      {/* Scam Report Form */}
      <div className="card p-4 shadow-lg mt-4">
        <h5 className="text-center">🔍 Help Others Stay Safe!</h5>
        <textarea
          className="form-control mt-3"
          rows="3"
          placeholder="Describe the scam (e.g., suspicious email, fake website)..."
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
        ></textarea>
        <button className="btn btn-danger mt-3" onClick={submitReport}>🚀 Submit Report</button>
      </div>

      {/* List of Reported Scams */}
      <h3 className="text-center text-secondary mt-5">📜 Reported Scams</h3>
      {reports.length === 0 ? (
        <div className="alert alert-warning text-center mt-3">📭 No scam reports submitted yet.</div>
      ) : (
        <div className="row justify-content-center mt-3">
          {reports.map((report) => (
            <div key={report.id} className="col-md-6">
              <div className="card mb-3 shadow border-danger">
                <div className="card-body">
                  <p className="card-text">"{report.text}"</p>
                  <p className="text-muted small">
                    🕒 Reported on {report.date.toLocaleDateString()} {report.date.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Reports;
