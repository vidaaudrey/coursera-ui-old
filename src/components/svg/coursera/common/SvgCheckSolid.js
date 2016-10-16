import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgCheckSolid = ({stroke = '#fff', ...props}) => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>check solid</title>
    <circle fill={props.fill} cx="24" cy="24" r="24" />
    <polygon fill={stroke} points="14.41 23.1 13 24.51 23.19 34.7 34.57 15 32.84 14 22.76 31.45" />
  </SvgIcon>
);

SvgCheckSolid = pure(SvgCheckSolid);
SvgCheckSolid.displayName = 'SvgCheckSolid';

export default SvgCheckSolid;
