import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Button} from 'src';
const _ = require('underscore');

const ProgramFixedFooterDomainSelection = ({
  styles, totalSeats, courseIds, s12nIds, onNext
}) => {
  console.warn('-ProgramFixedFooterDomainSelection--', totalSeats );
  const selectedSize = _(courseIds).size();
  const availableSeats = totalSeats - selectedSize;
  return (
    <div className="container horizontal-box align-items-spacebetween align-items-vertical-center h-100">
      <div className="horizontal-box">
        <b {...css(styles.numberSpan)}>{selectedSize}</b>
        <span {...css(styles.textSpan)}>Selected</span>
        <b {...css(styles.numberSpan)}>{availableSeats}</b>
        <span {...css(styles.textSpan)}>Available</span>
      </div>

      <Button
        type="primary"
        size="xs"
        label={'Next'}
        htmlAttributes={{onClick: onNext}}
      />
    </div>
    );
};

export default withStyles(({color, spacing, font}) => ({
  numberSpan: {
    color: color.secondaryText,
    marginRight: spacing.xs,
    fontSize: font.lg,
    lineHeight: font.lg,
  },
  textSpan: {
    color: color.secondaryText,
    textTransform: 'uppercase',
    marginBottom: 0,
    marginRight: spacing.lg,
    lineHeight: font.lg,
  },
}))(ProgramFixedFooterDomainSelection);
