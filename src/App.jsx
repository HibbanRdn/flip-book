import React from "react";
import MyFlipBook from "./components/MyFlipBook";

function App() {
  return (
    <div>
      <h1
  style={{
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "whitesmoke", // tulisannya putih
    textShadow:
      "0 0 8px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 182, 193, 0.6)", // glow pink
    transition: "all 0.4s ease",
    cursor: "pointer",
    userSelect: "none",
    letterSpacing: "1px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.textShadow =
      "0 0 15px rgba(255, 105, 180, 1), 0 0 40px rgba(255, 182, 193, 0.9)";
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.textShadow =
      "0 0 8px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 182, 193, 0.6)";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  Happy Birthday Jenong!!
</h1>


      {/* Audio musik */}
      <audio autoPlay loop>
  <source src={`${import.meta.env.BASE_URL}song/song.mp3`} type="audio/mpeg" />
</audio>

      {/* Flipbook */}
      <MyFlipBook />

    </div>
  );
}

export default App;
