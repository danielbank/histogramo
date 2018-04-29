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

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class Form extends Component {
  render() {
    const red = '#C23631';
    const yellow = '#fce655';
    const scientificGreen = '#779348';
    const mercantileYellow = '#F6C55E';
    const politicalBlue = '#0072BB';
    const pirateBlack = '#222';

    return (
      <StyledForm>
        <StyledButtonGroup>
          <Button
            icon={<FillOne color={red} size="4rem"/>}
            active
            />
          <Button
            icon={<FillTwo color={red} size="4rem"/>}
            />
          <Button
            icon={<FillThree color={red} size="4rem"/>}
            />
          <Button
            icon={<FillFour color={red} size="4rem"/>}
            />
          <Button
            icon={<FillFive color={red} size="4rem"/>}
            />
          <Button
            icon={<FillSix color={red} size="4rem"/>}
            />
        </StyledButtonGroup>
        <StyledButtonGroup>
          <Button
            icon={<FillOne color={yellow} size="4rem"/>}
            />
          <Button
            icon={<FillTwo color={yellow} size="4rem"/>}
            />
          <Button
            icon={<FillThree color={yellow} size="4rem"/>}
            />
          <Button
            icon={<FillFour color={yellow} size="4rem"/>}
            active
            />
          <Button
            icon={<FillFive color={yellow} size="4rem"/>}
            />
          <Button
            icon={<FillSix color={yellow} size="4rem"/>}
            />
        </StyledButtonGroup>
        <StyledButtonGroup>
          <Button
            icon={<FillRect color={scientificGreen} size="4rem"/>}
            />
          <Button
            icon={<FillRect color={mercantileYellow} size="4rem"/>}
            />
            <Button
              icon={<FillRect color={politicalBlue} size="4rem"/>}
              />
            <Button
              icon={<FillRect color={pirateBlack} size="4rem"/>}
              active
              />
        </StyledButtonGroup>
      </StyledForm>
    );
  }
}

export default Form;
