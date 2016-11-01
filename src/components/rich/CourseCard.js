/* eslint-disable no-param-reassign, no-use-before-define, max-len */

import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition, font,
} = require('src/styles/theme');

import { SvgCheckOutline } from 'src/components/svg/coursera';
import withApiMockData from 'src/components/hocs/withApiMockData';
import {compose, pure} from 'recompose';

const CourseCard = ({
  course, isSelected, id, onToggleCourseSelect,
}) => {
  const {name, photoUrl, partnerIds, partnerName = 'John Hopken '} = course;
  const iconColor = isSelected ? color.primary : color.icon;

  return (

    <div {...cssWithClass('vertical-box card m-b-1', styles.CourseCard)}>
      <img
        src={photoUrl}
        alt="CourseraAlt"
        {...css(styles.courseImage)}
      />
      <div className="flex-1 vertical-box p-a-1 p-b-0">
        <div className="content flex-1">
          <h3 {...css(styles.title)}>{name}</h3>
          <span {...css(styles.subtitle)}>{partnerName}</span>
        </div>
        <div
          {...cssWithClass('horizontal-box align-items-vertical-center align-items-right', styles.cardSelect)}
        >
          {!isSelected &&
            <span {...css(styles.selectText)}> Not Selected </span>
          }
          <button
            {...css(styles.iconButton, styles.iconButtonFocus)}
            onClick={() => (onToggleCourseSelect(id, !isSelected))}
          >
            <SvgCheckOutline
              size={24}
              color={iconColor}
              hoverColor={iconColor}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  id: React.PropTypes.string.isRequired,
  onToggleCourseSelect: React.PropTypes.func.isRequired,
};

CourseCard.defaultProps = {
  id: 'c1', // Remove later
};

// const CourseCardwithApiMockData = withApiMockData({
//   dataType: 'COURSE',
// })(CourseCard);

module.exports = compose(
  withApiMockData({
    dataType: 'COURSE',
  }),
  pure,
)(CourseCard);

const styles = StyleSheet.create({
  CourseCard: {
    minHeight: 368,
    maxWidth: 480,
  },
  cardSelect: {
    color: color.secondaryText,
    fontSize: font.xs,
  },
  courseImage: {
    height: 120,
    width: '100%',
  },
  iconButton: {
    padding: 0,
    height: 24,
    backgroundColor: 'transparent',
    border: 'none',
  },
  iconButtonFocus: {
    ':focus': {
      outline: 'none',
    },
  },
  selectText: {
    color: color.darkGray,
    paddingRight: spacing.sm,
    marginLeft: `-${spacing.sm}`,
  },
  subtitle: {
    color: color.secondaryText,
    fontSize: font.sm,
  },
  title: {
    marginBottom: 0,
  },
});
