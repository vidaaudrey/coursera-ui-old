import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';


const LeaderboardCard = ({styles, key, ...props}) => {

  return (
    <div {...cssWithClass('LeaderboardCard border-a row', styles.LeaderboardCard)}>
        <div className="col-xs-12 col-lg-2">
          <div className="vertical-box align-items-absolute-center h-100 w-100">
            <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
          </div>
        </div>

        <div className="col-xs-12 col-lg-8 border-a">
          <h3>April Pascua</h3>
          <span>2 Courses Completed</span>
          <label>Current Courses</label>
          <div className="horizontal-box CourseCard border-a">
            <div className="horizontal-box align-items-vertical-center">
              <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
            </div>
            <div className="border-a">
              <h4>Machine Learning</h4>
              <span>Standford University</span>
              <span>Lorem cessitatibus dolore aspernatur fuga amet eaque quia iusto.</span>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-lg-2 border-a">
          <div className="vertical-box align-items-absolute-center h-100 w-100">
            <span className="text-uppercase">Points</span>
            <h1>315</h1>
          </div>
        </div>
    </div>
  );
};


export default withStyles(({color, gradient}) => ({
  LeaderboardCard: {
    // width: '100%',
  }
}))(LeaderboardCard);
