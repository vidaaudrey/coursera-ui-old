import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SvgCurriculum = props => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <title>curriculum</title>
    <path d="M37,6V0H5V42h6v6H30A13,13,0,0,0,43,35V6H37ZM7,40V2H35V6H11V40H7Zm34-5A11,11,0,0,1,30,46H13V8H41V35Z" />
    <rect x="20" y="18" width="14" height="2" />
    <rect x="20" y="26" width="14" height="2" />
    <rect x="20" y="34" width="10" height="2" />
  </SvgIcon>
);

SvgCurriculum = pure(SvgCurriculum);
SvgCurriculum.displayName = 'SvgCurriculum';

export default SvgCurriculum;
