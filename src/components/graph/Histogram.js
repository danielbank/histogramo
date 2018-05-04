import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Histogram extends Component {
  getOption = data => ({
    tooltip: {
      formatter: (params) => params.data,
    },
    xAxis: {
      data: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    },
    yAxis: {},
    series: [{
      name: 'DiceRolls',
      type: 'bar',
      data: data
    }]
  });

  render() {
    const { data } = this.props;
    return (
      <ReactEcharts
        option={this.getOption(data)}
        />
    );
  }
}

export default Histogram;
