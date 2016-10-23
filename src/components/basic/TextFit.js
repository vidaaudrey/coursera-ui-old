/* eslint-disable no-param-reassign, react/forbid-prop-types, no-use-before-define, max-len */
import React from 'react';
import Measure from 'react-measure';
const {
  cssWithClass, StyleSheet, css, transition,
} = require('src/styles/theme');

class TextFit extends React.Component {
  static propTypes = {
    // Override the inline-styles of the root element.
    style: React.PropTypes.object,
    // Override the inline-styles of the text.
    textStyle: React.PropTypes.object,
    // The text to be scaled.
    text: React.PropTypes.string,
    // The text provided as children to be scaled.
    children: React.PropTypes.node,
    // Lineheight in the format of percentage.
    lineHeightPercentage: React.PropTypes.number,
    // Default height for the first render.
    defaultHeight: React.PropTypes.number,
    // Default scale for the first render.
    defaultScale: React.PropTypes.number,
    // Where the text tranform is originated, default to 'left top'.
    transformOrigin: React.PropTypes.string,

    // Use this to micro-adjust the textSize. Default to 1,
    containerTextAdjustmentRatio: React.PropTypes.number,
  }
  static defaultProps = {
    style: {},
    defaultScale: 1,
    defaultHeight: 16,
    transformOrigin: 'left top',
    containerTextAdjustmentRatio: 1,
    lineHeightPercentage: 100,
  }

  getTextScale = (containerWidth) => {
    const {
      defaultHeight, defaultScale, containerTextAdjustmentRatio, lineHeightPercentage,
    } = this.props;
    if (this.textRef) {
      const scale = (containerWidth * containerTextAdjustmentRatio) / this.textRef.offsetWidth;
      const newHeight = this.textRef.offsetHeight *
        scale *
        lineHeightPercentage *
        0.01;
      return {scale, height: newHeight};
    }
    return {scale: defaultScale, height: defaultHeight};
  }

  render() {
    const {
      style, textStyle, text, children, transformOrigin, lineHeightPercentage,
    } = this.props;
    return (
      <Measure>
        {(dimensions) => {
          const {scale, height} = this.getTextScale(dimensions.width);
          return (
            <div
              {...css(styles.TextFit)}
              style={{height, ...style}}
            >
              <div
                ref={c => (this.textRef = c)}
                {...css(styles.text)}
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin,
                  msTransformOrigin: transformOrigin,
                  WebkitTransformOrigin: transformOrigin,
                  lineHeight: `${lineHeightPercentage}%`,
                  ...textStyle,
                }}
              >
                {text}
                {children}
              </div>
            </div>
          );
        }}
      </Measure>
    );
  }
}

//
// const {
//  StyleSheet, color, css,
// } = require('src/styles/theme');
//
//
// const TextFit = ({
//   style = {},
//   htmlAttributes = {},
//   imgSrc,
//   imgAlt = 'TextFit',
//   iconName,
//   backgroundColor,
//   color: propColor,
//   children,
//   size = 44,
//   ...props,
// }) => {
//   const dynamicStyles = getStyles({size, backgroundColor, propColor});
//   const mergedStyles = {...dynamicStyles.TextFit, ...style};
//   if (imgSrc) {
//     return (
//       <img
//         {...htmlAttributes}
//         {...css(styles.TextFit)}
//         style={mergedStyles}
//         src={imgSrc}
//         role="presentation"
//       />
//     );
//   }
//   return (
//     <div
//       {...htmlAttributes}
//       {...css(styles.TextFit)}
//       style={mergedStyles}
//     >
//       {children}
//     </div>
//  );
// };
//
//
// TextFit.propTypes = {
//   // Override the inline-styles of the root element
//   style: PropTypes.object,
//
//   // Attributes overwrite.
//   htmlAttributes: PropTypes.object,
//
//   // The backgroundColor of the avatar. Does not apply to image avatars.
//   backgroundColor: PropTypes.string,
//
//   // Can use to letters inside the avatar.
//   children: PropTypes.node,
//
//   // The icon or letter's color.
//   color: PropTypes.string,
//
//   // The size of the avatar in pixels
//   size: PropTypes.number,
//
//   // If passed in, the component will render an img element. Otherwise, a div will be rendered.
//   imgSrc: PropTypes.string,
//
//   imgAlt: PropTypes.string,
//
//   iconName: PropTypes.string,
//
//   // If passed in, the component will render an img element. Otherwise, a div will be rendered.
//   // bordered: PropTypes.bool,
//   // shadow: PropTypes.bool
// };
//
// // Explicity declare the default props for documentation purpose,
// // as we only hoist a limit set of statics
// TextFit.defaultProps = {
//   style: {},
//   htmlAttributes: {},
//   imgAlt: 'TextFit',
//   size: 44,
// };
//
// // Dynamic styles
// function getStyles({size, backgroundColor, propColor}) {
//   return {
//     TextFit: {
//       backgroundColor,
//       propColor,
//       fontSize: size / 2,
//       height: size,
//       width: size,
//     },
//     icon: {
//       width: size * 0.6,
//       height: size * 0.6,
//       fontSize: size * 0.6,
//       margin: size * 0.2,
//     },
//   };
// }

module.exports = TextFit;

const styles = StyleSheet.create({
  TextFit: {
    transition: transition.easeOut(),
    display: 'block',
    width: '100%',
  },
  text: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    // fontSize: 16,
    display: 'inline-block',
  },
});
