import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Histogram from './histogram/Histogram.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Histogramo</h1>
        </header>
        <Histogram />
      </div>
    );
  }
}

export default App;
