import React, { PropTypes } from 'react';
import {
  css, cssWithClass, StyleSheet, color, spacing, transition, fontFamily, font,
} from 'src/styles/theme';

const styles = StyleSheet.create({
  TogglableText: {
    maxHeight: 300,
  },
});

const TogglableText = ({ text, children }) => {
  return (
    <div {...css(styles.TogglableText)}>
      {text}
      {children}
    </div>
  );
};

TogglableText.propTypes = {
  text: PropTypes.string,
};

module.exports = TogglableText;
