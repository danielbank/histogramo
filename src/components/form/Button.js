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

  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
    const ogOnClick = props.onClick || (() => {});
    const onClick = (e) => {
      ogOnClick(e);
      this.buttonRef.current.blur()
    }
    this.onClick = onClick.bind(this);
  }

  render() {
    const { icon, size, maxSize, active, disabled } = this.props;
    return (
      <StyledButton
        type="button"
        ref={this.buttonRef}
        size={size}
        maxSize={maxSize}
        active={active}
        disabled={disabled}
        onClick={this.onClick}
        >
        {icon}
      </StyledButton>
    );
  }
}

export default Button;
