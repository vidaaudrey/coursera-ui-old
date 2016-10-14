import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import CourseMiniCard from './CourseMiniCard';

const LeaderboardCard = ({
  styles, key,
  leaderboard: {userName, numCoursesCompleted, rank, score, currentCourse, courseId},
  ...props
}) => {

  return (
    <div {...cssWithClass('LeaderboardCard border-a row card', styles.LeaderboardCard)}>
        <div className="col-xs-12 col-lg-2 vertical-box align-items-absolute-center">
          <div className="text-xs-center">
            <img src="//placehold.it/60x60/A66506/FFFFFF" alt="CourseraAlt" />
          </div>
        </div>

        <div className="col-xs-12 col-lg-8">
          <h3>{userName}</h3>
          <span className="d-block">{numCoursesCompleted} Courses Completed</span>
          <label className="text-uppercase">Current Courses</label>
          <CourseMiniCard id={courseId}/>
        </div>

        <div className="col-xs-12 col-lg-2 vertical-box align-items-absolute-center">
          <div className="text-xs-center">
            <span className="text-uppercase">Points</span>
            <h1>{score}</h1>
          </div>
        </div>
    </div>
  );
};


export default withStyles(({color, gradient}) => ({
  LeaderboardCard: {
  }
}))(LeaderboardCard);
