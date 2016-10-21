import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgPlus = props => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>plus</title>
    <polygon points="42 23 25 23 25 6 23 6 23 23 6 23 6 25 23 25 23 42 25 42 25 25 42 25 42 23" />
  </SvgIcon>
);

SvgPlus = pure(SvgPlus);
SvgPlus.displayName = 'SvgPlus';

export default SvgPlus;
