import React, { useState, useEffect } from "react";
import "./solarSystem.css"; // Import CSS

const SolarSystemGame: React.FC = () => {
  const [sun, setSun] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    radius: 50,
    color: "rgb(255, 204, 0)", // Yellow sun
  });

  const [planets, setPlanets] = useState<any[]>([]);
  const [stars, setStars] = useState<any[]>([]);
  const [ball, setBall] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    radius: 20,
    speedX: 0.5, // Set initial speed (can adjust this)
    speedY: 0.5, // Set initial speed (can adjust this)
  });
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    // Initialize planets
    const initPlanets = Array.from({ length: 5 }, (_, i) => ({
      distance: (i + 1) * 100,
      angle: Math.random() * 2 * Math.PI,
      radius: 20 + (i + 1) * 5,
      speed: 0.01 + (i + 1) * 0.002,
      color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`,
    }));

    // Initialize stars
    const initStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 2,
    }));

    setPlanets(initPlanets);
    setStars(initStars);
  }, []);

  const updateBallPosition = () => {
    setBall((prev) => ({
      ...prev,
      x: prev.x + prev.speedX,
      y: prev.y + prev.speedY,
    }));

    // Bounce ball off walls
    if (ball.x < 0 || ball.x > window.innerWidth)
      setBall((prev) => ({ ...prev, speedX: -prev.speedX }));
    if (ball.y < 0 || ball.y > window.innerHeight)
      setBall((prev) => ({ ...prev, speedY: -prev.speedY }));

    // Check collision with sun
    const distToSun = Math.hypot(ball.x - sun.x, ball.y - sun.y);
    if (distToSun < ball.radius + sun.radius) {
      setScore((prev) => prev + 5);
      setSun((prev) => ({
        ...prev,
        color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`,
      }));
    }
  };

  const updatePlanets = () => {
    setPlanets((prevPlanets) =>
      prevPlanets.map((planet) => {
        planet.angle += planet.speed;
        const planetX = sun.x + Math.cos(planet.angle) * planet.distance;
        const planetY = sun.y + Math.sin(planet.angle) * planet.distance;

        // Check collision with ball
        if (
          Math.hypot(ball.x - planetX, ball.y - planetY) <
          ball.radius + planet.radius
        ) {
          setScore((prev) => prev + 1);
          return { ...planet, distance: planet.distance + 20 }; // Move planet farther
        }

        return planet;
      })
    );
  };

  // Function to increase ball speed gradually
  const increaseBallSpeed = () => {
    setBall((prev) => ({
      ...prev,
      speedX: prev.speedX * 1.001, // Gradual speed increase
      speedY: prev.speedY * 1.001, // Gradual speed increase
    }));
  };

  // Function to handle user input for increasing speed
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setBall((prev) => ({
          ...prev,
          speedX: prev.speedX * 1.1, // Increase speed by 10%
          speedY: prev.speedY * 1.1, // Increase speed by 10%
        }));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateBallPosition();
      updatePlanets();
      increaseBallSpeed(); // Call to gradually increase speed
    }, 16); // Approximate 60 FPS

    return () => clearInterval(interval);
  }, [ball, sun, planets]);

  return (
    <div className="solar-system-game">
      <canvas
        id="gameCanvas"
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>

      {/* Draw stars */}
      <div className="stars">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Draw sun */}
      <div
        className="sun"
        style={{
          left: `${sun.x - sun.radius}px`,
          top: `${sun.y - sun.radius}px`,
          width: `${sun.radius * 2}px`,
          height: `${sun.radius * 2}px`,
          backgroundColor: sun.color,
        }}
      ></div>

      {/* Draw planets */}
      {planets.map((planet, index) => {
        planet.angle += planet.speed;
        const planetX = sun.x + Math.cos(planet.angle) * planet.distance;
        const planetY = sun.y + Math.sin(planet.angle) * planet.distance;

        return (
          <div
            key={index}
            className="planet"
            style={{
              left: `${planetX - planet.radius}px`,
              top: `${planetY - planet.radius}px`,
              width: `${planet.radius * 2}px`,
              height: `${planet.radius * 2}px`,
              backgroundColor: planet.color,
            }}
          ></div>
        );
      })}

      {/* Draw red ball */}
      <div
        className="ball"
        style={{
          left: `${ball.x - ball.radius}px`,
          top: `${ball.y - ball.radius}px`,
          width: `${ball.radius * 2}px`,
          height: `${ball.radius * 2}px`,
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
};

export default SolarSystemGame;
