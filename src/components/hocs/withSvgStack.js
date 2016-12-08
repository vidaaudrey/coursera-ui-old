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
 * Can also be used to add stack to any other elements
 * When hovered, the HOC will pass the hovered state to svgIcon
 */
const withSvgStack = (Component) => {
  const componentName = Component.displayName || Component.name;

  class HOC extends React.Component {
    static displayName = `withSvgStack(${componentName})`;

    static propTypes = {
      size: PropTypes.number,
      color: PropTypes.string,
      hoverColor: PropTypes.string,
      // Allow rendering of different tags, e.g. 'span', 'div'
      // Default to 'span' so as it's easy to use inside button
      stackTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      stackBorderRadius: PropTypes.string,
      stackBorderColor: PropTypes.string,
      stackBorderWidth: PropTypes.number,
      stackColor: PropTypes.string,
      stackHoverColor: PropTypes.string,
      stackStyle: PropTypes.object,
      stackToIconRatio: PropTypes.number,
    }

    static defaultProps = {
      stackTag: 'span',
      size: 24,
      stackBorderRadius: '50%',
      stackBorderWidth: 0,
      stackBorderColor: color.divider,
      stackColor: color.primary,
      stackHoverColor: color.darkPrimary,
      stackStyle: {},
      stackToIconRatio: 0.6,
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
        stackTag: Tag,

        // svgProps
        size,
        color: svgColor,
        hoverColor,
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
        <Tag
          {...cssWithClass('horizontal-box align-items-absolute-center', styles.withSvgStack)}
          style={{...dynamicStyles.withSvgStack, backgroundColor, ...stackStyle}}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <Component
            {...rest}
            size={size}
            color={(isHovered && hoverColor) || svgColor}
            hoverColor={hoverColor}
          />
        </Tag>
      );
    }
  }

  hoistStatics(Component, HOC);
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
