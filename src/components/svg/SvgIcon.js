import React, { PropTypes, Component } from 'react';
import {
  StyleSheet, css, color, transition, iconSize,
} from 'src/styles/theme';

class SvgIcon extends Component {
  static propTypes = {
    // Override the inline-styles of the root element
    style: PropTypes.object,

    // Attributes overwrite.
    htmlAttributes: PropTypes.object,

    //  Elements passed into the SVG Icon.
    children: PropTypes.node,

    // Fill color of the svg, default to color.icon.
    color: PropTypes.string,

    isThemeDark: PropTypes.bool,

    // Width and height of the svg, should be equal, so only use size.
    size: PropTypes.number,

    // Default to color.darkPrimary
    hoverColor: PropTypes.string,

    onMouseEnter: PropTypes.func,

    onMouseLeave: PropTypes.func,

    // Allows you to redefine what the coordinates
    viewBox: PropTypes.string,
  };

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
    size: iconSize.sm, // 24
    style: {},
    htmlAttributes: {},
  };

  constructor(props, context) {
    super(props, context);
    const { color: colorAlt, hoverColor, isThemeDark } = props;
    this._color = colorAlt || (isThemeDark ? color.iconThemeDark : color.icon);
    this._hoverColor = hoverColor || this._color;
    this.state = {
      hovered: false,
    };
  }

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
      style,
      children,
      size,
      viewBox,
      htmlAttributes,
    } = this.props;

    const dynamicStyles = getStyles({
      propColor: this._color,
      hoverColor: this._hoverColor,
      size,
      hovered: this.state.hovered,
    });
    const mergedStyles = {...dynamicStyles.SvgIcon, ...style};

    return (
      <svg
        {...htmlAttributes}
        {...css(styles.SvgIcon)}
        style={mergedStyles}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        viewBox={viewBox}
      >
        {children}
      </svg>
    );
  }
}

// Dynamic styles
function getStyles({ propColor, hoverColor, size, hovered }) {
  return {
    SvgIcon: {
      fill: (hovered && hoverColor) ? hoverColor : propColor,
      height: size,
      width: size,
    },
  };
}

module.exports = SvgIcon;

const styles = StyleSheet.create({
  SvgIcon: {
    display: 'inline-block',
    color: color.icon,
    transition: transition.easeOut(),
    userSelect: 'none',
  },
});
