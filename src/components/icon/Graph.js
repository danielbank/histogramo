import React, { Component } from 'react';
import Icon from './Icon';

class Graph extends Component {
  render() {
    return (
      <Icon
        {...this.props}
        x="0px"
        y="0px"
        viewBox="0 0 48 50"
        fill="#222"
        >
        <g>
          <path d="M11.2,17H4.8C3.2,17,2,18.3,2,19.9v24.2C2,45.7,3.2,47,4.8,47h6.5c1.6,0,2.8-1.3,2.8-2.9V19.9C14,18.3,12.8,17,11.2,17z" />
          <path d="M43.2,27h-6.5c-1.6,0-2.8,1.3-2.8,2.9v14.3c0,1.6,1.2,2.8,2.8,2.9h6.5c1.6,0,2.8-1.3,2.8-2.9V29.9C46,28.3,44.8,27,43.2,27   z" />
          <path d="M27.2,1h-6.5c-1.6,0.1-2.8,1.4-2.8,3v40c-0.1,1.6,1.2,2.9,2.8,3h6.5c1.6-0.1,2.8-1.4,2.8-3V4C30.1,2.4,28.8,1.1,27.2,1z" />
        </g>
      </Icon>
    );
  }
}

export default Graph;
