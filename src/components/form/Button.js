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
    disabled: PropTypes.bool,
  };

  render() {
    const { icon, onClick, size, maxSize, active, disabled } = this.props;
    return (
      <StyledButton
        type="button"
        size={size}
        maxSize={maxSize}
        active={active}
        disabled={disabled}
        onClick={(e) => onClick ? onClick(e) : null}
        >
        {icon}
      </StyledButton>
    );
  }
}

export default Button;
