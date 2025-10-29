import { useCallback, useState } from "react";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Lottie from "lottie-react";
import animationData from "./Discount.json";
import "./App.css";

export default function App() {
  const [showPercentRain, setShowPercentRain] = useState(false);

  const handleClick = () => {
    setShowPercentRain(true);
    setTimeout(() => {
      window.location.href =
        "https://gamma.app/docs/Los-Aranceles-t6yuqc72wcgaqbf";
    }, 2000); // Redirect after 2 seconds
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Generate random % elements
  const renderPercentRain = () => {
    if (!showPercentRain) return null;

    const percentElements = [];
    for (let i = 0; i < 100; i++) {
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 2;
      const fontSize = Math.random() * 20 + 20; // Between 20px and 40px

      percentElements.push(
        <div
          key={i}
          className="falling-percent"
          style={{
            position: "fixed",
            top: "-50px",
            left: `${left}vw`,
            fontSize: `${fontSize}px`,
            color: "#fff",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            animationDelay: `${animationDelay}s`,
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          %
        </div>
      );
    }
    return percentElements;
  };

  return (
    <div className="app-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: "#0d1321" },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "out" },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Falling % animation */}
      {renderPercentRain()}

      <div className="content">
        <h1 className="title">¡Click aquí para saber qué son los aranceles!</h1>
        <div className="lottie-container" onClick={handleClick}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
}
