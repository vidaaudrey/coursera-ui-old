/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes } from 'react';
import {css, StyleSheet, color, spacing, transition} from 'src/styles/theme';
import { fade } from 'src/utils/colorUtils';

const CONFIG = {
  color: color.primaryText,
  backgroundColor: color.white,
  darkThemeColor: color.white,
  darkThemeBackground: color.bgGrayThemeDark,
  zDepthShadows: [
    [1, 6, 0.12, 1, 4, 0.12],
    [3, 10, 0.16, 3, 10, 0.23],
    [10, 30, 0.19, 6, 10, 0.23],
    [14, 45, 0.25, 10, 18, 0.22],
    [19, 60, 0.30, 15, 20, 0.22],
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
  zDepth,
}) => {
  const dynamicStyles = getStyles({ isCircle, isRounded, isThemeDark});
  const mergedStyles = {...dynamicStyles.Paper, ...style};
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
  // zDepth of the paper shadow
  zDepth: PropTypes.oneOf([0, 1, 2, 3, 4]),
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

module.exports = Paper;

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
});
