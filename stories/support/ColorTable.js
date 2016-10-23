/* eslint-disable no-param-reassign, no-use-before-define, max-len */
const React = require('react');
const _ = require('underscore');
const {
  cssWithClass, StyleSheet, css, color, transition,
} = require('src/styles/theme');
import {copyToClipboard} from 'src';
import ColorRow from './ColorRow';
const ColorRowWithCopy = copyToClipboard(ColorRow);


class ColorTable extends React.Component {

  handleCopied = (text) => {
    console.warn('--copied-', text);
    alert(`Copied: ${text}`);
  }

  render() {
    const {colors, name} = this.props;
    return (
      <div
        {...cssWithClass('col-xs-12 col-sm-6 col-md-4 col-lg-3 vertical-box m-b-1', styles.ColorTable)}
      >
        <div className="horizontal-box align-items-absolute-center p-t-1">
          <h3 className="text-uppercase">{name}</h3>
        </div>
        {_(colors).map((item, key) =>
          <ColorRowWithCopy
            key={`ColorRow~${key}`}
            colorName={key}
            colorCode={item}
            text={item}
            onCopy={this.handleCopied}
          />
        )}
      </div>
    );
  }
}

ColorTable.propTypes = {
  name: React.PropTypes.string,
  colors: React.PropTypes.object.isRequired,
};

module.exports = ColorTable;

const styles = StyleSheet.create({
  ColorTable: {
    minHeight: 300,
    transition: transition.easeOut(),
  },
});
