import React, {PropTypes} from 'react';
import { css, cssWithClass, withStyles} from 'src';

const FIXED_POSITIONS = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
};

/**
 * A container that can keep children in fixed position
 */
const FixedContainer = ({
  styles,
  style = {},
  theme,
  htmlAttributes = {},
  backgroundColor,
  fixedPosition = FIXED_POSITIONS.bottom,
  width = '100%',
  height = '100%',
  children,
  ...props
}) => {
  const dynamicStyles = getStyles({backgroundColor, fixedPosition, width, height});
  const mergedStyles = {...dynamicStyles.FixedContainer, ...style};
  return (
    <div
      {...props}
      {...htmlAttributes}
      {...css(styles.FixedContainer)}
      style={mergedStyles}
    >
     {children}
   </div>
 );
};


FixedContainer.propTypes = {
  // Static styles
  styles: PropTypes.object,

  // Override the inline-styles of the root element
  style: PropTypes.object,

  // Attributes overwrite.
  htmlAttributes: PropTypes.object,

  // The backgroundColor of the container.
  backgroundColor: PropTypes.string,

  // Pass the numeric width and height to overwite 100%.
  width: PropTypes.number,
  height: PropTypes.number,

  // Where the container should attach to.
  fixedPosition: PropTypes.string,

  // Content inside the fixed container.
  children: PropTypes.node,
};

// Explicity declare the default props for documentation purpose,
// as we only hoist a limit set of statics
FixedContainer.defaultProps = {
  style: {},
  htmlAttributes: {},
  fixedPosition: FIXED_POSITIONS.bottom,
};

function getStyles({backgroundColor, fixedPosition, width, height}) {
  return {
    FixedContainer: {
      backgroundColor,
      [fixedPosition]: 0,
      width,
      height,
    }
  }
}

export default withStyles(({color, gradient, zIndex}) => ({
  FixedContainer: {
    position: 'fixed',
    zIndex: zIndex.fixedContainer
  },
}))(FixedContainer);
