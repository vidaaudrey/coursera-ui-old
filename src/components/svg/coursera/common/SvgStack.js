import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgStack = props => (
  <SvgIcon {...props} viewBox="0 0 52 48">
    <title>stack</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinejoin="round">
      <g id="ic_stack_black_48px" transform="translate(0.000000, 1.000000)" stroke="#8C8C8C">
        <polygon fill="#FFFFFF" points="23.0055991 41.6573348 0.0940649496 26.8756999 23.0055991 12.0940649 45.9171333 26.8756999" />
        <polygon fill="#FFFFFF" points="23.0055991 35.7446809 0.0940649496 20.9630459 23.0055991 6.18141097 45.9171333 20.9630459" />
        <polygon fill="#DDDDDD" points="0.0940649496 15.0503919 23.0055991 0.268756999 45.9171333 15.0503919 23.0055991 29.8320269" />
      </g>
    </g>
  </SvgIcon>
);

SvgStack = pure(SvgStack);
SvgStack.displayName = 'SvgStack';

export default SvgStack;
