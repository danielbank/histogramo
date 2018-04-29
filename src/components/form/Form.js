import React, { Component } from 'react';
import FillOne from '../icons/FillOne.js';
import FillTwo from '../icons/FillTwo.js';
import FillThree from '../icons/FillThree.js';
import FillFour from '../icons/FillFour.js';
import FillFive from '../icons/FillFive.js';
import FillSix from '../icons/FillSix.js';
import FillRect from '../icons/FillRect.js';

class Form extends Component {
  render() {
    const red = "#C23631";
    const yellow = "#fce655";
    const blue = "#0000FF";
    return (
      <div>
        <FillOne color={red} size="4rem"/>
        <FillTwo color={red} size="4rem"/>
        <FillThree color={red} size="4rem"/>
        <FillFour color={red} size="4rem"/>
        <FillFive color={red} size="4rem"/>
        <FillSix color={red} size="4rem"/>
        <FillOne color={yellow} size="4rem"/>
        <FillTwo color={yellow} size="4rem"/>
        <FillThree color={yellow} size="4rem"/>
        <FillFour color={yellow} size="4rem"/>
        <FillFive color={yellow} size="4rem"/>
        <FillSix color={yellow} size="4rem"/>
        <FillRect color={blue} size="4rem"/>
      </div>
    );
  }
}

export default Form;
