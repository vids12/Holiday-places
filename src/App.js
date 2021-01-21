import React, { useState } from "react";
import "./styles.css";
var placesDic = {
  Kerala: [
    { name: "Munnar", rating: "4.5 / 5" },
    { name: "Kovalam", rating: "5 / 5" }
  ],
  Punjab: [
    { name: "Amritsar", rating: "4.5 / 5" },
    { name: "Chandigarh", rating: "5 / 5" }
  ],
  Rajasthan: [
    { name: "Pushkar", rating: "4 / 5" },
    { name: "Chittorgarh", rating: "5 / 5" }
  ]
};
var placesList = Object.keys(placesDic);

export default function App() {
  const [places, setSelectedPlace] = useState("Kerala");
  function clickHandler(placeInput) {
    setSelectedPlace(placeInput);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#e65c00", paddingTop: "2rem" }}>Must Go Places</h1>
      <h4 style={{ color: "#ffff33" }}>
        <em>Checkout my favourite holiday destinations!!</em>
      </h4>
      <div>
        <ul>
          {placesList.map(function (place) {
            return (
              <button
                onClick={() => clickHandler(place)}
                key={place}
                style={{
                  backgroundColor: "white"
                }}
              >
                {place}
              </button>
            );
          })}
        </ul>
      </div>

      <div style={{ textAlign: "left" }}>
        <ul>
          {placesDic[places].map((city) => (
            <li
              key={city.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #e0e0eb",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "whitesmoke"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", paddingBottom: "0.3rem" }}>
                {" "}
                {city.name}{" "}
              </div>
              <div style={{ fontSize: "small", marginBottom: "2rem" }}>
                {" "}
                {city.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
