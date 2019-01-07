import styled from 'styled-components';

export const StyledApp = styled.div`
  text-align: center;
`;

export const StyledHeader = styled.header`
  background-color: #222;
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

export const StyledContent = styled.div`
  width: 50%;
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
  margin-top: 15%;
`;

export const StyledButton = styled.button`
  appearance: none;
  opacity: 1;
  cursor: pointer;
  display: flex;
  min-height ${props => props.size};
  min-width: ${props => props.size};
  height ${props => props.size};
  width: ${props => props.size};
  padding: 0.33rem 0.66rem;
  margin: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.88rem;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  border-radius: 0.3rem;
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
