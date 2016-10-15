import {
  turquoise100, turquoise500, turquoise700,
  // blue100, blue500, blue700,
  blue500,
  yellow600,
  teal400, dawn200, dawn400, midnight600, midnight300, dusk200,
  dusk50, dusk100, dusk300, dusk400, dawn300,
  yellow500, red500, green500,
} from './colors';
import {coursera, strawberry} from './gradients';

export default {
  color: {
    primary: turquoise500 ,
    darkPrimary: turquoise700,
    lightPrimary: turquoise100,
    // primary: blue500 ,
    // darkPrimary: blue700,
    // lightPrimary: blue100,
    accent: yellow600,
    textIcon: dawn200,
    primaryText: midnight600,
    secondaryText: midnight300,
    divider: dusk200,
    bgGray: dawn400,
    lightGray: dawn300,
    gray: dusk100,
    darkGray: dusk400,

    warning: yellow500,
    danger: red500,
    success: green500,
    info: blue500,
  },
  gradient: {
    primary: coursera,
    secondary: strawberry,
  },
};
