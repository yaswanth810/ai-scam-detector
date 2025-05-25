# AI Scam Detector

## Overview
The AI Scam Detector is a web application designed to identify and prevent scams using advanced machine learning techniques. It provides a user-friendly interface for scam detection, reporting, and educational resources.

---

## Features
- **Scam Detection**: Analyze text or URLs to detect potential scams.
- **Scam Reporting**: Users can report scams to help others stay safe.
- **Scam Prevention Tips**: Educational tips to avoid falling victim to scams.
- **Scam History**: View past scam detection results.
- **Dark Mode**: Toggle between light and dark themes for better accessibility.

---

## Tech Stack
- **Frontend**: React, Bootstrap
- **Backend**: Flask (for API integration)
- **Machine Learning**: scikit-learn, pandas, numpy
- **Deployment**: Configured for platforms like Heroku

---

## Project Structure
```
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── particlesConfig.js
│   ├── reportWebVitals.js
│   ├── service-worker.js
│   ├── serviceWorkerRegistration.js
│   ├── setupTests.js
│   ├── components/
│   │   ├── DarkModeToggle.js
│   │   ├── FAQ.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── ReportScam.js
│   │   ├── ScamStats.js
│   │   └── Tips.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── History.js
│   │   ├── Home.js
│   │   ├── NotFound.js
│   │   └── Reports.js
│   └── styles/
│       └── Tips.css
├── .gitignore
├── package.json
├── README.md
```

---

## Installation & Setup

### Prerequisites
- Node.js and npm installed

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yaswanth810/ai-scam-detector.git
   cd ai-scam-detector
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000/`.
