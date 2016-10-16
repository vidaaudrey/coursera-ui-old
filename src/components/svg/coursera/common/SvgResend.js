import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgResend = (props) => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>resend</title>
    <path d="M33,6L31.59,7.41,40.17,16H17a13,13,0,0,0,0,26H27V40H17a11,11,0,0,1,0-22H40.17l-8.59,8.59L33,28,44,17Z" />
  </SvgIcon>
);

SvgResend = pure(SvgResend);
SvgResend.displayName = 'SvgResend';

export default SvgResend;
