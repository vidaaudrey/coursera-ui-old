import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import CourseMiniCard from './CourseMiniCard';


const TopCoursesCard = ({styles, key, topCourses, ...props}) => {
  return (
    <div {...cssWithClass('TopCoursesCard m-b-2 card', styles.TopCoursesCard)}>
      <div className="vertical-box p-a-1">
        <h3 className="text-uppercase">Top Courses</h3>
        {topCourses.map((item, index) =>
          <div key={`TopCoursesCard~${item.id}`} className="m-b-1">
            <CourseMiniCard id={item.id} type={'TOP_COURSE'} learnerCount={item.count} />
          </div>
        )}
      </div>
    </div>
  );
};

export default withStyles(({color, gradient}) => ({
  TopCoursesCard: {
    width: '100%',
    minWidth: 320,
  },
  profileContainer: {
    background: `linear-gradient(90deg, ${gradient.secondary.start}, ${gradient.secondary.end})`,
    height: 300,
  }
}))(TopCoursesCard);
