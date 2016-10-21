/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import {S12nCard} from 'src';
import { SvgCheckOutline } from 'src/components/svg/coursera';
const _ = require('underscore');

const LayeredS12nCard = ({id, ...props}) => {
  return (
    <div {...cssWithClass('vertical-box', styles.LayeredS12nCard)}>
      <S12nCard id={id} {...props} />
      <div {...css(styles.layers)}>
        <div {...css(styles.firstLayer)} />
        <div {...css(styles.secondLayer)} />
      </div>
    </div>
  );
};

// Add this for documentation
LayeredS12nCard.propTypes = {
  id: React.PropTypes.string.isRequired,
};

LayeredS12nCard.defaultProps = {
  id: 's1', // Remove later
};

module.exports = LayeredS12nCard;

const styles = StyleSheet.create({
  LayeredS12nCard: {
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
