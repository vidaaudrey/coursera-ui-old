import React, {PropTypes} from 'react';

const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition, button,
} = require('src/styles/theme');

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
  },
  primaryHover: {
    ':hover': {
      backgroundColor: color.darkPrimary,
    },
  },
  secondary: {
    color: color.primary,
    backgroundColor: color.textIcon,
    border: `1px solid ${color.primary}`,
  },
  secondaryHover: {
    ':hover': {
      color: color.textIcon,
      backgroundColor: color.darkPrimary,
    },
  },
  default: {
    color: color.primaryText,
    backgroundColor: color.textIcon,
    border: `1px solid ${color.divider}`,
  },
  defaultHover: {
    ':hover': {
      color: color.textIcon,
      backgroundColor: color.darkPrimary,
      border: `1px solid ${color.primary}`,
    },
  },
  disabled: {
    backgroundColor: color.disabled,
    border: `1px solid ${color.disabled}`,
    color: button.disabledTextColor,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  noStyle: {
    backgroundColor: 'transparent',
    color: color.primaryText,
    border: 'none',
  },
  noStyleHover: {
    ':hover': {
      color: color.primary,
    },
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
  isOutline,
  children,
  label,
  ...props,
}) => {
  const dynamicStyles = getStyles({size});
  const mergedStyles = {...dynamicStyles.Button, ...style};
  return (
    <button
      {...htmlAttributes}
      {...css(styles.Button, styles[type], styles[size], styles[`${type}Hover`])}
      style={mergedStyles}
    >
      {label}
      {children}
   </button>
 );
};

// Explicity declare the default props for documentation purpose,
// as we only hoist a limit set of statics
Button.defaultProps = {
  style: {},
  htmlAttributes: {},
  size: 'md',
  type: BUTTON_TYPES.default,
};

Button.propTypes = {
  // Static styles
  styles: PropTypes.object,

  // Override the inline-styles of the root element
  style: PropTypes.object,

  htmlAttributes: PropTypes.object,

  // Button types.
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),

  // Can use to letters inside the avatar.
  children: PropTypes.node,

  // The text for the button
  label: PropTypes.string,
};

module.exports = Button;

// Dynamic styles
function getStyles({size}) {
  return {
    Button: {
    },
    icon: {

    },
  };
}
