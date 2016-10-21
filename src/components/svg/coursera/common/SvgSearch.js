import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgSearch = props => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>search</title>
    <path d="M48,46.59L29.65,28.23a17,17,0,1,0-1.41,1.41L46.59,48ZM1.94,17A15,15,0,1,1,17,32,15.06,15.06,0,0,1,1.94,17Z" />
  </SvgIcon>
);

SvgSearch = pure(SvgSearch);
SvgSearch.displayName = 'SvgSearch';

export default SvgSearch;
