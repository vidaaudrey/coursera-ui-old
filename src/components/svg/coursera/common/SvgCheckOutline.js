import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgCheckOutline = props => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>check outline</title>
    <path d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm0,46A22,22,0,1,1,46,24,22,22,0,0,1,24,46Z" />
    <polygon points="23.18 31.08 14.83 22.73 13.42 24.14 23.61 34.33 34.99 14.63 33.26 13.63 23.18 31.08" />
  </SvgIcon>
);

SvgCheckOutline = pure(SvgCheckOutline);
SvgCheckOutline.displayName = 'SvgCheckOutline';

export default SvgCheckOutline;
