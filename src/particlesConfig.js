const particlesConfig = {
    background: {
      color: "#0d1117",
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 120,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.6, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    detectRetina: true,
  };
  
  export default particlesConfig;
  