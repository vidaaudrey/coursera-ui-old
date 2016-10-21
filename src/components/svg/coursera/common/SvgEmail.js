import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgEmail = props => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>email</title>
    <path d="M0,6V33a9,9,0,0,0,9,9H39a9,9,0,0,0,9-9V6H0ZM46,33a7,7,0,0,1-7,7H9a7,7,0,0,1-7-7V8H46V33Z" />
    <polygon points="42.48 13.67 41.14 12.19 24 27.65 6.96 12.21 5.62 13.69 24 30.35 42.48 13.67" />
  </SvgIcon>
);

SvgEmail = pure(SvgEmail);
SvgEmail.displayName = 'SvgEmail';

export default SvgEmail;
