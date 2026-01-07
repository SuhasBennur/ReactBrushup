import React, { useState, useEffect } from "react";

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    // cleanup
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <h2>Mouse Location</h2>
      <p>X: {position.x}px</p>
      <p>Y: {position.y}px</p>
    </div>
  );
}