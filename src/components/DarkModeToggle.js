import React, { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  return (
    <button onClick={toggleDarkMode} className="btn btn-secondary mt-2">
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
