/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import CourseMiniCard from 'src/prototypes/components/leaderboard/CourseMiniCard';
import CourseResumeCard from 'src/prototypes/components/leaderboard/CourseMiniCard';

import {Avatar} from 'src';

const AVATAR_SIZE = 128;

const LeaderProfileCard = ({key, leaderboard, ...props}) => {
  const {userName, numCoursesCompleted, rank, score, courseId, profilePhoto} = leaderboard;
  const statsRowData = [{
    label: 'points',
    number: score,
  }, {
    label: 'ranking',
    number: rank,
  }, {
    label: 'complete',
    number: numCoursesCompleted,
  }, {
    label: 'enrolled',
    number: 2,
  }];

  return (
    <div {...cssWithClass('LeaderProfileCard m-b-2', styles.LeaderProfileCard)}>
      <div className="vertical-box w-100 card">
        <div {...cssWithClass('vertical-box align-items-absolute-center', styles.profileContainer)}>
          <div {...css(styles.AvatarWrapper)}>
            {profilePhoto &&
              <Avatar imgSrc={profilePhoto} size={AVATAR_SIZE} bordered />
            }
          </div>
        </div>
        <div className="p-a-1">
          <h3>{userName}</h3>
          <div className="horizontal-box align-items-spacebetween wrap m-b-2">
            {statsRowData.map((item, index) => (
              <div className="vertical-box align-items-absolute-center" key={`stats-row~${index}`}>
                <span {...css(styles.stats)}>{item.number}</span>
                <small className="text-uppercase font-xs">{item.label}</small>
              </div>
            ))}
          </div>
          <div className="current-course-container m-b-2">
            <label htmlFor="Current Course" className="text-uppercase font-sm font-weight-bold">Current Courses</label>
            <div className="m-b-1">
              <CourseMiniCard id={courseId} />
            </div>
            <CourseResumeCard id={courseId} />
          </div>

          <div className="finished-course-container m-b-1">
            <label htmlFor="Accomplishments" className="text-uppercase font-sm font-weight-bold">Accomplishments</label>
            <CourseMiniCard id={courseId} type={'FINISHED_COURSE'} grade={21} />
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = LeaderProfileCard;

const styles = StyleSheet.create({
  LeaderProfileCard: {
    width: '100%',
    minWidth: 320,
  },
  profileContainer: {
    background: `linear-gradient(90deg, ${gradient.secondary.start}, ${gradient.secondary.end})`,
    height: 200,
    margin: -1,
  },
  stats: {
    color: color.primary,
    fontSize: 36,
    fontWeight: 'normal',
  },
  AvatarWrapper: {
    width: 132,
    height: 132,
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, .8)',
  },
});
