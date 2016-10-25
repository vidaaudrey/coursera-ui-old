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
    display: 'inline-block',
  },
});
