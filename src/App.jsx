import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "./App.css";
import heads from "./images/heads.png";
import tails from "./images/tails.png";

function App() {
  const [coinSide, setCoinSide] = useState(heads); // Default to heads

  const flipCoin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/flip"); // Fetch from backend
      const sideText = response.data.result; // Get "HEADS" or "TAILS"

      setCoinSide(sideText === "HEADS" ? heads : tails); // Update image
      alert(`The coin landed on ${sideText}!`); // Show result
    } catch (error) {
      console.error("Error flipping the coin:", error);
    }
  };

  return (
    <div className="container">
      <h1>This is a Coin Flip Game</h1>
      <img src={coinSide} alt="coin" width="200" />
      <button onClick={flipCoin}>Flip</button>
    </div>
  );
}

export default App;
