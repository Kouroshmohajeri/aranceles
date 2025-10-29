import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Lottie from "lottie-react";
import animationData from "./Discount.json";
import "./App.css";

export default function App() {
  const [showPercentRain, setShowPercentRain] = useState(false);
  useEffect(() => {
    document.title = "Aranceles | Bloque 8";
  }, []);
  const handleClick = () => {
    setShowPercentRain(true);
    setTimeout(() => {
      window.location.href =
        "https://gamma.app/docs/Los-Aranceles-t6yuqc72wcgaqbf";
    }, 3000); // Redirect after 3 seconds
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Generate random falling elements
  const renderFallingElements = () => {
    if (!showPercentRain) return null;

    const fallingElements = [];

    // Create 150 % symbols
    for (let i = 0; i < 150; i++) {
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 3;
      const fontSize = Math.random() * 25 + 15; // Between 15px and 40px
      const animationDuration = Math.random() * 2 + 2; // Between 2-4 seconds

      fallingElements.push(
        <div
          key={`percent-${i}`}
          className="falling-element"
          style={{
            position: "fixed",
            top: "-50px",
            left: `${left}vw`,
            fontSize: `${fontSize}px`,
            color: "#ffffff", // White color
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          %
        </div>
      );
    }

    // Create "aranceles" elements
    for (let i = 0; i < 25; i++) {
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 3;
      const fontSize = Math.random() * 20 + 25; // Between 25px and 45px
      const animationDuration = Math.random() * 1.5 + 2.5;

      fallingElements.push(
        <div
          key={`aranceles-${i}`}
          className="falling-element"
          style={{
            position: "fixed",
            top: "-50px",
            left: `${left}vw`,
            fontSize: `${fontSize}px`,
            color: "#ffffff", // White color
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          aranceles
        </div>
      );
    }

    // Create "IVA" elements
    for (let i = 0; i < 25; i++) {
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 3;
      const fontSize = Math.random() * 18 + 22; // Between 22px and 40px
      const animationDuration = Math.random() * 1.5 + 2.5;

      fallingElements.push(
        <div
          key={`iva-${i}`}
          className="falling-element"
          style={{
            position: "fixed",
            top: "-50px",
            left: `${left}vw`,
            fontSize: `${fontSize}px`,
            color: "#ffffff", // White color
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          IVA
        </div>
      );
    }

    // Create "Impuestos" elements
    for (let i = 0; i < 25; i++) {
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 3;
      const fontSize = Math.random() * 18 + 22; // Between 22px and 40px
      const animationDuration = Math.random() * 1.5 + 2.5;

      fallingElements.push(
        <div
          key={`impuestos-${i}`}
          className="falling-element"
          style={{
            position: "fixed",
            top: "-50px",
            left: `${left}vw`,
            fontSize: `${fontSize}px`,
            color: "#ffffff", // White color
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          Impuestos
        </div>
      );
    }

    return fallingElements;
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

      {/* Falling elements animation */}
      {renderFallingElements()}

      <div className="content">
        <h2 className="practice-title">Práctica 4</h2>
        <h3 className="practice-title">
          Los presentadores son, por el momento, solo Kourosh y Yazid.
        </h3>
        <h1 className="title">
          ¡Click aquí👇🏼 para saber qué son los aranceles!
        </h1>
        <div className="lottie-container" onClick={handleClick}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
}
