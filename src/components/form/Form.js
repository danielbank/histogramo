import React, { Component } from 'react';
import Button from './Button.js';
import FillOne from '../icon/FillOne.js';
import FillTwo from '../icon/FillTwo.js';
import FillThree from '../icon/FillThree.js';
import FillFour from '../icon/FillFour.js';
import FillFive from '../icon/FillFive.js';
import FillSix from '../icon/FillSix.js';
import FillRect from '../icon/FillRect.js';
import Undo from '../icon/Undo.js';
import {
  colors,
  StyledForm,
  StyledRow,
  StyledSubmitRow,
  StyledUndoRow,
} from '../../style';

const initialState = {
  red: null,
  yellow: null,
  special: null,
};

class Form extends Component {
  state = initialState;

  setRed = value => this.setState({ red: parseInt(value, 10) });

  setYellow = value => this.setState({ yellow: parseInt(value, 10) });

  setSpecial = value => this.setState({ special: value });

  submitRoll = () => {
    const specialValue = this.props.hasSpecials ? this.state.special : 'black';
    this.props.submitRoll(this.state.red, this.state.yellow, specialValue);
    this.setState(initialState);
  }

  undoLastSubmit = () => {
    const lastData = this.props.undoLastSubmit();
    this.setState(lastData);
  }

  getDie = (color) => {
    const dieColor = color === 'red' ? colors.diceRed : colors.diceYellow;
    switch (this.state[color]) {
      case 1: {
        return (<FillOne color={dieColor} size="33%" />);
      }
      case 2: {
        return (<FillTwo color={dieColor} size="33%" />);
      }
      case 3: {
        return (<FillThree color={dieColor} size="33%" />);
      }
      case 4: {
        return (<FillFour color={dieColor} size="33%" />);
      }
      case 5: {
        return (<FillFive color={dieColor} size="33%" />);
      }
      case 6: {
        return (<FillSix color={dieColor} size="33%" />);
      }
      default: return null;
    }
  }

  getSpecial = () => {
    if (!this.props.hasSpecials) return null;
    switch (this.state.special) {
      case 'green': {
        return (<FillRect color={colors.scientificGreen} size="33%" />);
      }
      case 'yellow': {
        return (<FillRect color={colors.mercantileYellow} size="33%" />);
      }
      case 'blue': {
        return (<FillRect color={colors.politicalBlue} size="33%" />);
      }
      case 'black': {
        return (<FillRect color={colors.pirateBlack} size="33%" />);
      }
      default: return null;
    }
  }

  render() {
    const { undoable, hasSpecials } = this.props;
    const { red, yellow, special } = this.state;
    const submittable = red && yellow && (!hasSpecials || special);
    const redDice = this.getDie('red');
    const yellowDice = this.getDie('yellow');
    const specialDice = this.getSpecial();

    return (
      <StyledForm>
        <StyledRow>
          <Button
            icon={<FillOne color={colors.diceYellow} size="100%" />}
            onClick={() => this.setYellow(1)}
            active={yellow === 1}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillTwo color={colors.diceYellow} size="100%" />}
            onClick={() => this.setYellow(2)}
            active={yellow === 2}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillThree color={colors.diceYellow} size="100%" />}
            onClick={() => this.setYellow(3)}
            active={yellow === 3}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillFour color={colors.diceYellow} size="100%" />}
            onClick={() => this.setYellow(4)}
            active={yellow === 4}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillFive color={colors.diceYellow} size="100%" />}
            onClick={() => this.setYellow(5)}
            active={yellow === 5}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillSix color={colors.diceYellow} size="100%" />}
            onClick={() => this.setYellow(6)}
            active={yellow === 6}
            size="10%"
            maxSize="5rem"
            />
        </StyledRow>
        <StyledRow>
          <Button
            icon={<FillOne color={colors.diceRed} size="100%" />}
            onClick={() => this.setRed(1)}
            active={red === 1}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillTwo color={colors.diceRed} size="100%" />}
            onClick={() => this.setRed(2)}
            active={red === 2}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillThree color={colors.diceRed} size="100%" />}
            onClick={() => this.setRed(3)}
            active={red === 3}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillFour color={colors.diceRed} size="100%" />}
            onClick={() => this.setRed(4)}
            active={red === 4}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillFive color={colors.diceRed} size="100%" />}
            onClick={() => this.setRed(5)}
            active={red === 5}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillSix color={colors.diceRed} size="100%" />}
            onClick={() => this.setRed(6)}
            active={red === 6}
            size="10%"
            maxSize="5rem"
            />
        </StyledRow>
        <StyledRow hidden={!hasSpecials}>
          <Button
            icon={<FillRect color={colors.scientificGreen} size="100%" />}
            onClick={() => this.setSpecial('green')}
            active={special === 'green'}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillRect color={colors.mercantileYellow} size="100%" />}
            onClick={() => this.setSpecial('yellow')}
            active={special === 'yellow'}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillRect color={colors.politicalBlue} size="100%" />}
            onClick={() => this.setSpecial('blue')}
            active={special === 'blue'}
            size="10%"
            maxSize="5rem"
            />
          <Button
            icon={<FillRect color={colors.pirateBlack} size="100%" />}
            onClick={() => this.setSpecial('black')}
            active={special === 'black'}
            size="10%"
            maxSize="5rem"
            />
        </StyledRow>
        {submittable &&
          <StyledSubmitRow>
            <Button
              icon={(
                <div>
                  {yellowDice}
                  {redDice}
                  {specialDice}
                </div>
              )}
              size="50%"
              onClick={() => this.submitRoll()}
              />
          </StyledSubmitRow>
        }
        {undoable ?
          <StyledUndoRow>
            <Button
              icon={<Undo color={colors.pirateBlack} size="100%"/>}
              size="25%"
              maxSize="5rem"
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
