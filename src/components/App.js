import React, { Component } from 'react';
import { clamp } from 'lodash';
import Form from './form/Form.js';
import Histogram from './graph/Histogram.js';
import ScatterPlot from './graph/ScatterPlot.js';
import Button from './form/Button.js';
import Graph from './icon/Graph.js';
import FillSix from './icon/FillSix.js';
import Town from './icon/Town.js';
import City from './icon/City.js';
import {
  colors,
  StyledApp,
  StyledHeader,
  StyledBody,
  StyledLeftContent,
  StyledRightContent,
  StyledFooter,
  StyledLink
} from '../style';

class App extends Component {
  state = {
    leftPercent: 50,
    rolls: [],
    reds: [],
    specials: [],
    regularCatan: false
  };

  expandLeftPanel = () => this.setState({leftPercent: clamp(this.state.leftPercent + 10, 80)});

  expandRightPanel = () => this.setState({leftPercent: clamp(this.state.leftPercent - 10, 20, 80)});

  toggleRegularCatan = () => this.setState({ regularCatan: !this.state.regularCatan })

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
    const catanIcon = this.state.regularCatan ?
      <City color={colors.appBlack} size="100%" /> :
      <Town color={colors.appBlack} size="100%" />;
    return (
      <StyledApp>
        <StyledHeader>
          <Button
            icon={<FillSix color={colors.appBlack} size="100%" />}
            onClick={this.expandLeftPanel}
            size="10%"
            maxSize="5rem"
            disabled={this.state.leftPercent > 70}
            />
          <Button
            icon={<Graph color={colors.appBlack} size="100%" />}
            onClick={this.expandRightPanel}
            size="10%"
            maxSize="5rem"
            disabled={this.state.leftPercent < 30}
            />
          <Button
            icon={catanIcon}
            onClick={this.toggleRegularCatan}
            size="10%"
            maxSize="5rem"
            />
        </StyledHeader>
        <StyledBody>
          <StyledLeftContent
            percentWidth={this.state.leftPercent}
            >
            <Form
              submitRoll={this.submitRoll}
              undoLastSubmit={this.undoLastSubmit}
              undoable={this.state.rolls.length}
              hasSpecials={!this.state.regularCatan}
              />
          </StyledLeftContent>
          <StyledRightContent
            percentWidth={100 - this.state.leftPercent}
            >
            <Histogram data={this.getRollData()} />
            <ScatterPlot
              data={this.getSpecialData()}
              isShown={!this.state.regularCatan} />
          </StyledRightContent>
        </StyledBody>
        <StyledFooter>
          <StyledLink href="https://github.com/danielbank/histogramo">Code by Daniel Bank</StyledLink>
          <StyledLink href="https://thenounproject.com/shalfdesign/collection/seo-internet-marketing">Dice Logo by Arafat Uddin</StyledLink>
          <StyledLink href="https://thenounproject.com/danielaeapaim/collection/gambling">Gambling Icons by Daniela Paim</StyledLink>
          <StyledLink href="https://thenounproject.com/rshashank19/collection/direction">Arrow Icons by Shashank Singh</StyledLink>
          <StyledLink href="https://thenounproject.com/smashicons/collection/smashicons-medieval-md-solid">Castle Icons by Ben Davis</StyledLink>
          <StyledLink href="https://thenounproject.com/xicons.co/collection/essential-solid-icons">Graph Icon by Xicons.co</StyledLink>
        </StyledFooter>
      </StyledApp>
    );
  }
}

export default App;
