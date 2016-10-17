import React, {PropTypes} from 'react';
import { css, cssWithClass, withStyles} from 'src';

const BUTTON_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  'default': 'default',
  disabled: 'disabled',
};
const BUTTON_SIZES = {
  xs: 'xs',
  md: 'md',
  lg: 'lg',
}

/**
 * A generic RaisedButton that accepts children, imgSrc and icon.
 * Sample Usage:
 */
// TODO[Audrey]:
const RaisedButton = ({
  styles,
  style,
  htmlAttributes = {},
  type = BUTTON_TYPES.default,
  size = 'xs',
  isOutline,
  children,
  label,
  ...props
}) => {
  const dynamicStyles = getStyles({size});
  const mergedStyles = {...dynamicStyles.RaisedButton, ...style};
  return (
    <button
      {...css(styles.RaisedButton, styles[type], styles[size])}
      style={mergedStyles}
      {...htmlAttributes}
    >
      {label}
      {children}
   </button>
 );
};


RaisedButton.propTypes = {
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

// Dynamtic styles
function getStyles({size}) {
  return {
    RaisedButton: {
    },
    icon: {

    }
  }
}

export default withStyles(({color, transition, button}) => ({
  RaisedButton: {
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
    // overflow: 'hidden',
    // backgroundColor: color.accent,
    // color: color.textIcon,
    // backgroundColor: color.primary,
    // userSelect: 'none',
    // display: 'inline-flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: '50%',
  },
  'default': {
    color: color.primaryText,
    backgroundColor: color.textIcon,
    border: `1px solid ${color.divider}`,
  },
  primary: {
    color: color.textIcon,
    backgroundColor: color.primary,
    border: `1px solid ${color.primary}`,
  },
  secondary: {
    color: color.primary,
    backgroundColor: color.textIcon,
    border: `1px solid ${color.primary}`,
  },
  disabled: {
    backgroundColor: color.disabled,
    border: `1px solid ${color.disabled}`,
    color: button.disabledTextColor,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  xs: {
    padding: button.size.xs.padding,
    fontSize: button.size.xs.fontSize,
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
}))(RaisedButton);
