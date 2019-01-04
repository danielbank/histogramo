import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button.js';
import FillOne from '../icon/FillOne.js';
import FillTwo from '../icon/FillTwo.js';
import FillThree from '../icon/FillThree.js';
import FillFour from '../icon/FillFour.js';
import FillFive from '../icon/FillFive.js';
import FillSix from '../icon/FillSix.js';
import FillRect from '../icon/FillRect.js';
import Undo from '../icon/Undo.js';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  button {
    flex-basis: 10%;
  }

  @media (max-width: 1024px) {
  button {
    flex-basis: 20%;
  }
`;

const StyledSubmitRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledUndoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15%;
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
  submitRoll = () => {
    this.props.submitRoll(this.state.red, this.state.yellow, this.state.special);
    this.setState(initialState);
  }
  undoLastSubmit = () => {
    const lastData = this.props.undoLastSubmit();
    this.setState(lastData);
  }

  getRed = () => {
    switch (this.state.red) {
      case 1: {
        return (<FillOne color={diceRed} size="33%" />);
      }
      case 2: {
        return (<FillTwo color={diceRed} size="33%" />);
      }
      case 3: {
        return (<FillThree color={diceRed} size="33%" />);
      }
      case 4: {
        return (<FillFour color={diceRed} size="33%" />);
      }
      case 5: {
        return (<FillFive color={diceRed} size="33%" />);
      }
      case 6: {
        return (<FillSix color={diceRed} size="33%" />);
      }
      default: return null;
    }
  }

  getYellow = () => {
    switch (this.state.yellow) {
      case 1: {
        return (<FillOne color={diceYellow} size="33%" />);
      }
      case 2: {
        return (<FillTwo color={diceYellow} size="33%" />);
      }
      case 3: {
        return (<FillThree color={diceYellow} size="33%" />);
      }
      case 4: {
        return (<FillFour color={diceYellow} size="33%" />);
      }
      case 5: {
        return (<FillFive color={diceYellow} size="33%" />);
      }
      case 6: {
        return (<FillSix color={diceYellow} size="33%" />);
      }
      default: return null;
    }
  }

  getSpecial = () => {
    switch (this.state.special) {
      case 'green': {
        return (<FillRect color={scientificGreen} size="33%" />);
      }
      case 'yellow': {
        return (<FillRect color={mercantileYellow} size="33%" />);
      }
      case 'blue': {
        return (<FillRect color={politicalBlue} size="33%" />);
      }
      case 'black': {
        return (<FillRect color={pirateBlack} size="33%" />);
      }
      default: return null;
    }
  }

  render() {
    const { undoable } = this.props;
    const { red, yellow, special } = this.state;
    const submittable = red && yellow && special;
    const redDice = this.getRed();
    const yellowDice = this.getYellow();
    const specialDice = this.getSpecial();

    return (
      <StyledForm>
        <StyledRow>
          <Button
            icon={<FillOne color={diceYellow} size="100%" />}
            onClick={() => this.setYellow(1)}
            active={yellow === 1}
            size="10%"
            />
          <Button
            icon={<FillTwo color={diceYellow} size="100%" />}
            onClick={() => this.setYellow(2)}
            active={yellow === 2}
            size="10%"
            />
          <Button
            icon={<FillThree color={diceYellow} size="100%" />}
            onClick={() => this.setYellow(3)}
            active={yellow === 3}
            size="10%"
            />
          <Button
            icon={<FillFour color={diceYellow} size="100%" />}
            onClick={() => this.setYellow(4)}
            active={yellow === 4}
            size="10%"
            />
          <Button
            icon={<FillFive color={diceYellow} size="100%" />}
            onClick={() => this.setYellow(5)}
            active={yellow === 5}
            size="10%"
            />
          <Button
            icon={<FillSix color={diceYellow} size="100%" />}
            onClick={() => this.setYellow(6)}
            active={yellow === 6}
            size="10%"
            />
        </StyledRow>
        <StyledRow>
          <Button
            icon={<FillOne color={diceRed} size="100%" />}
            onClick={() => this.setRed(1)}
            active={red === 1}
            size="10%"
            />
          <Button
            icon={<FillTwo color={diceRed} size="100%" />}
            onClick={() => this.setRed(2)}
            active={red === 2}
            size="10%"
            />
          <Button
            icon={<FillThree color={diceRed} size="100%" />}
            onClick={() => this.setRed(3)}
            active={red === 3}
            size="10%"
            />
          <Button
            icon={<FillFour color={diceRed} size="100%" />}
            onClick={() => this.setRed(4)}
            active={red === 4}
            size="10%"
            />
          <Button
            icon={<FillFive color={diceRed} size="100%" />}
            onClick={() => this.setRed(5)}
            active={red === 5}
            size="10%"
            />
          <Button
            icon={<FillSix color={diceRed} size="100%" />}
            onClick={() => this.setRed(6)}
            active={red === 6}
            size="10%"
            />
        </StyledRow>
        <StyledRow>
          <Button
            icon={<FillRect color={scientificGreen} size="100%" />}
            onClick={() => this.setSpecial('green')}
            active={special === 'green'}
            size="10%"
            />
          <Button
            icon={<FillRect color={mercantileYellow} size="100%" />}
            onClick={() => this.setSpecial('yellow')}
            active={special === 'yellow'}
            size="10%"
            />
          <Button
            icon={<FillRect color={politicalBlue} size="100%" />}
            onClick={() => this.setSpecial('blue')}
            active={special === 'blue'}
            size="10%"
            />
          <Button
            icon={<FillRect color={pirateBlack} size="100%" />}
            onClick={() => this.setSpecial('black')}
            active={special === 'black'}
            size="10%"
            />
        </StyledRow>
        {submittable &&
          <StyledSubmitRow>
            <Button
              icon={(
                <div>
                  {redDice}
                  {yellowDice}
                  {specialDice}
                </div>
              )}
              size="40%"
              onClick={() => this.submitRoll()}
              />
          </StyledSubmitRow>
        }
        {undoable ?
          <StyledUndoRow>
            <Button
              icon={<Undo color={pirateBlack} size="100%"/>}
              size="10%"
              onClick={() => this.undoLastSubmit()}
              />
            </StyledUndoRow>
            : null
        }
      </StyledForm>
    );
  }
}

export default Form;
