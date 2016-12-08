/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, { PropTypes } from 'react';
import {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition, font,
} from 'src/styles/theme';

import {S12nCard} from 'src';

const S12nCardWithLayer = props =>
  <div {...cssWithClass('vertical-box', styles.S12nCardWithLayer)}>
    <S12nCard {...props} />
    <div {...css(styles.layers)}>
      <div {...css(styles.firstLayer)} />
      <div {...css(styles.secondLayer)} />
    </div>
  </div>;


module.exports = S12nCardWithLayer;

const styles = StyleSheet.create({
  S12nCardWithLayer: {
    marginBottom: spacing.md,
    maxWidth: 560,
    minHeight: 416,
  },
  firstLayer: {
    borderColor: color.divider,
    borderWidth: '0px 1px 1px 1px',
    borderStyle: 'solid',
    height: 8,
    margin: '0px 10px',
  },
  secondLayer: {
    borderColor: color.divider,
    borderWidth: '0px 1px 1px 1px',
    borderStyle: 'solid',
    height: 6,
    margin: '0px 20px',
  },
  layers: {
    marginTop: `-${spacing.md}`,
  },
});
