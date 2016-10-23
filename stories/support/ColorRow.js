/* eslint-disable no-param-reassign, no-use-before-define, max-len */
const React = require('react');
const {
  cssWithClass, StyleSheet, css, color, transition,
} = require('src/styles/theme');

function getNumberFromString(str) {
  return parseInt(str.replace(/^[^0-9]+/, ''), 10);
}

const ColorRow = ({colorName, colorCode}) => {
  return (
    <div
      {...cssWithClass('horizontal-box align-items-spacebetween p-a-1',
        styles.ColorRow,
        getNumberFromString(colorName) > 400 ? styles.fontLight : styles.fontDark

      )}
      style={{backgroundColor: colorCode}}
    >
      <span>{colorName}</span>
      <span className="text-uppercase">{colorCode}</span>
    </div>
  );
};

module.exports = ColorRow;

const styles = StyleSheet.create({
  ColorRow: {
    minWidth: 200,
  },
  fontLight: {
    color: color.white,
  },
  fontDark: {
    color: color.primaryText,
  },
});
