/* eslint-disable no-use-before-define */
import React, {PropTypes, Component} from 'react';
import {css, cssWithClass, StyleSheet, color, spacing, transition, font} from 'src/styles/theme';
import {SvgCheckOutline, SvgCheckSolid} from 'src/components/svg/coursera';

const CONFIG = {
  defaultHeight: 36,
  heightToIconRatio: 0.6,
};

const Chip = ({
  fontSize = 'md',
  height = CONFIG.defaultHeight,
  htmlAttributes = {},
  isSelected,
  isThemeDark,
  label,
  onClick,
  style = {},
}) => {
  const dynamicStyles = getStyles({ height, fontSize, isSelected, isThemeDark });
  const mergedStyles = {...dynamicStyles.Chip, ...style};

  // Generate string such as 'NotSelected', 'NotSelectedThemeDark'...
  const styleNamePartials = `${isSelected ? 'Selected' : 'NotSelected'}${isThemeDark ? 'ThemeDark' : ''}`;

  return (
    <button
      {...htmlAttributes}
      {...css(
        styles.Chip,
        styles[`chip${styleNamePartials}`],
        isThemeDark ? styles.borderLine : styles.boxShadow,
      )}
      style={mergedStyles}
      onClick={onClick}
    >
      <span className="horizontal-box align-items-vertical-center">
        <span {...css(styles.label, styles[`label${styleNamePartials}`])}>{label}</span>
        <span
          {...cssWithClass(
            'horizontal-box align-items-absolute-center',
            styles.iconContainer
          )}
        >
          {!isSelected &&
            <SvgCheckOutline
              size={height * CONFIG.heightToIconRatio}
              style={dynamicStyles.icon}
              {...css(styles.icon)}
            />
          }
          {isSelected &&
            <SvgCheckSolid
              size={height * CONFIG.heightToIconRatio}
              style={dynamicStyles.icon}
              stroke={color.primary}
            />
          }
        </span>
      </span>
    </button>
  );
};

Chip.defaultProps = {
  fontSize: 'md',
  style: {},
  styles: {},
  htmlAttributes: {},
  height: CONFIG.defaultHeight,
};

Chip.propTypes = {
  fontSize: PropTypes.oneOf(Object.keys(font)),
  // Height of the chip.
  height: PropTypes.number,
  htmlAttributes: PropTypes.object,
  isSelected: React.PropTypes.bool,
  // Whether chip has dark bg parent element.
  isThemeDark: React.PropTypes.bool,
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  // Override the inline-styles of the root element.
  style: PropTypes.object,
};


function getStyles({ height, fontSize, isSelected, isThemeDark }) {
  const primaryStroke = { stroke: color.primary };
  const whiteFill = { fill: color.white };
  const secondaryTextFill = { fill: color.secondaryText };
  let iconStyle = {};
  if (isThemeDark) {
    iconStyle = whiteFill;
  } else if (isSelected) {
    iconStyle = { ...whiteFill, ...primaryStroke };
  } else {
    iconStyle = secondaryTextFill;
  }

  return {
    Chip: {
      height,
      borderRadius: height / 2,
      fontSize: font[fontSize],
      paddingLeft: height / 2,
    },
    icon: iconStyle,
  };
}

module.exports = Chip;

const styles = StyleSheet.create({
  Chip: {
    transition: transition.easeOut(),
    border: 'none',
    overflow: 'hidden',
    margin: 0,
    display: 'inline-block',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    ':active': {
      outline: 'none',
    },
    ':focus': {
      outline: 'none',
    },
    ':hover': {
      color: color.primary,
    },
  },
  boxShadow: {
    boxShadow: `1px 1px 1px ${color.shadow}`,
  },
  borderLine: {
    border: `1px solid ${color.white}`,
  },
  label: {
    paddingRight: spacing.sm,
    color: `${color.primary}`,
  },
  icon: {
    fill: `${color.primary}`,
    color: `${color.primary}`,
  },
  chipNotSelected: {
    backgroundColor: color.white,
  },
  chipNotSelectedThemeDark: {
    backgroundColor: 'transparent',
  },
  labelNotSelected: {
    color: color.secondaryText,
  },
  labelNotSelectedThemeDark: {
    color: color.white,
  },
  iconNotSelected: {
    fill: `${color.secondaryText}`,
  },
  iconNotSelectedThemeDark: {
    fill: `${color.white}`,
  },
  chipSelected: {
    color: color.white,
    backgroundColor: color.darkPrimary,
  },
  chipSelectedThemeDark: {
    backgroundColor: color.white50,
  },
  labelSelected: {
    color: color.white,
  },
  labelSelectedThemeDark: {
    color: color.white,
  },
});
