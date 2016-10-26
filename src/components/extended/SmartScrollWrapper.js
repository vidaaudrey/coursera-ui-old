/* eslint-disable no-use-before-define */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import withScrollInfo from 'src/components/hocs/withScrollInfo';

import Measure from 'react-measure';


const DELTA = 50;
const NAVBAR_HEIGHT = 60;

/**
 *  A wrapper component to create medium nav style container
 * 1. When user scroll down, the container will go up as usual
 * 2. As soon as user starts to scroll up, we'll show the container right away
 * User can config what's the delta scroll distance they want to trigger the update
 * and the delta (takes priority) can be prop or function argument
 */
const SmartScrollWrapper = ({
  lastScrollPosition, isScrollingDown, children, containerHeight = NAVBAR_HEIGHT,
}) => {
  const hideContainer = lastScrollPosition >= containerHeight && isScrollingDown;
  const dynamicStyles = getStyles({containerHeight});
  const hideStyle = (hideContainer && dynamicStyles.hideContainer) || {};

  // mergedStyles is combination of component height and top offset
  const mergedStyles = {...dynamicStyles.SmartScrollWrapper, ...hideStyle};

  return (
    <div {...css(styles.SmartScrollWrapper)} style={mergedStyles}>
      {children}
    </div>
  );
};

SmartScrollWrapper.propTypes = {
  // From withScrollInfo, get the top position of the wrapper component
  lastScrollPosition: React.PropTypes.number,
  // From withScrollInfo, get the scroll direction
  isScrollingDown: React.PropTypes.bool,

  children: React.PropTypes.node,
  // The height of the container, may be different if the window resizes
  // The parent container needs to pass the correct height
  containerHeight: React.PropTypes.number,
};

function getStyles({containerHeight}) {
  return {
    SmartScrollWrapper: {
      height: containerHeight,
    },
    hideContainer: {
      top: -containerHeight,
    },
  };
}

module.exports = withScrollInfo({delta: DELTA})(SmartScrollWrapper);

const styles = StyleSheet.create({
  SmartScrollWrapper: {
    minWidth: spacing.minWidth,
    backgroundColor: color.white,
    boxShadow: `0 2px 4px 0 ${color.shadow}`,
    position: 'fixed',
    top: 0,
    transition: 'top 0.2s ease-in-out',
    width: '100%',
  },
  container: {
    width: '100%',
  },
  hideContainer: {
    top: -NAVBAR_HEIGHT,
  },
});
