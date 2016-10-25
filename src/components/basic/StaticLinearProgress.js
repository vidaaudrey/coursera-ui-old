/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes} from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

/**
 *  A static progress bar
 * Sample Usage:
 * <StaticLinearProgress progress={20} />
 * <StaticLinearProgress progress={20} color="#456" backgroundColor="#f1f1f1" height={16} />
 */
const DEFAULT_HEIGHT = 8;
const StaticLinearProgress = ({
  style,
  progress = 0, // 0 - 100
  backgroundColor,
  color: propColor,
  height = DEFAULT_HEIGHT,
  ...props,
}) => {
  const dynamicStyles = getStyles({backgroundColor, propColor, height});
  const mergedRootStyle = {...dynamicStyles.StaticLinearProgress, ...style};
  const barStyle = {...dynamicStyles.bar, width: `${progress}%`};

  return (
    <div
      {...css(styles.StaticLinearProgress)}
      style={mergedRootStyle}
    >
      <div {...css(styles.bar)} style={barStyle} />
    </div>
 );
};


StaticLinearProgress.propTypes = {
  // Override the inline-styles of the root element
  style: PropTypes.object,

  // The backgroundColor of the progress bar
  backgroundColor: PropTypes.string,

  // The forground color of the progress bar
  color: PropTypes.string,

  // The height of the the progress bar
  height: PropTypes.number,

  progress: React.PropTypes.number,
};

// Dynamic styles
function getStyles({backgroundColor, propColor, height}) {
  return {
    StaticLinearProgress: {
      height,
      backgroundColor,
      borderRadius: height / 2,
    },
    bar: {
      backgroundColor: propColor,
      borderRadius: height / 2,
    },
  };
}

module.exports = StaticLinearProgress;

const styles = StyleSheet.create({
  StaticLinearProgress: {
    backgroundColor: color.bgGray,
    width: '100%',
    height: DEFAULT_HEIGHT,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: color.primary,
  },
});
