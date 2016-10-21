import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet, S12nCard } from 'src';
import { SvgCheckOutline } from '../svg/coursera';
const _ = require('underscore');

const LayeredS12nCard = ({styles, id, onToggleS12nSelect}) => {
  return (
    <div {...cssWithClass('vertical-box', styles.LayeredS12nCard)}>
      <S12nCard id={id} onToggleS12nSelect={onToggleS12nSelect} />
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
  onToggleS12nSelect: React.PropTypes.func.isRequired,
};

LayeredS12nCard.defaultProps = {
  id: 's1', // Remove later
};


export default withStyles(({color, font, spacing}) => ({
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
}))(LayeredS12nCard);
