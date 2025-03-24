import React, { useEffect, useState } from "react";
import axios from "axios";

function ScamStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/stats")
      .then(response => setStats(response.data))
      .catch(error => console.error("Error fetching stats", error));
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-warning">📊 Scam Trends & Statistics</h3>
      {stats ? (
        <ul className="list-group">
          <li className="list-group-item">🔴 Scams Detected: {stats.scams_detected}</li>
          <li className="list-group-item">🟢 Safe Messages: {stats.safe_messages}</li>
          <li className="list-group-item">📌 Most Common Scam: {stats.most_common_scam}</li>
        </ul>
      ) : (
        <p className="text-light">Loading scam statistics...</p>
      )}
    </div>
  );
}

export default ScamStats;
