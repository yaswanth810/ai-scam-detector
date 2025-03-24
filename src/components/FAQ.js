import React, { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "❓ How does AI Scam Detector work?", answer: "We use machine learning models to analyze text and detect potential scams." },
    { question: "💡 Is this tool free to use?", answer: "Yes! AI Scam Detector is completely free to help users avoid scams." },
    { question: "🔐 How accurate is the detection?", answer: "Our model is trained on thousands of scam cases and improves over time." },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center text-info fw-bold">❓ Frequently Asked Questions</h2>
      <div className="accordion mt-3">
        {faqs.map((faq, index) => (
          <div key={index} className="card mb-2">
            <div className="card-header" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <h5 className="mb-0">{faq.question}</h5>
            </div>
            {openIndex === index && <div className="card-body">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
