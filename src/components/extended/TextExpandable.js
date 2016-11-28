// Based on https://github.com/ShinyChang/react-text-truncate
import React, { Component, PropTypes } from 'react';
import TextTruncate from 'src/components/extended/TextTruncate';

class TextExpandable extends Component {
  static propTypes = {
    isExpanded: PropTypes.bool,
    textTruncateAttributes: PropTypes.shape({
      containerClassName: PropTypes.string,
      line: PropTypes.number,
      text: PropTypes.string,
      textTruncateChild: PropTypes.node,
      truncateText: PropTypes.string,
    }),
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      isExpanded: props.isExpanded || false,
    };
  }

  render() {
    const {textTruncateAttributes, }
    return (
      <div>
        <TextTruncate {...textTruncateAttributes} />
      </div>
    );
  }
}

module.exports = TextExpandable;
