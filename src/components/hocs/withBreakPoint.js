import React from 'react';
import {hoistStatics} from 'recompose';
import { breakPoints } from 'src/styles/theme';
import Media from 'react-media';


/**
 * A HOC to detect the device size and match up with breakPoints,
 * then pass it down to props
 * Can Use together with withResponsiveConfig:
 */

function getComponentHtml(Component, props, breakPoint) {
  return (
    <Component {...props} breakPoint={breakPoint} />
  );
}

const withBreakPoint = (Component) => {
  const componentName = Component.displayName || Component.name;
  const HOC = props =>
    <Media query={{minWidth: breakPoints.xxl}}>
      {(matchesXxl) => {
        if (matchesXxl) {
          return getComponentHtml(Component, props, 'xxl');
        }
        return (<Media query={{minWidth: breakPoints.xl}}>
          {(matchesXl) => {
            if (matchesXl) {
              return getComponentHtml(Component, props, 'xl');
            }
            return (<Media query={{minWidth: breakPoints.lg}}>
              {(matchesLg) => {
                if (matchesLg) {
                  return getComponentHtml(Component, props, 'lg');
                }
                return (<Media query={{minWidth: breakPoints.md}}>
                  {(matchesMd) => {
                    if (matchesMd) {
                      return getComponentHtml(Component, props, 'md');
                    }
                    return (<Media query={{minWidth: breakPoints.sm}}>
                      {(matchesSm) => {
                        if (matchesSm) {
                          return getComponentHtml(Component, props, 'sm');
                        }
                        return (<Media query={{minWidth: breakPoints.xs}}>
                          {(matchesXs) => {
                            if (matchesXs) {
                              return getComponentHtml(Component, props, 'xs');
                            }
                            return getComponentHtml(Component, props, 'xxs');
                          }}
                        </Media>);
                      }}
                    </Media>);
                  }}
                </Media>);
              }}
            </Media>);
          }}
        </Media>);
      }}
    </Media>;

  hoistStatics(Component, HOC);
  HOC.displayName = `withBreakPoint(${componentName})`;

  return HOC;
};

module.exports = withBreakPoint;
