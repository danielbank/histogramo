import styled from 'styled-components';

export const colors = {
  appBlack: '#222',
  diceRed: '#C23631',
  diceYellow: '#fce655',
  scientificGreen: '#779348',
  mercantileYellow: '#F6C55E',
  politicalBlue: '#0072BB',
  pirateBlack: '#222',
  beaurocraticGrey: '#ccc'
}

export const StyledApp = styled.div`
  text-align: center;
`;

export const StyledHeader = styled.header`
  background-color: ${colors.appBlack};
  color: white;
`;

export const StyledTitle = styled.h1`
  font-size: 1.5em;
`;

export const StyledGitHubRibbon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
`;

export const StyledBody = styled.div`
  padding-left: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const StyledLeftContent = styled.div`
  width: 60%;
`;

export const StyledRightContent = styled.div`
  width: 40%;
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledRow = styled.div`
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

export const StyledSubmitRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledUndoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledButton = styled.button`
  appearance: none;
  opacity: 1;
  cursor: pointer;
  display: flex;
  height: ${props => props.size};
  width: ${props => props.size};
  margin: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.88rem;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  border-radius: 8px;
  border: 3px solid ${props => props.active ? '#C23631' : '#222'};
  background-color: ${props => props.active ? '#C09AA1' : '#fcfcfc'};
  color: #222;

  &:hover {
    opacity: 0.70;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:active {
    border: 3px solid #ccc;
    background-color: #444;
  }
`;
