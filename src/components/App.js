import React, { Component } from 'react';
import './App.css';
import Form from './form/Form.js';
import Histogram from './graph/Histogram.js';
import ScatterPlot from './graph/ScatterPlot.js';

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
    });
  }

  getRollData = () => {
    const { rolls } = this.state;
    const rollData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    rolls.forEach(roll => {
      rollData[roll - 2] = rollData[roll - 2] + 1;
    });
    return rollData;
  };

  getSpecialData = () => {
    const { reds, specials } = this.state;
    return reds.map((value, i) => [i, value, specials[i]]);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Histogramo by <a href="https://github.com/danielbank">Daniel Bank</a></h1>
        </header>
        <div className="App-body">
          <div className="App-content">
            <Form submitRoll={this.submitRoll} />
          </div>
          <div className="App-content">
            <Histogram data={this.getRollData()} />
            <ScatterPlot data={this.getSpecialData()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
