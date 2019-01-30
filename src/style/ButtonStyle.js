import styled from 'styled-components';

export const StyledButton = styled.button`
  appearance: none;
  opacity: 1;
  cursor: pointer;
  display: flex;
  height: ${props => props.size};
  width: ${props => props.size};
  max-height: ${props => props.maxSize}
  max-width: ${props => props.maxSize}
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
