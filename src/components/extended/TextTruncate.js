// Based on https://github.com/ShinyChang/react-text-truncate
/* eslint-disable no-plusplus, react/forbid-prop-types */
import React, { PropTypes, Component } from 'react';
import { css, StyleSheet } from 'src/styles/theme';
import { pure } from 'recompose';

const styles = StyleSheet.create({
  TextTruncate: {
    overflow: 'hidden',
  },
});

class TextTruncate extends Component {
  static propTypes = {
    htmlAttributes: PropTypes.object,
    textAttributes: PropTypes.object,
    line: PropTypes.number,
    text: PropTypes.string,
    textTruncateChild: PropTypes.node,
    truncateText: PropTypes.string,
  };

  static defaultProps = {
    htmlAttributes: {},
    textAttributes: {},
    line: 1,
    text: '',
    truncateText: '…',
  };

  componentDidMount() {
    const canvas = document.createElement('canvas');
    const docFragment = document.createDocumentFragment();
    const style = window.getComputedStyle(this.scopeRef);
    const font = [
      style['font-weight'],
      style['font-style'],
      style['font-size'],
      style['font-family'],
    ].join(' ');

    docFragment.appendChild(canvas);
    this.canvas = canvas.getContext('2d');
    this.canvas.font = font;
    this.forceUpdate();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    window.requestAnimationFrame(this.update.bind(this));
  };

  getRenderText = () => {
    const {
      line,
      text,
      textTruncateChild,
      truncateText,
      textAttributes,
      htmlAttributes,
      ...rest
    } = this.props;

    const scopeWidth = this.scopeRef.getBoundingClientRect().width;

    // return if display:none
    if (scopeWidth === 0) {
      return null;
    }

    // return if all of text can be displayed
    if (scopeWidth >= this.measureWidth(text)) {
      return (
        <div {...textAttributes} {...rest}>{text}</div>
      );
    }

    let childText = '';
    if (textTruncateChild && typeof textTruncateChild.type === 'string') {
      const type = textTruncateChild.type;
      if (type.indexOf('span') >= 0 || type.indexOf('a') >= 0) {
        childText = textTruncateChild.props.children;
      }
    }

    let currentPos = 1;
    const maxTextLength = text.length;
    let truncatedText = '';
    let splitPos = 0;
    let startPos = 0;
    let displayLine = line;
    let width = 0;
    let lastIsEng = false;
    let lastSpaceIndex = -1;

    while (displayLine--) {
      const ext = displayLine ? '' : `${truncateText} ${childText}`;
      while (currentPos <= maxTextLength) {
        truncatedText = text.substr(startPos, currentPos);
        width = this.measureWidth(truncatedText + ext);
        if (width < scopeWidth) {
          splitPos = text.indexOf(' ', currentPos + 1);
          if (splitPos === -1) {
            currentPos += 1;
            lastIsEng = false;
          } else {
            lastIsEng = true;
            currentPos = splitPos;
          }
        } else {
          do {
            currentPos--;
            truncatedText = text.substr(startPos, currentPos);
            if (truncatedText[truncatedText.length - 1] === ' ') {
              truncatedText = text.substr(startPos, currentPos - 1);
            }
            if (lastIsEng) {
              lastSpaceIndex = truncatedText.lastIndexOf(' ');
              if (lastSpaceIndex > -1) {
                currentPos = lastSpaceIndex;
                truncatedText = text.substr(startPos, currentPos);
              }
            }
            width = this.measureWidth(truncatedText + ext);
          } while (width >= scopeWidth);
          startPos += currentPos;
          break;
        }
      }

      if (currentPos >= maxTextLength) {
        startPos = maxTextLength;
        break;
      }
    }

    if (startPos === maxTextLength) {
      return (
        text
      );
    }

    return (
      <div {...textAttributes} {...rest}>
        {text.substr(0, startPos) + truncateText + ' '}
        {textTruncateChild}
      </div>
    );
  }

  update = () => {
    this.forceUpdate();
  };

  measureWidth = (text) => {
    return this.canvas.measureText(text).width;
  }

  render() {
    const {
      text,
      htmlAttributes,
    } = this.props;

    let renderText = text;
    if (this.scopeRef) {
      renderText = this.getRenderText();
    }

    return (
      <div {...htmlAttributes} ref={r => (this.scopeRef = r)} {...css(styles.TextTruncate)}>
        {renderText}
      </div>
    );
  }
}

module.exports = pure(TextTruncate);
