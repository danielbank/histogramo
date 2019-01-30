import React, { Component } from 'react';
import { clamp } from 'lodash';
import Form from './form/Form.js';
import Histogram from './graph/Histogram.js';
import ScatterPlot from './graph/ScatterPlot.js';
import Button from './form/Button.js';
import Graph from './icon/Graph.js';
import FillSix from './icon/FillSix.js';
import {
  colors,
  StyledApp,
  StyledHeader,
  StyledGitHubRibbon,
  StyledBody,
  StyledLeftContent,
  StyledRightContent
} from '../style';

class App extends Component {
  state = {
    leftPercent: 50,
    rolls: [],
    reds: [],
    specials: [],
  };

  onLeftClick = () => this.setState({leftPercent: clamp(this.state.leftPercent + 10, 80)});

  onRightClick = () => this.setState({leftPercent: clamp(this.state.leftPercent - 10, 20, 80)});

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
        return colors.scientificGreen;
      }
      case 'yellow': {
        return colors.mercantileYellow;
      }
      case 'blue': {
        return colors.politicalBlue;
      }
      case 'black': {
        return colors.beaurocraticGrey;
      }
      default: {
        return colors.appBlack
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
          <Button
            icon={<FillSix color={colors.appBlack} size="100%" />}
            onClick={this.onLeftClick}
            size="10%"
            maxSize="5rem"
            disabled={this.state.leftPercent > 70}
            />
          <Button
            icon={<Graph color={colors.appBlack} size="100%" />}
            onClick={this.onRightClick}
            size="10%"
            maxSize="5rem"
            disabled={this.state.leftPercent < 30}
            />
          <a href="https://github.com/danielbank/histogramo">
            <StyledGitHubRibbon
              src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
              alt="Fork me on GitHub"
              />
          </a>
        </StyledHeader>
        <StyledBody>
          <StyledLeftContent
            percentWidth={this.state.leftPercent}
            >
            <Form
              submitRoll={this.submitRoll}
              undoLastSubmit={this.undoLastSubmit}
              undoable={this.state.rolls.length}
              />
          </StyledLeftContent>
          <StyledRightContent
            percentWidth={100 - this.state.leftPercent}
            >
            <Histogram data={this.getRollData()} />
            <ScatterPlot data={this.getSpecialData()} />
          </StyledRightContent>
        </StyledBody>
      </StyledApp>
    );
  }
}

export default App;
