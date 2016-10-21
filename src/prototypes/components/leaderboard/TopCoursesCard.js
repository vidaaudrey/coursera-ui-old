/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import CourseMiniCard from 'src/prototypes/components/leaderboard/CourseMiniCard';


const TopCoursesCard = ({topCourses}) => {
  return (
    <div {...cssWithClass('TopCoursesCard m-b-2 card', styles.TopCoursesCard)}>
      <div className="vertical-box p-a-1">
        <h3 className="text-uppercase">Top Courses</h3>
        {topCourses.map(item =>
          <div key={`TopCoursesCard~${item.id}`} className="m-b-1">
            <CourseMiniCard id={item.id} type={'TOP_COURSE'} learnerCount={item.count} />
          </div>
        )}
      </div>
    </div>
  );
};

module.exports = TopCoursesCard;

const styles = StyleSheet.create({
  TopCoursesCard: {
    width: '100%',
    minWidth: 320,
  },
  profileContainer: {
    background: `linear-gradient(90deg, ${gradient.secondary.start}, ${gradient.secondary.end})`,
    height: 300,
  },
});
