import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample scam detection history data (Replace this with API call later)
const sampleHistory = [
  { id: 1, text: "Congratulations! You've won a free iPhone!", result: "⚠️ Scam Detected", date: new Date() },
  { id: 2, text: "Bank alert: Update your details to avoid account suspension.", result: "⚠️ Scam Detected", date: new Date() },
  { id: 3, text: "Your package is out for delivery. Track it now.", result: "✅ Safe", date: new Date() },
];

function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  // Simulating fetching history from backend
  useEffect(() => {
    setHistory(sampleHistory);
  }, []);

  // Function to clear history
  const clearHistory = () => {
    setHistory([]); // Clear the history state
  };

  // Filter history based on search input
  const filteredHistory = history.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  // Function to download history as CSV
  const downloadCSV = () => {
    const csvData = ["Text,Result,Date\n"];
    history.forEach((item) => {
      csvData.push(`"${item.text}","${item.result}","${item.date.toLocaleString()}"\n`);
    });

    const blob = new Blob([csvData.join("")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "scam_detection_history.csv";
    a.click();
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="text-light fw-bold">📜 Scam Detection History</h2>

      {/* Search Bar */}
      <div className="mt-3">
        <input
          type="text"
          className="form-control w-50 mx-auto search-bar"
          placeholder="🔍 Search history..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* No History Message */}
      {filteredHistory.length === 0 ? (
        <div className="alert alert-warning text-center mt-4">
          📝 No matching history found.
        </div>
      ) : (
        <>
          {/* History List */}
          <div className="row justify-content-center mt-4">
            {filteredHistory.map((item) => (
              <div key={item.id} className="col-md-6">
                <div className={`card mb-3 shadow animated-card ${item.result.includes("Scam") ? "border-danger" : "border-success"}`}>
                  <div className="card-body">
                    <h5 className="card-title text-light">{item.text}</h5>
                    <p className={`badge ${item.result.includes("Scam") ? "bg-danger" : "bg-success"}`}>
                      {item.result}
                    </p>
                    <p className="text-muted small">
                      🕒 {item.date.toLocaleDateString()} {item.date.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="text-center mt-4">
            <button className="btn btn-danger mx-2 animated-button" onClick={clearHistory}>🗑️ Clear History</button>
            <button className="btn btn-success mx-2 animated-button" onClick={downloadCSV}>📥 Download CSV</button>
          </div>
        </>
      )}
    </div>
  );
}

export default History;
