import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';


const LeaderProfileCard = ({styles, key, ...props}) => {

  return (
    <div {...cssWithClass('LeaderProfileCard border-a m-b-2', styles.LeaderProfileCard)}>
      <div className="vertical-box w-100">
        <div {...cssWithClass('vertical-box align-items-absolute-center m-b-2', styles.profileContainer)}>
          <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
        </div>
        <h3>Kara Behnke</h3>
        <div className="horizontal-box align-items-spacebetween wrap m-b-2">
          <div className="vertical-box align-items-vertical-center">
            <div className="display-2">274</div>
            <span className="text-uppercase">points</span>
          </div>
          <div className="vertical-box align-items-vertical-center">
            <div className="display-2">274</div>
            <span className="text-uppercase">points</span>
          </div>
          <div className="vertical-box align-items-vertical-center">
            <div className="display-2">274</div>
            <span className="text-uppercase">points</span>
          </div>
          <div className="vertical-box align-items-vertical-center">
            <div className="display-2">274</div>
            <span className="text-uppercase">points</span>
          </div>
        </div>
        <div className="current-course-container m-b-2">
          <h5 className="text-uppercase">Current Course</h5>
          <div className="horizontal-box m-b-1">
            <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
            <div className="vertical-box">
              <h4>Machine Learning</h4>
              <span>Standford University</span>
              <span>Progress Lorem ipsum dolor.</span>
            </div>
          </div>

        </div>

        <div className="current-course-container">
          <h5 className="text-uppercase">Accomplishments</h5>
          <div className="horizontal-box m-b-1">
            <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
            <div className="vertical-box">
              <h4>Dog Emotion and Cognition</h4>
              <span>Duke University</span>
              <span className="text-muted">Grade Achieved: 97.2%</span>
            </div>
          </div>
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
