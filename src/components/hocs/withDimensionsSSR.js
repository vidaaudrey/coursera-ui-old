import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
const {
  breakPoints,
} = require('src/styles/theme');
const Measure = require('react-measure');
const _ = require('underscore');

function getBreakPointByWidth(width) {
  if (width < breakPoints.xs) {
    return 'xs';
  } else if (width < breakPoints.sm) {
    return 'sm';
  } else if (width < breakPoints.md) {
    return 'md';
  } else if (width < breakPoints.lg) {
    return 'lg';
  } else if (width < breakPoints.xl) {
    return 'xl';
  }
  return 'xxl';
}

/**
 * A HOC to detect the device size and match up with breakPoints,
 * then pass it down to props
 * optionally pass down all dimensions (width, height, top, bottom, left, right)
 * If we need to support ssr, use withDimensionsSSR
 */

const withDimensionsSSR = ({showBreakPoint = false, onlyShowBreakPoint, updateInterval = 5, blacklist = []}) => {
  return (Component) => {
    const componentName = Component.displayName || Component.name || 'Component';
    class HOC extends React.Component {
      static displayName = `withDimensionsSSR(${componentName})`;

      state = {
        dimensions: [],
        breakPoint: 'lg',
      }

      componentDidMount() {
        this._isMounted = true;
      }

      componentWillUnmount() {
        this._isMounted = false;
      }

      onMeasure = (dimensions) => {
        const breakPoint = getBreakPointByWidth(dimensions.width);
        this.setState({ dimensions, breakPoint });
      }

      render() {
        const {dimensions, breakPoint} = this.state;
        let propsToPassDown = {dimensions};
        if (showBreakPoint) {
          propsToPassDown.breakPoint = breakPoint;
        }
        if (onlyShowBreakPoint) {
          propsToPassDown = {breakPoint};
        }

        const throttledOnMeasure = _.throttle(this.onMeasure, updateInterval);

        return (
          <Measure
            blacklist={blacklist}
            onMeasure={throttledOnMeasure}
          >
            <Component
              {...this.props}
              {...propsToPassDown}
            />
          </Measure>
        );
      }
    }

    hoistNonReactStatic(Component, HOC);

    return HOC;
  };
};


module.exports = withDimensionsSSR;
