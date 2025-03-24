import React from "react";
import "../styles/Tips.css"; // Ensure you create this CSS file for styling

function Tips() {
  const scamTips = [
    { icon: "🔒", text: "Never share OTPs, passwords, or CVV codes with anyone." },
    { icon: "🚫", text: "Avoid clicking on suspicious links from unknown sources." },
    { icon: "📞", text: "Banks and government agencies never ask for personal details over phone calls." },
    { icon: "💰", text: "Be cautious of offers that seem 'too good to be true'." },
    { icon: "🔍", text: "Verify URLs before clicking; scammers often use lookalike domains." },
    { icon: "📧", text: "Check sender email addresses carefully; scammers mimic legitimate organizations." },
    { icon: "🔑", text: "Use strong, unique passwords and enable two-factor authentication (2FA)." },
    { icon: "📢", text: "Report fraud to authorities immediately if you suspect a scam." }
  ];

  return (
    <div className="tips-container">
      <h3 className="tips-title">🛑 Scam Prevention Tips</h3>
      <div className="tips-grid">
        {scamTips.map((tip, index) => (
          <div key={index} className="tip-card">
            <span className="tip-icon">{tip.icon}</span>
            <p className="tip-text">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
