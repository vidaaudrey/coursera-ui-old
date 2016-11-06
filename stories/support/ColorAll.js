import React, {PropTypes} from 'react';
const _ = require('underscore');
import ColorTable from './ColorTable';

import {
  red50, red100, red200, red300, red400, red500, red600, red700, red800, red900,
  corral50, corral100, corral200, corral300, corral400, corral500, corral600, corral700, corral800, corral900,
  purple50, purple100, purple200, purple300, purple400, purple500, purple600, purple700, purple800, purple900,
  pink50, pink100, pink200, pink300, pink400, pink500, pink600, pink700, pink800, pink900,
  blue50, blue100, blue200, blue300, blue400, blue500, blue600, blue700, blue800, blue900,
  teal50, teal100, teal200, teal300, teal400, teal500, teal600, teal700, teal800, teal900,
  turquoise50, turquoise100, turquoise200, turquoise300, turquoise400, turquoise500, turquoise600, turquoise700, turquoise800, turquoise900,
  green50, green100, green200, green300, green400, green500, green600, green700, green800, green900,
  yellow50, yellow100, yellow200, yellow300, yellow400, yellow500, yellow600, yellow700, yellow800, yellow900,
  midnight50, midnight100, midnight200, midnight300, midnight400, midnight500, midnight600, midnight700, midnight800, midnight900,
  dusk50, dusk100, dusk200, dusk300, dusk400, dusk500, dusk600, dusk700, dusk800, dusk900,
  dawn200, dawn300, dawn400, dawn500, dawn600, dawn700, dawn800, dawn900,
} from 'src/styles/colors';


const red = {red50, red100, red200, red300, red400, red500, red600, red700, red800, red900,};
const corral = {corral50, corral100, corral200, corral300, corral400, corral500, corral600, corral700, corral800, corral900,};
const purple = {purple50, purple100, purple200, purple300, purple400, purple500, purple600, purple700, purple800, purple900,};
const pink = {pink50, pink100, pink200, pink300, pink400, pink500, pink600, pink700, pink800, pink900,};
const blue = {blue50, blue100, blue200, blue300, blue400, blue500, blue600, blue700, blue800, blue900,};
const teal = {teal50, teal100, teal200, teal300, teal400, teal500, teal600, teal700, teal800, teal900,};
const turquoise = {turquoise50, turquoise100, turquoise200, turquoise300, turquoise400, turquoise500, turquoise600, turquoise700, turquoise800, turquoise900,};
const green = {green50, green100, green200, green300, green400, green500, green600, green700, green800, green900,};
const yellow = {yellow50, yellow100, yellow200, yellow300, yellow400, yellow500, yellow600, yellow700, yellow800, yellow900,};
const midnight = {midnight50, midnight100, midnight200, midnight300, midnight400, midnight500, midnight600, midnight700, midnight800, midnight900,};
const dusk = {dusk50, dusk100, dusk200, dusk300, dusk400, dusk500, dusk600, dusk700, dusk800, dusk900,};
const dawn = {dawn200, dawn300, dawn400, dawn500, dawn600, dawn700, dawn800, dawn900,};

const colorTableData = {red, corral, purple, pink, blue, teal, turquoise, green, yellow, midnight, dusk, dawn};


const ColorAll = () => {
  return (
    <div className="horizontal-box wrap">
      {_(colorTableData).map((colors, key) => (
        <ColorTable name={key} colors={colors} key={`ColorTable~${key}`} />
      ))}
    </div>
  );
};

module.exports = ColorAll;
