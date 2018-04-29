import React, { Component } from 'react';
import './App.css';
import Form from './form/Form.js';
import Histogram from './histogram/Histogram.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Histogramo</h1>
        </header>
        <div className="App-body">
          <div className="App-content">
            <Form />
          </div>
          <div className="App-content">
            <Histogram />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
