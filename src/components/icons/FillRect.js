import React, { Component } from 'react';
import Icon from './Icon';

class Rect extends Component {
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
      		d="M78,12H22c-5.5,0-10,4.5-10,10v56c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12z M34,72"
      		/>
      </Icon>
    );
  }
}

export default Rect;
