import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Histogram extends Component {
  getOption = (data, xAxis) => ({
    tooltip: {},
    xAxis: {
      data: xAxis
    },
    yAxis: {},
    series: [{
      name: 'DiceRolls',
      type: 'bar',
      data: data
    }]
  });

  render() {
    const { data, xAxis } = this.props;
    return (
      <ReactEcharts
        option={this.getOption(data, xAxis)}
        />
    );
  }
}

export default Histogram;
