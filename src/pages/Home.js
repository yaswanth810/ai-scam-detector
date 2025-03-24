import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Tips from "../components/Tips"; // Import Scam Prevention Tips component
import particlesConfig from "../particlesConfig";

function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.tsParticles.load("particles-js", particlesConfig);
  }, []);

  const checkScam = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/check", { text: input });
      setResult(response.data.result);
    } catch (error) {
      console.error("Error connecting to backend", error);
      setResult("❌ Error checking scam");
    }
    setLoading(false);
  };

  return (
    <div className="position-relative">
      {/* Moving Particles Background */}
      <div id="particles-js" style={{ position: "absolute", width: "100%", height: "100vh", zIndex: -1 }}></div>

      <div className="container mt-5 text-center">
        <h1 className="display-4 text-light fw-bold">🛡️ AI Scam Detector</h1>
        <p className="lead text-light">Enter a message or URL to check for scams.</p>

        {/* 🚀 Enhanced Scam Detection Block */}
        <div className="mt-4">
          <div className="scam-detection-block shadow-lg p-4">
            <h3 className="text-danger fw-bold">🔍 Scam Detection</h3>

            {/* Input Field */}
            <textarea
              className="form-control mt-3"
              placeholder="Enter text or URL..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows="3"
              maxLength="250"
            />
            <small className="text-muted">Characters: {input.length}/250</small>

            {/* Check Button */}
            <button
              onClick={checkScam}
              className="btn btn-danger mt-3 w-100 animated-button"
              disabled={loading || !input.trim()}
            >
              {loading ? "Checking..." : "🚨 Detect Scam"}
            </button>

            {/* Scam Detection Result */}
            {result && (
              <div className={`scam-result alert mt-3 ${result.includes("Scam") ? "alert-danger" : "alert-success"}`}>
                {result.includes("Scam") ? "⚠️ Scam Detected!" : "✅ Safe"}
              </div>
            )}
          </div>
        </div>

        {/* 🚀 Scam Prevention Tips Section */}
        <div className="mt-5">
          <Tips />
        </div>
      </div>
    </div>
  );
}

export default Home;
