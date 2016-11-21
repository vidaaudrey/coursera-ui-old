/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes, Component} from 'react';
import {css, StyleSheet, color, spacing, transition} from 'src/styles/theme';

const CONFIG = {
  minWidth: 72,
  size: {
    sm: {
      fontSize: '0.8rem',
      padding: '0.3rem 0.8rem',
    },
    md: {
      fontSize: '1rem',
      padding: '0.4rem 2rem',
    },
    lg: {
      fontSize: '1.2rem',
      padding: '1rem 2.6rem',
    },
  },
};

const BUTTON_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
  noStyle: 'noStyle',
  disabled: 'disabled',
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
const Button = ({
  children,
  htmlAttributes = {},
  isThemeDark,
  label,
  disabled,
  onClick,
  size = 'md',
  type: typeAlt,
  style,
  tag = 'button',
  ref,
}) => {
  const dynamicStyles = getStyles({size});
  const mergedStyles = {...dynamicStyles.Button, ...style};
  const Tag = tag;
  const type = (disabled || htmlAttributes.disabled) ? BUTTON_TYPES.disabled : typeAlt;

  return (
    <Tag
      ref={ref}
      onClick={onClick}
      {...htmlAttributes}
      {...css(
        styles.Button,
        styles[type],
        styles[size],
        isThemeDark && styles[`${type}ThemeDark`],
        isThemeDark && styles[`${size}ThemeDark`],
        tag !== 'button' && (isThemeDark ? styles[`${type}LinkThemeDark`] : styles[`${type}Link`]),
      )}
      style={mergedStyles}
    >
      {label}
      {children}
    </Tag>
  );
};

// Explicity declare the default props for documentation purpose,
Button.defaultProps = {
  htmlAttributes: {},
  size: 'md',
  style: {},
  type: BUTTON_TYPES.default,
  tag: 'button',
};

Button.propTypes = {
  // Can use to letters inside the avatar.
  children: PropTypes.node,

  htmlAttributes: PropTypes.object,
  // Whether button has dark bg parent element.
  isThemeDark: PropTypes.bool,
  // The text for the button.
  label: PropTypes.string,
  // click event.
  onClick: PropTypes.func,

  disabled: PropTypes.bool,

  size: PropTypes.oneOf(Object.keys(BUTTON_SIZES)),
  // Override the inline-styles of the root element.
  style: PropTypes.object,
  // Button types.
  type: PropTypes.oneOf(Object.keys(BUTTON_TYPES)),
  // Allow rendering of different tags, e.g. 'a', 'button', Link
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // Dom ref
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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
    borderRadius: 2,
    transition: transition.easeOut(),
    userSelect: 'none',
    position: 'relative',
    textAlign: 'center',
    fontSize: CONFIG.fontSize,
    lineHeight: CONFIG.fontSize,
    display: 'inline-block',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    backgroundImage: 'none',
    cursor: 'pointer',
    filter: 'none',
    textDecoration: 'none',
    minWidth: CONFIG.minWidth,
    ':focus': {
      outline: 'none',
    },
    ':hover': {
      textDecoration: 'none',
    },
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
  primaryLink: {
    color: `${color.textIcon} !important `,
  },
  primaryLinkThemeDark: {
    color: `${color.primary} !important`,
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
  secondaryLink: {
    color: `${color.primary} !important `,
    ':hover': {
      color: `${color.textIcon} !important `,
    },
  },
  secondaryLinkThemeDark: {
    color: `${color.white} !important`,
    ':hover': {
      color: `${color.primary} !important `,
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
  defaultLink: {
    color: `${color.primaryText} !important`,
    ':hover': {
      color: `${color.textIcon} !important`,
    },
  },
  defaultLinkThemeDark: {
    color: `${color.primaryText} !important`,
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
  noStyleLink: {
    color: `${color.primaryText} !important `,
    ':hover': {
      color: `${color.primary} !important `,
    },
  },
  noStyleLinkThemeDark: {
    color: `${color.white} !important`,
    ':hover': {
      color: `${color.primary} !important `,
    },
  },
  disabled: {
    backgroundColor: color.disabled,
    border: `1px solid ${color.disabled}`,
    color: color.disabledText,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  disabledThemeDark: {
    backgroundColor: 'transparent',
    border: `1px solid ${color.disabledTextThemeDark}`,
    color: color.disabledTextThemeDark,
  },
  sm: {
    padding: CONFIG.size.sm.padding,
    fontSize: CONFIG.size.sm.fontSize,
  },
  md: {
    padding: CONFIG.size.md.padding,
    fontSize: CONFIG.size.md.fontSize,
  },
  lg: {
    padding: CONFIG.size.lg.padding,
    fontSize: CONFIG.size.lg.fontSize,
  },
  icon: {
    color: color.primary,
  },
});
