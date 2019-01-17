import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../../style';

class Button extends Component {
  static propTypes = {
    icon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.string.isRequired,
    maxSize: PropTypes.string,
    active: PropTypes.bool,
  };

  render() {
    const { icon, onClick, size, maxSize, active } = this.props;
    return (
      <StyledButton
        type="button"
        size={size}
        maxSize={maxSize}
        active={active}
          onClick={(e) => onClick ? onClick(e) : null}
        >
        {icon}
      </StyledButton>
    );
  }
}

export default Button;
