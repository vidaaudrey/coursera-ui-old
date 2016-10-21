import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgHamburger = props => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>hamburger menu</title>
    <rect x="5" y="9" width="38" height="2" />
    <rect x="5" y="23" width="38" height="2" />
    <rect x="5" y="37" width="38" height="2" />
  </SvgIcon>
);

SvgHamburger = pure(SvgHamburger);
SvgHamburger.displayName = 'SvgHamburger';

export default SvgHamburger;
