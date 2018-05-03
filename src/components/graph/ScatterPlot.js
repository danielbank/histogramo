import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class ScatterPlot extends Component {
  getOption = (data) => {
    const numGreen = data.reduce((acc, cur) => {
      if (cur.metacolor === 'green') return acc += 1;
      return acc;
    }, 0);
    const numYellow = data.reduce((acc, cur) => {
      if (cur.metacolor === 'yellow') return acc += 1;
      return acc;
    }, 0);
    const numBlue = data.reduce((acc, cur) => {
      if (cur.metacolor === 'blue') return acc += 1;
      return acc;
    }, 0);
    const numBlack = data.reduce((acc, cur) => {
      if (cur.metacolor === 'black') return acc += 1;
      return acc;
    }, 0);
    return {
      title: {
        text: `{green|${numGreen} Green} / {yellow|${numYellow} Yellow} / {blue|${numBlue} Blue} / {black|${numBlack} Black}`,
        textStyle: {
          formatter: [
            '{green|1 Green}',
            '{yellow|1 Yellow}',
            '{blue|1 Blue}',
            '{black|1 Black}',
          ].join('\n'),
          rich: {
            green: {
              color: '#779348',
            },
            yellow: {
              color: '#F6C55E',
            },
            blue: {
              color: '#0072BB',
            },
            black: {
              color: '#ccc',
            },
          },
        },
      },
      tooltip: {
        formatter: (params) => {
          const data = params.data || [0, 0];
          const colorText = data['metacolor'][0].toUpperCase().concat(data['metacolor'].slice(1));
          return `${colorText} ${data['value'][1].toFixed(0)}`;
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        min: 0,
        max: data.length,
        type: 'value',
        axisLine: {onZero: true},
      },
      yAxis: {
        min: 0,
        max: 6,
        type: 'value',
        axisLine: {onZero: true},
      },
      series: [
        {
          id: 'Special',
          type: 'line',
          smooth: false,
          symbolSize: 10,
          data: data,
        },
      ],
    };
  }

  render() {
    const { data } = this.props;
    return (
      <ReactEcharts
        option={this.getOption(data)}
        />
    );
  }
}

export default ScatterPlot;
