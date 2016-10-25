/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes} from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const _ = require('underscore');
/**
 *  A static progress bar
 */
const DEFAULT_HEIGHT = 8;
const DEFAULT_BAR_MARGIN = 2;
const StepProgress = ({
  style,
  backgroundColor,
  progressColor = color.primary,
  barMargin = DEFAULT_BAR_MARGIN,
  height = DEFAULT_HEIGHT,
  totalSteps = 1,
  currentStep = 0,
  ...props,
}) => {
  const dynamicStyles = getStyles({backgroundColor, progressColor, height, barMargin});
  const mergedRootStyle = {...dynamicStyles.StepProgress, ...style};
  // const barStyle = {...dynamicStyles.bar, width: `${progress}%`};
  const barWidth = 1 / totalSteps;
  const barData = _.range(totalSteps)
    .map(item => ({
      step: item,
      style: {
        width: `${barWidth * 100}%`,
        backgroundColor: item < currentStep ? progressColor : 'transparent',
        ...dynamicStyles.bar,
      },
    }));
  return (
    <div
      {...cssWithClass('horizontal-box align-items-spacebetween', styles.StepProgress)}
      style={mergedRootStyle}
    >
      {_(barData).map(item => (
        <div
          {...css(styles.bar)}
          style={item.style}
          key={`StepProgress~${item.step}`}
        />
      ))}
    </div>
 );
};


StepProgress.propTypes = {
  // Override the inline-styles of the root element
  style: PropTypes.object,

  // The backgroundColor of the progress bar
  backgroundColor: PropTypes.string,

  // The forground color of the progress bar
  color: PropTypes.string,

  // The height of the the progress bar
  height: PropTypes.number,

  totalSteps: PropTypes.number,
  currentStep: PropTypes.number,
};

// Explicity declare the default props for documentation purpose
StepProgress.defaultProps = {
  styles: {},
  style: {},
  totalSteps: 1,
  currentStep: 0,
  height: DEFAULT_HEIGHT,
  barMargin: DEFAULT_BAR_MARGIN,
  color: color.primary,
  backgroundColor: color.bgGray,
};

// Dynamic styles
function getStyles({backgroundColor, height, barMargin}) {
  return {
    StepProgress: {
      height,
      backgroundColor,
    },
    bar: {
      marginLeft: barMargin,
      marginRight: barMargin,
    },
  };
}

module.exports = StepProgress;

const styles = StyleSheet.create({
  StepProgress: {
    transition: transition.easeOut(),
    backgroundColor: color.white,
    width: '100%',
    height: DEFAULT_HEIGHT,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
  },
});
