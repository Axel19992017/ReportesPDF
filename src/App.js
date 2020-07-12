import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() =>{
    document.title = "Le ha dado click " + count + " veces.";
    return () =>{
      console.log("desmontando...");
    }
  },[count]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {count}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setCount(count+1)}>Aqui :D</button>
      </header>
    </div>
  );
}

export default App;
