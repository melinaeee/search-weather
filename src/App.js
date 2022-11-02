import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather /> 
        <footer>
          This project was coded by Melinae and is{" "}
          <a href="https://github.com/melinaeee/search-weather" rel="noopener">
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

