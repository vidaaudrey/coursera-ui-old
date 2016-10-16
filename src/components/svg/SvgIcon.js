import React, {Component, PropTypes} from 'react';
import { css, cssWithClass, withStyles} from 'src';
import transition from '../../styles/transition';
import theme from '../../styles/theme';
import {withApiData} from '../hocs/withApiData';
// import hoistNonReactStatics from 'hoist-non-react-statics'
import {hoistStatics, nest} from 'recompose';


class SvgIcon extends Component {

  static propTypes = {
    // Static styles
    styles: PropTypes.object,

    // Override the inline-styles of the root element
    style: PropTypes.object,

    // Attributes overwrite.
    htmlAttributes: PropTypes.object,

    //  Elements passed into the SVG Icon.
    children: PropTypes.node,

    // Fill color of the svg, default to theme.color.icon.
    color: PropTypes.string,

    // Width and height of the svg, should be equal, so only use size.
    size: PropTypes.number,

    // Default to theme.color.darkPrimary
    hoverColor: PropTypes.string,

    onMouseEnter: PropTypes.func,

    onMouseLeave: PropTypes.func,

    // Override the inline-styles of the root element
    style: PropTypes.object,

    // Allows you to redefine what the coordinates
    viewBox: PropTypes.string,
  };

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
    size: 24,
    color: theme.color.icon,
    hoverColor: theme.color.darkPrimary,
    styles: {},
    htmlAttributes: {},
  };

  state = {
    hovered: false,
  };

  handleMouseLeave = (e) => {
    this.setState({hovered: false});
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e);
    }
  };

  handleMouseEnter = (e) => {
    this.setState({hovered: true});
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  };

  render() {
    const {
      styles,
      style,
      children,
      color,
      size,
      hoverColor,
      onMouseEnter,
      onMouseLeave,
      viewBox,
      htmlAttributes,
    } = this.props;

    const dynamicStyles = getStyles({color, hoverColor, size}, this.state);
    const mergedStyles = {...dynamicStyles.SvgIcon, ...style};

    return (
      <svg
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={mergedStyles}
        viewBox={viewBox}
        {...css(styles.SvgIcon)}
        style={mergedStyles}
        {...htmlAttributes}
      >
        {children}
      </svg>
    );
  }
}

// Dynamtic styles
function getStyles(props, state) {
  const {color, hoverColor, size} = props;
  const {hovered} = state;
  return {
    SvgIcon: {
      fill: hovered ? hoverColor : color,
      height: size,
      width: size,
    }
  }
}

export default withStyles(({color}) => ({
  SvgIcon: {
    display: 'inline-block',
    color: color.icon,
    transition: transition.easeOut(),
    userSelect: 'none',
  }
}))(SvgIcon);
