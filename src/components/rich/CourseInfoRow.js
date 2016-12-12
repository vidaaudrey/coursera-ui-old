/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, { PropTypes, Component } from 'react';
import {
  css, cssWithClass, StyleSheet, color, spacing, transition, fontFamily, font,
} from 'src/styles/theme';

import { compose, pure } from 'recompose';

const CourseInfoRow = ({ icon, title, subtitle, children }) => {
  return (
    <div {...cssWithClass('horizontal-box', styles.S12nInfoRow)}>
      <div className="horizontal-box align-items-vertical-center p-a-1">
        {icon}
      </div>
      <div {...cssWithClass('horizontal-box align-items-vertical-center flex-1', styles.mainContainer)}>
        <div className="vertical-box">
          <div {...css(styles.title)}>{title}</div>
          <div {...css(styles.subtitle)}>{subtitle}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

CourseInfoRow.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  // Useful to display arrow, links, button at the right side
  children: PropTypes.node,
};

module.exports = CourseInfoRow;

const styles = StyleSheet.create({
  S12nInfoRow: {
    transition: transition.easeOut(),
    borderBottom: `1px solid ${color.divider}`,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
  },
  title: {
    fontWeight: 'bold',
    fontSize: font.sm,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: font.sm,
  },
});
