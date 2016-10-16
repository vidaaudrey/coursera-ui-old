import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgDownload = (props) => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>download</title>
    <path d="M42,31v6c0,2.76-2.53,5-5.63,5H11.63C8.53,42,6,39.76,6,37V31H4v6c0,3.86,3.42,7,7.63,7H36.37C40.58,44,44,40.86,44,37V31H42Z" />
    <polygon points="34.71 21.71 33.29 20.29 25 28.59 25 4 23 4 23 28.59 14.71 20.29 13.29 21.71 24 32.41 34.71 21.71" />
  </SvgIcon>
);

SvgDownload = pure(SvgDownload);
SvgDownload.displayName = 'SvgDownload';

export default SvgDownload;
