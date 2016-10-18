import {
  turquoise100, turquoise500, turquoise700,
  // blue100, blue500, blue700,
  blue500,
  yellow600,
  teal400, dawn200, dawn400, midnight600, midnight300, dusk200,
  dusk50, dusk100, dusk300, dusk400, dawn300,
  yellow500, red500, green500,dawn500, blue700, blue100,
} from './colors';
import {coursera, strawberry} from './gradients';
import transition from './transition';

function lighten(col, amt) {
  let usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);
  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}


export default {
  lighten,
  spacing: {
    minWidth: 320,
    xs: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  font: {
    xs: '0.8rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xlg: '2.5rem',
  },
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
    disabled: dawn400,
    lightGray: dawn300,
    gray: dusk100,
    darkGray: dusk400,

    warning: yellow500,
    danger: red500,
    success: turquoise500,
    info: blue500,

    white: '#fff',
    white: 'rgba(255,255,255,0.50)',

    icon: midnight600,
    shadow: dawn500,
  },
  gradient: {
    primary: coursera,
    secondary: strawberry,
  },
  transition,
  zIndex: {
    fixedContainer: 100,
  },
  button: {
    minWidth: 72,
    disabledTextColor: dusk200,
    size: {
      xs: {
        fontSize: '0.8rem',
        padding: '0.3rem 0.8rem',
      },
      md: {
        fontSize: '1rem',
        padding: '0.8rem 1.2rem',
      },
      lg: {
        fontSize: '1.2rem',
        padding: '1rem 1.6rem',
      },
    }
  },
};
