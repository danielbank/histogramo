import React, { Component } from 'react';
import Form from './form/Form.js';
import Histogram from './graph/Histogram.js';
import ScatterPlot from './graph/ScatterPlot.js';
import {
  StyledApp,
  StyledHeader,
  StyledTitle,
  StyledGitHubRibbon,
  StyledBody,
  StyledContent
} from '../style';

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

  undoLastSubmit = () => {
    const { rolls, reds, specials } = this.state;
    if (!rolls.length) return false;
    const lastRoll = rolls[rolls.length - 1];
    const lastRed = reds[reds.length - 1];
    const lastYellow = lastRoll - lastRed;
    const lastSpecial = specials[specials.length - 1];
    this.setState({
      rolls: rolls.slice(0, rolls.length - 1),
      reds: reds.slice(0, reds.length - 1),
      specials: specials.slice(0, specials.length - 1),
    });
    return {
      red: lastRed,
      yellow: lastYellow,
      special: lastSpecial,
    }
  }

  getRGB = (color) => {
    switch (color) {
      case 'green': {
        return '#779348';
      }
      case 'yellow': {
        return '#F6C55E';
      }
      case 'blue': {
        return '#0072BB';
      }
      case 'black': {
        return '#ccc';
      }
      default: {
        return '#222'
      }
    }
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
    return reds.map((value, i) => {
      return {
        value: [i, value],
        itemStyle: {
          borderWidth: 10,
          color: this.getRGB(specials[i]),
        },
        metacolor: specials[i],
      };
    });
  };

  render() {
    return (
      <StyledApp>
        <StyledHeader>
          <StyledTitle>Histogramo</StyledTitle>
          <a href="https://github.com/danielbank/histogramo">
            <StyledGitHubRibbon
              src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
              alt="Fork me on GitHub"
              />
          </a>
        </StyledHeader>
        <StyledBody>
          <StyledContent>
            <Form
              submitRoll={this.submitRoll}
              undoLastSubmit={this.undoLastSubmit}
              undoable={this.state.rolls.length}
              />
          </StyledContent>
          <StyledContent>
            <Histogram data={this.getRollData()} />
            <ScatterPlot data={this.getSpecialData()} />
          </StyledContent>
        </StyledBody>
      </StyledApp>
    );
  }
}

export default App;
