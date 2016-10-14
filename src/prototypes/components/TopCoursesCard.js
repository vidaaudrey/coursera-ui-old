import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import CourseMiniCard from './CourseMiniCard';


const TopCoursesCard = ({styles, key, topCourses, ...props}) => {
    console.warn('-topCourses--', topCourses);
  return (
    <div {...cssWithClass('TopCoursesCard border-a m-b-2 card', styles.TopCoursesCard)}>
      <div className="vertical-box">
        <h3 className="text-uppercase">Top Courses</h3>
        {topCourses.map((item, index) =>
          <CourseMiniCard id={item.id} type={'TOP_COURSE'} learnerCount={item.count} />
        )}
      </div>
    </div>
  );
};


export default withStyles(({color, gradient}) => ({
  TopCoursesCard: {
    width: '100%',
  },
  profileContainer: {
    background: `linear-gradient(90deg, ${gradient.secondary.start}, ${gradient.secondary.end})`,

    height: 300,
  }
}))(TopCoursesCard);
