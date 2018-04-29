import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Histogram extends Component {
  getOption = () => ({
    tooltip: {},
    xAxis: {
      data: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    },
    yAxis: {},
    series: [{
      name: 'DiceRolls',
      type: 'bar',
      data: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
    }]
  });

  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        />
    );
  }
}

export default Histogram;
