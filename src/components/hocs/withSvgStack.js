/* eslint-disable max-len */
import React, { PropTypes } from 'react';
import { hoistStatics, pure } from 'recompose';
import {
  cssWithClass, StyleSheet, css, color, spacing,
} from 'src/styles/theme';

const styles = StyleSheet.create({
  withSvgStack: {
  },
});

/**
 * A HOC to add stack to svg icons
 */
const withSvgStack = (Component) => {
  const componentName = Component.displayName || Component.name;

  class HOC extends React.Component {
    static displayName = `withSvgStack(${componentName})`;

    static propTypes = {
      size: PropTypes.number,
      stackBorderRadius: PropTypes.string,
      stackBorderColor: PropTypes.string,
      stackBorderWidth: PropTypes.number,
      stackColor: PropTypes.string,
      stackHoverColor: PropTypes.string,
      stackStyle: PropTypes.object,
      stackToIconRatio: PropTypes.number,
    }

    static defaultProps = {
      size: 24,
      stackBorderRadius: '50%',
      stackBorderWidth: 0,
      stackBorderColor: color.divider,
      stackColor: color.primary,
      stackHoverColor: color.darkPrimary,
      stackStyle: {},
      stackToIconRatio: 0.5,
    }

    state = {
      isHovered: false,
    };

    handleMouseOut = () => {
      this.setState({isHovered: false});
    };

    handleMouseOver = () => {
      this.setState({isHovered: true});
    };

    render() {
      const {
        stackBorderColor,
        stackBorderRadius,
        stackBorderWidth,
        stackColor,
        stackHoverColor,
        stackStyle,
        stackToIconRatio,
        size,
        ...rest,
      } = this.props;

      const { isHovered } = this.state;
      const dynamicStyles = getStyles({ size,
        stackBorderRadius,
        stackBorderWidth,
        stackBorderColor,
        stackToIconRatio,
      });
      const backgroundColor = isHovered ? stackHoverColor : stackColor;

      return (
        <div
          {...cssWithClass('horizontal-box align-items-absolute-center', styles.withSvgStack)}
          style={{...dynamicStyles.withSvgStack, backgroundColor, ...stackStyle}}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <Component {...rest} size={size} isHovered={isHovered} />
        </div>
      );
    }
  }

  // hoistStatics(Component, HOC);
  return pure(HOC);
};

// Dynamic styles
function getStyles({size,
    stackBorderRadius,
    stackBorderWidth,
    stackBorderColor,
    stackToIconRatio,
  }) {
  return {
    withSvgStack: {
      width: size / stackToIconRatio,
      height: size / stackToIconRatio,
      overflow: 'hidden',
      border: `${stackBorderWidth}px solid ${stackBorderColor}`,
      borderRadius: stackBorderRadius,
    },
  };
}

module.exports = withSvgStack;
