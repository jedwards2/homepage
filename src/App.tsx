import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => { setDate(new Date()) }, 10000);
    return () => clearInterval(timer);
  });

  let time = date.toLocaleString().slice(10, 16);
  let am_pm = date.toLocaleString().slice(19);
  let getDay = () => {
    let current_day = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[current_day];
  }
  return (
    <div className="App">
      <div className="time-div">
        <p>{getDay()}</p>
        <p>{time}</p>
        <p>{am_pm}</p>
      </div>
      <div className="link-div">
        <a href="https://github.com/jedwards2"><img alt="github" src={require("./images/github.png")} /></a>
        <a href="https://www.youtube.com/"><img alt="youtube" src={require("./images/youtube.png")} /></a>
        <a href="https://en.wikipedia.org/wiki/Special:Random"><img alt="wikipedia" src={require("./images/wikipedia.png")} /></a>
      </div>
    </div>
  );
}

export default App;
