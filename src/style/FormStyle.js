import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledRow = styled.div`
  display: ${props => props.hidden ? 'none' : 'flex'}
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
