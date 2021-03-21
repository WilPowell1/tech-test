import React from 'react';
import './App.css';

const api = {
  key: "1f215d8ef43891231046dea9a0dc041a",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {

  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box"></div>
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        <div className="location-box">
          <div className="location">New York City, USA</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box"></div>
          <div className="temp">
            15
          </div>
      </main>
    </div>
  );
}

export default App;
