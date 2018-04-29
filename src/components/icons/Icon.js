import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  display: inline-block;
  fill: ${props => props.color || "white"};
  height ${props => props.size};
  width: ${props => props.size};
  user-select: none;
  flex-shrink: 0;
`;

class Icon extends Component {
  static propTypes = {
    viewBox: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  };

  render() {
    const { size, viewBox, color } = this.props;
    return (
      <StyledIcon
        width={size || '1rem'}
        height={size || '1rem'}
        viewBox={viewBox}
        color={color}
        >
        {this.props.children}
      </StyledIcon>
    );
  }
}

export default Icon;
