"use client";
import React, { useState } from "react";

const RandomComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100)
  );

  const handleClick = () => {
    setCount(count + 1);
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <h2>Random Number Generator</h2>
      <p>Current Random Number: {randomNumber}</p>
      <p>Button Clicked: {count} times</p>
      <button onClick={handleClick}>Generate Random Number</button>
    </div>
  );
};

export default RandomComponent;
