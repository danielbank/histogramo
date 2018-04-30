import React, { Component } from 'react';
import './App.css';
import Form from './form/Form.js';
import Histogram from './histogram/Histogram.js';

class App extends Component {
  state = {
    rolls: [],
    reds: [],
    specials: [],
  };

  submitRoll = (red, yellow, special) => {
    const { rolls, reds, specials } = this.state;
    this.setState({
      rolls: rolls.concat(red + yellow),
      reds: reds.concat(red),
      specials: specials.concat(special),
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Histogramo</h1>
        </header>
        <div className="App-body">
          <div className="App-content">
            <Form submitRoll={this.submitRoll} />
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
