/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes } from 'react';
import {css, StyleSheet, color, spacing, transition} from 'src/styles/theme';
import { fade } from 'src/utils/colorUtils';
import { compose, withState, withHandlers } from 'recompose';

const CONFIG = {
  color: color.primaryText,
  backgroundColor: color.white,
  darkThemeColor: color.white,
  darkThemeBackground: color.bgGrayThemeDark,
  zDepthShadows: [
    [1, 1, 0.1, 1, 2, 0.12],
    [1, 6, 0.12, 1, 4, 0.12],
    [3, 10, 0.16, 3, 10, 0.23],
    [10, 30, 0.19, 6, 10, 0.23],
    [14, 45, 0.25, 10, 18, 0.22],
    [19, 60, 0.30, 15, 20, 0.22],
    [24, 75, 0.36, 18, 24, 0.25],
  ].map(d => (
    `0 ${d[0]}px ${d[1]}px ${fade(color.black, d[2])},
     0 ${d[3]}px ${d[4]}px ${fade(color.black, d[5])}`
  )),
  roundedBorderRadius: 2,
};

/**
 * A generic Paper that accepts children, imgSrc and icon.
 * Sample Usage:
 * <Paper type="primary" size="sm" label={'sm'}/>
 */
const Paper = ({
  children,
  htmlAttributes = {},
  isThemeDark,
  style,
  ref,
  isCircle,
  isRounded,
  isTransitionDisabled,
  zDepth: zDepthAlt,
  isInteractive,
  isHovered,
  onMouseOver = () => {},
  onMouseOut = () => {},
}) => {
  const dynamicStyles = getStyles({ isCircle, isRounded, isThemeDark});
  const mergedStyles = {...dynamicStyles.Paper, ...style};
  const interactiveProps = isInteractive ? {onMouseOver, onMouseOut} : {};
  const zDepth = (isInteractive && isHovered) ? (zDepthAlt + 1) : zDepthAlt;

  return (
    <div
      ref={ref}
      {...htmlAttributes}
      {...css(
        styles.Paper,
        isTransitionDisabled && styles.transitionNone,
        styles[`boxShadowZDepth${zDepth}`],
        isThemeDark ? styles.darkTheme : styles.lightTheme,
      )}
      style={mergedStyles}
      {...interactiveProps}
    >
      {children}
    </div>
  );
};

// Explicity declare the default props for documentation purpose,
Paper.defaultProps = {
  htmlAttributes: {},
  style: {},
  zDepth: 1,
};

Paper.propTypes = {
  // Can use to letters inside the avatar.
  children: PropTypes.node,
  // Props to spread on root element
  htmlAttributes: PropTypes.object,
  // Whether button has dark bg parent element.
  isThemeDark: PropTypes.bool,
  // Override the inline-styles of the root element.
  style: PropTypes.object,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  isCircle: PropTypes.bool,
  isRounded: PropTypes.bool,
  isTransitionDisabled: PropTypes.bool,
  // zDepth of the paper shadow, -1 will not only show shadow and no border
  zDepth: PropTypes.oneOf([-1, 0, 1, 2, 3, 4]),

  /* Below props are soly used for interactivity, when hovered, we'll add one to zDepth*/
  // Whether to show hover state
  isInteractive: PropTypes.bool,
  isHovered: PropTypes.bool,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};

// Dynamic styles
function getStyles({ isCircle, isRounded }) {
  const borderRadiusByIsRounded = isRounded ? CONFIG.roundedBorderRadius : 0;
  return {
    Paper: {
      borderRadius: isCircle ? '50%' : borderRadiusByIsRounded,
    },
  };
}

module.exports = compose(
  withState('isHovered', 'toggleHover', false),
  withHandlers({
    onMouseOver: props => () => props.toggleHover(true),
    onMouseOut: props => () => props.toggleHover(false),
  }),
)(Paper);

const styles = StyleSheet.create({
  Paper: {
    boxSizing: 'border-box',
    transition: transition.easeOut(),
    position: 'relative',
  },
  lightTheme: {
    color: CONFIG.color,
    backgroundColor: CONFIG.backgroundColor,
  },
  darkTheme: {
    color: CONFIG.darkThemeColor,
    backgroundColor: CONFIG.darkThemeBackground,
  },
  border: {
    border: `1px solid ${color.divider}`,
    margin: -1,
  },
  transitionNone: {
    transition: 'none',
  },
  boxShadowZDepth0: {
    boxShadow: CONFIG.zDepthShadows[0],
  },
  boxShadowZDepth1: {
    boxShadow: CONFIG.zDepthShadows[1],
  },
  boxShadowZDepth2: {
    boxShadow: CONFIG.zDepthShadows[2],
  },
  boxShadowZDepth3: {
    boxShadow: CONFIG.zDepthShadows[3],
  },
  boxShadowZDepth4: {
    boxShadow: CONFIG.zDepthShadows[4],
  },
  boxShadowZDepth5: {
    boxShadow: CONFIG.zDepthShadows[5],
  },
  boxShadowZDepth6: {
    boxShadow: CONFIG.zDepthShadows[6],
  },
});
