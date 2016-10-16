import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgCircleWarning = ({stroke = '#fff', ...props}) => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>solid warning</title>
    <path d="M24,48 C37.254834,48 48,37.254834 48,24 C48,10.745166 37.254834,0 24,0 C10.745166,0 0,10.745166 0,24 C0,37.254834 10.745166,48 24,48 L24,48 Z" />
    <polygon id="Path" fill={stroke} points="22.5 14 25.5 14 25 28 23 28" />
    <circle cx="24" cy="36" r="2" fill={stroke} />
  </SvgIcon>
);

SvgCircleWarning = pure(SvgCircleWarning);
SvgCircleWarning.displayName = 'SvgCircleWarning';

export default SvgCircleWarning;
