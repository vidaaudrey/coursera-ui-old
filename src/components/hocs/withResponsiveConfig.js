import React, { PropTypes } from 'react';
import { breakPoints } from 'src/styles/theme';
import withBreakPoint from 'src/components/hocs/withBreakPoint';
import { compose, pure, hoistStatics } from 'recompose';
import _ from 'underscore';

// TODO[Audrey]: add option to omit certain configs
// const breakPointKeys = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
/**
 * @param  {[type]} breakPoint [description]
 * @return {[type]}            [description]
 */
// function getClosestBreakPointFromSelections(breakPoint, selections = []) {
//   if (!breakPoint || _(selections).isEmpty()) {
//     return undefined
//   }
// }
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
    // ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    breakPoint: PropTypes.oneOf(Object.keys(breakPoints)),
    responsiveConfig: PropTypes.object,
  };

  const componentName = Component.displayName || Component.name;
  HOC.displayName = `HOC(${componentName})`;
  hoistStatics(Component, HOC);

  return compose(
    withBreakPoint,
    pure,
  )(HOC);
};


module.exports = withResponsiveConfig;
