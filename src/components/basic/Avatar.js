import React, {PropTypes} from 'react';
import { css, cssWithClass, withStyles} from 'src';

/**
 * A generic Avatar that accepts children, imgSrc and icon.
 * Sample Usage:
 * <Avatar imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" size={80} />
 * <Avatar backgroundColor="#000" color="#123" size={80} ><h4>HL</h4> </Avatar>
 */
// TODO[Audrey]: add icon support
const Avatar = ({
  styles,
  style = {},
  htmlAttributes = {},
  imgSrc,
  imgAlt = 'Avatar',
  iconName,
  backgroundColor,
  color,
  children,
  size = 44,
  ...props
}) => {
  const dynamicStyles = getStyles({size, backgroundColor, color});
  const mergedStyles = {...dynamicStyles.Avatar, ...style};
  if (imgSrc) {
    return (
      <img
        {...htmlAttributes}
        {...css(styles.Avatar)}
        style={mergedStyles}
        src={imgSrc}
      />
    );
  }
  return (
    <div
      {...htmlAttributes}
      {...css(styles.Avatar)}
      style={mergedStyles}
    >
     {children}
   </div>
 );
};


Avatar.propTypes = {
  // Static styles
  styles: PropTypes.object,

  // Override the inline-styles of the root element
  style: PropTypes.object,

  // Attributes overwrite.
  htmlAttributes: PropTypes.object,

  // The backgroundColor of the avatar. Does not apply to image avatars.
  backgroundColor: PropTypes.string,

  // Can use to letters inside the avatar.
  children: PropTypes.node,

  // The icon or letter's color.
  color: PropTypes.string,

  // The size of the avatar in pixels
  size: PropTypes.number,

  // If passed in, the component will render an img element. Otherwise, a div will be rendered.
  src: PropTypes.string,

  // If passed in, the component will render an img element. Otherwise, a div will be rendered.
  // bordered: PropTypes.bool,
  // shadow: PropTypes.bool
};

// Explicity declare the default props for documentation purpose,
// as we only hoist a limit set of statics
Avatar.defaultProps = {
  style: {},
  htmlAttributes: {},
  imgAlt: 'Avatar',
  size: 44,
};

// Dynamtic styles
function getStyles(props) {
  const {size, backgroundColor, color} = props;
  return {
    Avatar: {
      backgroundColor,
      color,
      fontSize: size / 2,
      height: size,
      width: size,
    },
    icon: {
      width: size * 0.6,
      height: size * 0.6,
      fontSize: size * 0.6,
      margin: size * 0.2,
    }
  }
}

export default withStyles(({color, gradient}) => ({
  Avatar: {
    backgroundColor: color.accent,
    color: color.textIcon,
    backgroundColor: color.primary,
    userSelect: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  icon: {
    color: color.primary,
  },
  text: {
    lineHeight: '100%',
    margin: 0,
    padding: 0,
  }
}))(Avatar);
