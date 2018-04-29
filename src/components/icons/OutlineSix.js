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
      		d="M78,17c2.8,0,5,2.2,5,5v56c0,2.8-2.2,5-5,5H22c-2.8,0-5-2.2-5-5V22c0-2.8,2.2-5,5-5H78 M78,12H22c-5.5,0-10,4.5-10,10v56    c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10V22C88,16.5,83.5,12,78,12L78,12z"
      		/>
      	<circle
      		cx="34"
      		cy="34"
      		r="6"
      		/>
      	<circle
      		cx="66"
      		cy="34"
      		r="6"
      		/>
      	<circle
      		cx="66"
      		cy="66"
      		r="6"
      		/>
      	<circle
      		cx="34"
      		cy="66"
      		r="6"
      		/>
      	<circle
      		cx="34"
      		cy="50"
      		r="6"
      		/>
      	<circle
      		cx="66"
      		cy="50"
      		r="6"
      		/>
      </Icon>
    );
  }
}

export default FillOne;
