import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import CourseMiniCard from './CourseMiniCard';


const LeaderProfileCard = ({styles, key, leaderboard, ...props}) => {
  const {userName, numCoursesCompleted, rank, score, currentCourse, courseId} = leaderboard;
  console.warn('---', leaderboard);
  return (
    <div {...cssWithClass('LeaderProfileCard border-a m-b-2', styles.LeaderProfileCard)}>
      <div className="vertical-box w-100 card">
        <div {...cssWithClass('vertical-box align-items-absolute-center m-b-2', styles.profileContainer)}>
          <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
        </div>
        <h3>{userName}</h3>
        <div className="horizontal-box align-items-spacebetween wrap m-b-2">
          <div className="vertical-box align-items-vertical-center">
            <div className="display-2">{score}</div>
            <span className="text-uppercase font-sm">points</span>
          </div>
          <div className="vertical-box align-items-vertical-center">
            <div className="display-2">{rank}</div>
            <span className="text-uppercase font-sm">ranking</span>
          </div>
          <div className="vertical-box align-items-vertical-center">
            <div className="display-2">{numCoursesCompleted}</div>
            <span className="text-uppercase font-sm">completed</span>
          </div>
          <div className="vertical-box align-items-vertical-center">
            <div className="display-2">2</div>
            <span className="text-uppercase font-sm">enrolled</span>
          </div>
        </div>
        <div className="current-course-container m-b-2">
          <h5 className="text-uppercase">Current Course</h5>
          <CourseMiniCard id={courseId}/>
        </div>

        <div className="finished-course-container m-b-2">
          <h5 className="text-uppercase">Accomplishments</h5>
          <CourseMiniCard id={courseId} type={'FINISHED_COURSE'} grade={21} />
        </div>
      </div>

    </div>
  );
};


export default withStyles(({color, gradient}) => ({
  LeaderProfileCard: {
    width: '100%',
  },
  profileContainer: {
    background: `linear-gradient(90deg, ${gradient.secondary.start}, ${gradient.secondary.end})`,

    height: 300,
  }
}))(LeaderProfileCard);
