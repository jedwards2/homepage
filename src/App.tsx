import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => { setDate(new Date()) }, 10000);
    return () => clearInterval(timer);
  });

  let time = date.toLocaleString();
  let time_array = time.split(":");
  let am_pm = date.toLocaleString().slice(19);

  const getDay = () => {
    let current_day = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[current_day];
  }

  return (
    <div className="App">
      <div className="time-div">
        <p>{getDay()}</p>
        <p>{time_array[0].slice(-2)}:{time_array[1]}</p>
        <p>{am_pm}</p>
      </div>
      <div className="link-div">
        <a href="https://github.com/jedwards2"><img alt="github" src={require("./images/github.png")} /></a>
        <a href="https://www.youtube.com/"><img alt="youtube" src={require("./images/youtube.png")} /></a>
        <a href="https://en.wikipedia.org/wiki/Special:Random"><img alt="wikipedia" src={require("./images/wikipedia.png")} /></a>
        <a href="https://doc.rust-lang.org/book/title-page.html"><img alt="rustbook" src={require("./images/rust.png")} /></a>
        <a href="https://www.typescriptlang.org/docs/"><img alt="typescript" src={require("./images/typescript.png")} /></a>
        <a href="https://cycling74.com/forums"><img alt="cycling74 forum" src={require("./images/cycling74.png")} /></a>
      </div>
    </div>
  );
}

export default App;
