import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgLineChart = (props) => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>line chart</title>
    <polygon points="19.15 19.93 31.18 29.95 46.81 8.59 45.19 7.41 30.82 27.05 18.85 17.07 7.21 31.88 8.79 33.12 19.15 19.93" />
    <polygon points="2 42 2 4 0 4 0 44 48 44 48 42 2 42" />
  </SvgIcon>
);

SvgLineChart = pure(SvgLineChart);
SvgLineChart.displayName = 'SvgLineChart';

export default SvgLineChart;
