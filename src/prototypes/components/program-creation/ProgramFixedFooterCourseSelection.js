/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, font,
} = require('src/styles/theme');

import {Button} from 'src';
const _ = require('underscore');

const ProgramFixedFooterDomainSelection = ({
  onPrev, onNext,
  seatLimit, currentTotalSelectCount, selectedCourseIds, selectedS12nIds,
}) => {
  const availableSeats = seatLimit - currentTotalSelectCount;

  return (
    <div className="container horizontal-box align-items-spacebetween align-items-vertical-center h-100">
      <Button
        type="primary"
        size="sm"
        label={'Back'}
        htmlAttributes={{onClick: onPrev}}
      />

      <div className="horizontal-box">
        <b {...css(styles.numberSpan)}>{currentTotalSelectCount}</b>
        <span {...css(styles.textSpan)}>Selected</span>
        <b {...css(styles.numberSpan)}>{availableSeats > 0 ? availableSeats : seatLimit}</b>
        <span {...css(styles.textSpan)}>{availableSeats > 0 ? 'Available' : 'Total Available'}</span>
      </div>

      <Button
        type={'primary'}
        size="sm"
        label={'Preview'}
        htmlAttributes={{onClick: onNext}}
      />
    </div>
    );
};

module.exports = ProgramFixedFooterDomainSelection;

const styles = StyleSheet.create({
  numberSpan: {
    color: color.secondaryText,
    marginRight: spacing.sm,
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
});
