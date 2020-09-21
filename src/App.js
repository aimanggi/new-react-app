import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./ClassComponent";
import HooksComponent from "./HooksComponent";
import StatelessComponent from "./StatelessComponent";
import Clock from "./Clock";
// import

function App() {
  const [id, setId] = useState(1);
  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setId(2);
    }, 5000);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ini di Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClassComponent id={id} />
        <HooksComponent />
        <StatelessComponent stateless="hello world" />
        <button onClick={() => setShowClock(!showClock)}>toggle clock</button>
        {showClock && <Clock />}
      </header>
    </div>
  );
}

export default App;
