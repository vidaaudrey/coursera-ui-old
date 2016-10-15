import React, {PropTypes} from 'react';
import { css, cssWithClass, withStyles} from 'src';

/**
 *  A static progress bar
 * Sample Usage:
 * <StaticLinearProgress progress={20} />
 * <StaticLinearProgress progress={20} color="#456" backgroundColor="#f1f1f1" height={16} />
 */
const DEFAULT_HEIGHT = 8;
const StaticLinearProgress = ({
  styles,
  style,
  progress = 0, // 0 - 100
  backgroundColor,
  color,
  height = DEFAULT_HEIGHT,
  ...props
}) => {
  const dynamicStyles = getStyles({backgroundColor, color, height});
  const mergedRootStyle = {...dynamicStyles.StaticLinearProgress, ...style};
  console.warn('-style--', style);
  const barStyle = {...dynamicStyles.bar, width: `${progress}%`};

  return (
    <div
      {...css(styles.StaticLinearProgress)}
      style={mergedRootStyle}
    >
      <div {...css(styles.bar)} style={barStyle}></div>
   </div>
 );
};


StaticLinearProgress.propTypes = {
  // Static styles
  styles: PropTypes.object,

  // Override the inline-styles of the root element
  style: PropTypes.object,

  // The backgroundColor of the progress bar
  backgroundColor: PropTypes.string,

  // The forground color of the progress bar
  color: PropTypes.string,

  // The height of the the progress bar
  height: PropTypes.number,
};

// Dynamtic styles
function getStyles(props) {
  const {backgroundColor, color, height} = props;
  return {
    StaticLinearProgress: {
      height,
      backgroundColor,
      borderRadius: height / 2,
    },
    bar: {
      backgroundColor: color,
      borderRadius: height / 2,
    }
  }
}

export default withStyles(({color, gradient}) => ({
  StaticLinearProgress: {
    backgroundColor: color.bgGray,
    width: '100%',
    height: DEFAULT_HEIGHT,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: color.primary,
  }
}))(StaticLinearProgress);
