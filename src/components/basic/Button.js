/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes, Component} from 'react';
import {css, StyleSheet, color, spacing, transition, button} from 'src/styles/theme';

const BUTTON_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
  disabled: 'disabled',
  noStyle: 'noStyle',
};

const BUTTON_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

/**
 * A generic Button that accepts children, imgSrc and icon.
 * Sample Usage:
 * <Button type="primary" size="sm" label={'sm'}/>
 */
// TODO[Audrey]:
const Button = ({
  style,
  htmlAttributes = {},
  type = BUTTON_TYPES.default,
  size = 'md',
  children,
  label,
  onClick,
  isThemeDark,
}) => {
  const dynamicStyles = getStyles({size});
  const mergedStyles = {...dynamicStyles.Button, ...style};
  return (
    <button
      onClick={onClick}
      {...htmlAttributes}
      {...css(
        styles.Button,
        styles[type],
        styles[size],
        isThemeDark && styles[`${type}ThemeDark`],
        isThemeDark && styles[`${size}ThemeDark`],
      )}
      style={mergedStyles}
    >
      {label}
      {children}
    </button>
 );
};

// Explicity declare the default props for documentation purpose,
Button.defaultProps = {
  style: {},
  htmlAttributes: {},
  size: 'md',
  type: BUTTON_TYPES.default,
};

Button.propTypes = {
  // Override the inline-styles of the root element.
  style: PropTypes.object,

  htmlAttributes: PropTypes.object,

  // Button types.
  type: PropTypes.oneOf(Object.keys(BUTTON_TYPES)),
  size: PropTypes.oneOf(Object.keys(BUTTON_SIZES)),

  // Can use to letters inside the avatar.
  children: PropTypes.node,

  // The text for the button
  label: PropTypes.string,

  // click event
  onClick: PropTypes.func,

  // Whether button has dark bg parent element
  isThemeDark: PropTypes.bool,
};

// Dynamic styles
function getStyles({size}) {
  return {
    Button: {
    },
    icon: {

    },
  };
}

module.exports = Button;

const styles = StyleSheet.create({
  Button: {
    transition: transition.easeOut(),
    userSelect: 'none',
    position: 'relative',
    textAlign: 'center',
    fontSize: button.fontSize,
    lineHeight: button.fontSize,
    display: 'inline-block',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    backgroundImage: 'none',
    cursor: 'pointer',
    borderRadius: 0,
    filter: 'none',
    textDecoration: 'none',
    minWidth: button.minWidth,
  },
  primary: {
    color: color.textIcon,
    backgroundColor: color.primary,
    border: `1px solid ${color.primary}`,
    ':hover': {
      backgroundColor: color.darkPrimary,
    },
  },
  primaryThemeDark: {
    color: color.primary,
    backgroundColor: color.white,
    border: `1px solid ${color.white}`,
    ':hover': {
      backgroundColor: color.lightPrimary,
    },
  },
  secondary: {
    color: color.primary,
    backgroundColor: color.textIcon,
    border: `1px solid ${color.primary}`,
    ':hover': {
      color: color.textIcon,
      border: `1px solid ${color.primary}`,
      backgroundColor: color.darkPrimary,
    },
  },
  secondaryThemeDark: {
    color: color.white,
    backgroundColor: 'transparent',
    border: `1px solid ${color.white}`,
    ':hover': {
      color: color.primary,
      backgroundColor: 'transparent',
    },
  },
  default: {
    color: color.primaryText,
    backgroundColor: color.textIcon,
    border: `1px solid ${color.divider}`,
    ':hover': {
      color: color.textIcon,
      backgroundColor: color.darkPrimary,
      border: `1px solid ${color.primary}`,
    },
  },
  defaultThemeDark: {
    color: color.primaryText,
    backgroundColor: color.textIcon,
    border: `1px solid ${color.divider}`,
    ':hover': {
      borderColor: 'transparent',
    },
  },
  disabled: {
    backgroundColor: color.disabled,
    border: `1px solid ${color.disabled}`,
    color: button.disabledTextColor,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  disabledThemeDark: {
    backgroundColor: 'transparent',
    border: `1px solid ${button.disabledTextColorThemeDark}`,
    color: button.disabledTextColorThemeDark,
  },
  noStyle: {
    backgroundColor: 'transparent',
    color: color.primaryText,
    border: 'none',
    ':hover': {
      color: color.primary,
    },
  },
  noStyleThemeDark: {
    color: color.white,
  },
  sm: {
    padding: button.size.sm.padding,
    fontSize: button.size.sm.fontSize,
  },
  md: {
    padding: button.size.md.padding,
    fontSize: button.size.md.fontSize,
  },
  lg: {
    padding: button.size.lg.padding,
    fontSize: button.size.lg.fontSize,
  },
  icon: {
    color: color.primary,
  },
});
