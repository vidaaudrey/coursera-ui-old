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
  midnight200,
  dusk200,
  red300,
  turquoise500,
  blue500,
  dusk50,
  yellow500,
  blue700,
  blue100,
  teal500,
  midnight900,
  midnight500,
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
  iconSize: {
    xs: 16,
    sm: 24,
    md: 32,
    lg: 48,
    xlg: 64,
    xxl: 128,
  },
  font: {
    xs: '0.8rem',
    sm: '0.9rem',
    md: '1rem',
    lg: '1.5rem',
    xlg: '2.5rem',
    xxl: '4rem',
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
    sm: 544,
    md: 736,
    lg: 960,
    xl: 1168,
    xxl: 1408,
  },
  color: {
    primary: blue500,
    darkPrimary: blue700,
    lightPrimary: blue100,
    accent: teal500,
    primaryText: midnight600,
    secondaryText: midnight200,

    divider: dusk200,
    icon: midnight600,
    shadow: dawn500,
    textIcon: dawn200,

    disabled: dawn400, // background
    disabledText: dusk200,

    bgGray: dusk50,
    lightGray: dawn300,
    gray: dusk100,
    darkGray: dusk400,
    white: dawn200,
    white50: 'rgba(255,255,255,0.50)', // Todo: discuss about opacity
    black: midnight900,

    warning: yellow500,
    danger: red300,
    success: turquoise500,
    info: blue500,

    // Dark Theme
    primaryTextThemeDark: dawn200,
    secondaryTextThemeDark: dawn400,
    disabledThemeDark: dawn400, // background
    disabledTextThemeDark: dusk200,
    iconThemeDark: dusk100,
    bgGrayThemeDark: midnight600,
    dividerThemeDark: midnight500,
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
