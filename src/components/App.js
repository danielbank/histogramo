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
    rolls.forEach(roll => {
      rollData[roll - 2] = rollData[roll - 2] + 1;
    });
    return rollData;
  };

  // getRedsData = () => {
  //   const { reds } = this.state;
  //   const redsData = [0, 0, 0, 0, 0, 0];
  //   reds.map(red => {
  //     redsData[red - 1] = redsData[red - 1] + 1;
  //   });
  //   return redsData;
  // };
  //
  // getSpecialData = () => {
  //   const { specials } = this.state;
  //   const specialData = [0, 0, 0, 0, 0, 0];
  //   specials.map(special => {
  //     switch (special) {
  //       case 'green': {
  //         specialData['green'] = specialData['green'] + 1;
  //         return specialData['green'] + 1;
  //       }
  //       case 'yellow': {
  //         specialData['yellow'] = specialData['yellow'] + 1;
  //         return specialData['yellow'] + 1;
  //       }
  //       case 'blue': {
  //         specialData['blue'] = specialData['blue'] + 1;
  //         return specialData['blue'] + 1;
  //       }
  //       case 'black': {
  //         specialData['black'] = specialData['black'] + 1;
  //         return specialData['black'] + 1;
  //       }
  //       default: {
  //         return null;
  //       }
  //     }
  //   });
  //   return specialData;
  // };

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
