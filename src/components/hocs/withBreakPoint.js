/* eslint-disable react/no-unused-prop-types */
import React, { PropTypes } from 'react';
import {hoistStatics} from 'recompose';
import { breakPoints } from 'src/styles/theme';
import Media from 'react-media';


/**
 * A HOC to detect the device size and match up with breakPoints,
 * then pass it down to props
 * Sample usage:
 * <DomainSectionS12nList
 *    responsiveConfig={{
 *      xs: {initialS12nCount: 2},
 *      sm: {initialS12nCount: 2},
 *      md: {initialS12nCount: 4},
 *      lg: {initialS12nCount: 6},
 *      xl: {initialS12nCount: 8},
 *      xxl: {initialS12nCount: 8},
 *    }}
 *    ...
 *  />
 **/

function getComponentHtml(Component, props, breakPoint, showBreakPointNumber) {
  const addedProps = { breakPoint };
  if (showBreakPointNumber) {
    addedProps.breakPointNumber = breakPoints[breakPoint];
  }
  return (
    <Component {...props} {...addedProps} />
  );
}

const withBreakPoint = (Component) => {
  const componentName = Component.displayName || Component.name;
  const HOC = (props) => {
    const showBreakPointNumber = props.showBreakPointNumber;
    return (
      <Media query={{minWidth: breakPoints.xxl}}>
        {(matchesXxl) => {
          if (matchesXxl) {
            return getComponentHtml(Component, props, 'xxl', showBreakPointNumber);
          }
          return (<Media query={{minWidth: breakPoints.xl}}>
            {(matchesXl) => {
              if (matchesXl) {
                return getComponentHtml(Component, props, 'xl', showBreakPointNumber);
              }
              return (<Media query={{minWidth: breakPoints.lg}}>
                {(matchesLg) => {
                  if (matchesLg) {
                    return getComponentHtml(Component, props, 'lg', showBreakPointNumber);
                  }
                  return (<Media query={{minWidth: breakPoints.md}}>
                    {(matchesMd) => {
                      if (matchesMd) {
                        return getComponentHtml(Component, props, 'md', showBreakPointNumber);
                      }
                      return (<Media query={{minWidth: breakPoints.sm}}>
                        {(matchesSm) => {
                          if (matchesSm) {
                            return getComponentHtml(Component, props, 'sm', showBreakPointNumber);
                          }
                          return (<Media query={{minWidth: breakPoints.xs}}>
                            {(matchesXs) => {
                              if (matchesXs) {
                                return getComponentHtml(Component, props, 'xs', showBreakPointNumber);
                              }
                              return getComponentHtml(Component, props, 'xxs', showBreakPointNumber);
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
      </Media>
    );
  };

  hoistStatics(Component, HOC);

  HOC.propTypes = {
    showBreakPointNumber: PropTypes.bool,
  };

  HOC.displayName = `withBreakPoint(${componentName})`;

  return HOC;
};

module.exports = withBreakPoint;
