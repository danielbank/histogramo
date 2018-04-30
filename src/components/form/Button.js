import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  opacity: 1;
  cursor: pointer;
  display: flex;
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

class Button extends Component {
  static propTypes = {
    icon: PropTypes.object.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { icon, active, onClick } = this.props;
    return (
      <StyledButton
        active={active}
        type="button"
          onClick={(e) => onClick ? onClick(e) : null}
        >
        {icon}
      </StyledButton>
    );
  }
}

export default Button;
