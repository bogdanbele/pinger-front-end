import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import SignIn from "./components/features/SignIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="w-100">click</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SignIn />
      </header>
    </div>
  );
}

export default App;
