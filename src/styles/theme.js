/* eslint-disable no-param-reassign, no-bit-wise */
const {StyleSheet, css} = require('aphrodite/no-important');
const classNames = require('classnames');
const {
  turquoise500, blue500, yellow600,
  yellow500, red500, blue700, blue100,
  dawn200, dawn400, dawn300, dawn500,
  dusk100, dusk400,
  midnight600, midnight300, dusk200,
} = require('./colors');
const {coursera, strawberry} = require('./gradients');
const transition = require('./transition');

function lighten(col, amt) {
  let usePound = false;
  if (col[0] === '#') {
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

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

function cssWithClass(className, cssObject, ...rest) {
  const dynamicClassName = css(cssObject, ...rest);
  return {className: classNames(dynamicClassName, className)};
}

function cssWith(cssObj, ...rest) {
  return {className: css(cssObj, ...rest)};
}

module.exports = {
  StyleSheet,
  css: cssWith,
  cssWithClass,
  lighten,
  spacing: {
    minWidth: 320,
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  font: {
    xs: '0.8rem',
    sm: '0.9rem',
    md: '1rem',
    lg: '1.5rem',
    xlg: '2.5rem',
  },
  color: {
    primary: blue500,
    darkPrimary: blue700,
    lightPrimary: blue100,
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
    whiteHalf: 'rgba(255,255,255,0.50)', // Todo: discuss about opacity
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
      sm: {
        fontSize: '0.8rem',
        padding: '0.3rem 0.8rem',
      },
      md: {
        fontSize: '1rem',
        padding: '0.6rem 1rem',
      },
      lg: {
        fontSize: '1.2rem',
        padding: '1rem 1.6rem',
      },
    },
  },
};
