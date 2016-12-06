import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgTips = props =>
  <SvgIcon {...props}>
    <title>Tips</title>
    <path d="M20,14.25 L17.2914286,11.625 L12.3809524,11.625 L12.3809524,10.125 L16.952381,10.125 L16.952381,4.875 L12.3809524,4.875 L12.3809524,3 L11.6190476,3 L11.6190476,4.875 L6.70857143,4.875 L4,7.5 L6.70857143,10.125 L11.6190476,10.125 L11.6190476,11.625 L7.04761905,11.625 L7.04761905,16.875 L11.6190476,16.875 L11.6190476,21 L12.3809524,21 L12.3809524,16.875 L17.2914286,16.875 L20,14.25 Z M5.12380952,7.5 L7.00571429,5.625 L16.1904762,5.625 L16.1904762,9.375 L7.00571429,9.375 L5.12380952,7.5 Z M7.80952381,16.125 L7.80952381,12.375 L16.9942857,12.375 L18.8761905,14.25 L16.9942857,16.125 L7.80952381,16.125 Z" />
  </SvgIcon>
;

SvgTips.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  fill: React.PropTypes.string,
};

SvgTips = pure(SvgTips);
SvgTips.displayName = 'SvgTips';

module.exports = SvgTips;
