import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button.js';
import FillOne from '../icons/FillOne.js';
import FillTwo from '../icons/FillTwo.js';
import FillThree from '../icons/FillThree.js';
import FillFour from '../icons/FillFour.js';
import FillFive from '../icons/FillFive.js';
import FillSix from '../icons/FillSix.js';
import FillRect from '../icons/FillRect.js';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const initialState = {
  red: null,
  yellow: null,
  special: null,
};

const diceRed = '#C23631';
const diceYellow = '#fce655';
const scientificGreen = '#779348';
const mercantileYellow = '#F6C55E';
const politicalBlue = '#0072BB';
const pirateBlack = '#222';

class Form extends Component {
  state = initialState;

  setRed = value => this.setState({ red: parseInt(value, 10) });
  setYellow = value => this.setState({ yellow: parseInt(value, 10) });
  setSpecial = value => this.setState({ special: value });

  getRed = () => {
    switch (this.state.red) {
      case 1: {
        return (<FillOne color={diceRed} size="4rem"/>);
      }
      case 2: {
        return (<FillTwo color={diceRed} size="4rem"/>);
      }
      case 3: {
        return (<FillThree color={diceRed} size="4rem"/>);
      }
      case 4: {
        return (<FillFour color={diceRed} size="4rem"/>);
      }
      case 5: {
        return (<FillFive color={diceRed} size="4rem"/>);
      }
      case 6: {
        return (<FillSix color={diceRed} size="4rem"/>);
      }
      default: return null;
    }
  }

  getYellow = () => {
    switch (this.state.yellow) {
      case 1: {
        return (<FillOne color={diceYellow} size="4rem"/>);
      }
      case 2: {
        return (<FillTwo color={diceYellow} size="4rem"/>);
      }
      case 3: {
        return (<FillThree color={diceYellow} size="4rem"/>);
      }
      case 4: {
        return (<FillFour color={diceYellow} size="4rem"/>);
      }
      case 5: {
        return (<FillFive color={diceYellow} size="4rem"/>);
      }
      case 6: {
        return (<FillSix color={diceYellow} size="4rem"/>);
      }
      default: return null;
    }
  }

  getSpecial = () => {
    switch (this.state.special) {
      case 'green': {
        return (<FillRect color={scientificGreen} size="4rem"/>);
      }
      case 'yellow': {
        return (<FillRect color={mercantileYellow} size="4rem"/>);
      }
      case 'blue': {
        return (<FillRect color={politicalBlue} size="4rem"/>);
      }
      case 'black': {
        return (<FillRect color={pirateBlack} size="4rem"/>);
      }
      default: return null;
    }
  }

  render() {
    const { red, yellow, special } = this.state;
    const submittable = red && yellow && special;
    const redDice = this.getRed();
    const yellowDice = this.getYellow();
    const specialDice = this.getSpecial();

    return (
      <StyledForm>
        <StyledRow>
          <Button
            icon={<FillOne color={diceRed} size="4rem"/>}
            onClick={() => this.setRed(1)}
            active={red === 1}
            />
          <Button
            icon={<FillTwo color={diceRed} size="4rem"/>}
            onClick={() => this.setRed(2)}
            active={red === 2}
            />
          <Button
            icon={<FillThree color={diceRed} size="4rem"/>}
            onClick={() => this.setRed(3)}
            active={red === 3}
            />
          <Button
            icon={<FillFour color={diceRed} size="4rem"/>}
            onClick={() => this.setRed(4)}
            active={red === 4}
            />
          <Button
            icon={<FillFive color={diceRed} size="4rem"/>}
            onClick={() => this.setRed(5)}
            active={red === 5}
            />
          <Button
            icon={<FillSix color={diceRed} size="4rem"/>}
            onClick={() => this.setRed(6)}
            active={red === 6}
            />
        </StyledRow>
        <StyledRow>
          <Button
            icon={<FillOne color={diceYellow} size="4rem"/>}
            onClick={() => this.setYellow(1)}
            active={yellow === 1}
            />
          <Button
            icon={<FillTwo color={diceYellow} size="4rem"/>}
            onClick={() => this.setYellow(2)}
            active={yellow === 2}
            />
          <Button
            icon={<FillThree color={diceYellow} size="4rem"/>}
            onClick={() => this.setYellow(3)}
            active={yellow === 3}
            />
          <Button
            icon={<FillFour color={diceYellow} size="4rem"/>}
            onClick={() => this.setYellow(4)}
            active={yellow === 4}
            />
          <Button
            icon={<FillFive color={diceYellow} size="4rem"/>}
            onClick={() => this.setYellow(5)}
            active={yellow === 5}
            />
          <Button
            icon={<FillSix color={diceYellow} size="4rem"/>}
            onClick={() => this.setYellow(6)}
            active={yellow === 6}
            />
        </StyledRow>
        <StyledRow>
          <Button
            icon={<FillRect color={scientificGreen} size="4rem"/>}
            onClick={() => this.setSpecial('green')}
            active={special === 'green'}
            />
          <Button
            icon={<FillRect color={mercantileYellow} size="4rem"/>}
            onClick={() => this.setSpecial('yellow')}
            active={special === 'yellow'}
            />
          <Button
            icon={<FillRect color={politicalBlue} size="4rem"/>}
            onClick={() => this.setSpecial('blue')}
            active={special === 'blue'}
            />
          <Button
            icon={<FillRect color={pirateBlack} size="4rem"/>}
            onClick={() => this.setSpecial('black')}
            active={special === 'black'}
            />
        </StyledRow>
        {red && yellow && special &&
          <StyledRow>
          <Button
            icon={(
              <div>
                {redDice}
                {yellowDice}
                {specialDice}
              </div>
            )}
            onClick={() => console.log(this.state)}
            />

          </StyledRow>
        }
      </StyledForm>
    );
  }
}

export default Form;
