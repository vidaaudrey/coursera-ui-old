/* eslint-disable no-param-reassign, no-bitwise */

const {StyleSheet, css} = require('aphrodite/no-important');
const classNames = require('classnames');
const {
  dawn200,
  dawn400,
  dawn300,
  dawn500,
  dusk100,
  dusk400,
  midnight600,
  midnight300,
  dusk200,
  red300,
  turquoise500,
  blue500,
  dusk50,
  yellow500,
  blue700,
  blue100,
  teal500,
} = require('./colors');
const {coursera, strawberry} = require('./gradients');
const transition = require('./transition');

function cssWithClass(className, cssObj, ...rest) {
  const dynamicClassName = css(cssObj, ...rest);
  return {className: classNames(dynamicClassName, className)};
}

// Easier to write with ...css than always use className as it's not strictly className
function cssWith(cssObj, ...rest) {
  return {className: css(cssObj, ...rest)};
}

module.exports = {
  StyleSheet,
  css: cssWith,
  cssWithClass,
  spacing: {
    minWidth: 360, // Smallest screen we want to support
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
  breakPoints: {
    xxs: 0,
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
  },
  containerMaxWidth: {
    xxs: 0,
    xs: 288,
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
    xxl: 1380,
  },
  color: {
    primary: blue500,
    darkPrimary: blue700,
    lightPrimary: blue100,
    accent: teal500,
    textIcon: dawn200,
    primaryText: midnight600,
    secondaryText: midnight300,
    divider: dusk200,


    // Need further discuss with design
    bgGray: dusk50,
    disabled: dawn400,
    disabledText: dusk200,
    disabledTextThemeDark: dusk200,
    lightGray: dawn300,
    gray: dusk100,
    darkGray: dusk400,

    warning: yellow500,
    danger: red300,
    success: turquoise500,
    info: blue500,
    white: '#fff',
    white50: 'rgba(255,255,255,0.50)', // Todo: discuss about opacity
    black: '#000',
    darkThemeBg: midnight600,
    icon: midnight600,
    shadow: dawn500,
  },
  gradient: {
    primary: coursera,
    secondary: strawberry,
  },
  transition,
  zIndex: {
    none: 0,
    xs: 1000,
    sm: 2000, // FixedContainer
    md: 3000,  // SmartScrollWrapper
    lg: 4000,
    xlg: 10000, // Critical, e.g. modal
  },
};
