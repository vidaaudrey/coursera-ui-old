const React = require('react');
const {PropTypes} = React;
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');


class SvgIcon extends React.Component {

  static propTypes = {
    // Override the inline-styles of the root element
    style: PropTypes.object,

    // Attributes overwrite.
    htmlAttributes: PropTypes.object,

    //  Elements passed into the SVG Icon.
    children: PropTypes.node,

    // Fill color of the svg, default to color.icon.
    color: PropTypes.string,

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
    size: 24,
    color: color.icon,
    style: {},
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
      style,
      children,
      color: propColor,
      size,
      hoverColor,
      viewBox,
      htmlAttributes,
    } = this.props;

    const dynamicStyles = getStyles({propColor, hoverColor, size}, this.state);
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
function getStyles(props, state) {
  const {propColor, hoverColor, size} = props;
  const {hovered} = state;
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
