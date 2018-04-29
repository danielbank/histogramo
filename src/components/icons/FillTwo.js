import React, { Component } from 'react';
import Icon from './Icon';

class FillOne extends Component {
  render() {
    return (
      <Icon
        {...this.props}
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        fill="#222"
        >
        <path
      		d="M78,12H22c-5.5,0-10,4.5-10,10v56c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12z M34,72   c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S37.3,72,34,72z M66,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S69.3,40,66,40z"
      		/>
      </Icon>
    );
  }
}

export default FillOne;
