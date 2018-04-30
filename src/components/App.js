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
    });
  }

  getRollData = () => {
    const { rolls } = this.state;
    const rollData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    rolls.map(roll => {
      rollData[roll - 2] = rollData[roll - 2] + 1;
    });
    return rollData;
  };

  render() {
    const { rolls, reds, specials } = this.state;
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
            <Histogram
              xAxis={["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
              data={this.getRollData()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
