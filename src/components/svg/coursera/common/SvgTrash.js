import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgTrash = props => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>trash</title>
    <path d="M44,6H32.72L31.86,3.42A5,5,0,0,0,27.12,0H20.88a5,5,0,0,0-4.74,3.42L15.28,6H4V8H7L8.62,39.45a9,9,0,0,0,9,8.55H30.39a9,9,0,0,0,9-8.55L41,8h3V6ZM18,4.05A3,3,0,0,1,20.88,2h6.23A3,3,0,0,1,30,4.05L30.61,6H17.39Zm19.34,35.3a7,7,0,0,1-7,6.65H17.61a7,7,0,0,1-7-6.65L9.05,8h29.9Z" />
    <rect x="18" y="14.99" width="2" height="22.02" transform="translate(-1.16 0.89) rotate(-2.6)" />
    <rect x="17.99" y="25" width="22.02" height="2" transform="translate(1.71 53.79) rotate(-87.4)" />
  </SvgIcon>
);

SvgTrash = pure(SvgTrash);
SvgTrash.displayName = 'SvgTrash';

export default SvgTrash;
