import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
const {
  breakPoints,
} = require('src/styles/theme');

const withDimensions = require('src/components/hocs/withDimensions');
import {compose, pure} from 'recompose';

/**
 * if
 * @param  {[type]} breakPoint [description]
 * @return {[type]}            [description]
 */
function getClosestBreakPointFromSelections(breakPoint, selections = []) {
  if (!breakPoint || _(selections).isEmpty()) {
    return undefined
  }
}
/**
 * A HOC to allow config for different device sizes
 * Sample usage:
 * <ResponsiveComponent responsiveConfig={{
 *  sm: {
 *    name: 'Small',
 *    size: 2,
 *  },
 *  md: {
 *    name: 'Medium',
 *    size: 4,
 *  }
 * }}>
 */
const withResponsiveConfig = (Component) => {
  const HOC = ({
    breakPoint,
    responsiveConfig,
    ...rest,
  }) => {
    const attributesByBreakpoint = responsiveConfig && responsiveConfig[breakPoint];
    // TODO[Audrey]:
    // If the config is empty, find closest responsive point, prioritize on lower band
    return (
      <Component
        {...attributesByBreakpoint}
        {...rest}
      />
    );
  };

  HOC.propTypes = {
    // ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    breakPoint: React.PropTypes.oneOf(Object.keys(breakPoints)),
    responsiveConfig: React.PropTypes.object,
  };

  const componentName = Component.displayName || Component.name;
  HOC.displayName = `HOC(${componentName})`;
  return compose(
    withDimensions({
      onlyShowBreakPoint: true,
      updateInterval: 300,
      blackList: ['height', 'top', 'right', 'bottom', 'left'],
    }),
   pure,
  )(HOC);
};


module.exports = withResponsiveConfig;
