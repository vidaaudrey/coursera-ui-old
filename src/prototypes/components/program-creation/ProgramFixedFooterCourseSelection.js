import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Button} from 'src';
const _ = require('underscore');

const ProgramFixedFooterDomainSelection = ({
  styles, onPrev, onNext,
  seatLimit, currentTotalSelectCount, selectedCourseIds, selectedS12nIds
}) => {
  const availableSeats = seatLimit - currentTotalSelectCount;

  return (
    <div className="container horizontal-box align-items-spacebetween align-items-vertical-center h-100">
      <Button
        type="primary"
        size="xs"
        label={'Back'}
        htmlAttributes={{onClick: onPrev}}
      />
      <div className="horizontal-box">
        <b {...css(styles.numberSpan)}>{currentTotalSelectCount}</b>
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
