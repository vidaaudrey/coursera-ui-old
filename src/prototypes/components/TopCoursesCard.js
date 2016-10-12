import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';


const LeaderProfileCard = ({styles, key, ...props}) => {

  return (
    <div {...cssWithClass('LeaderProfileCard border-a m-b-2', styles.LeaderProfileCard)}>
      <div className="vertical-box">
        <h3 className="text-uppercase">Current Course</h3>
        <div className="horizontal-box m-b-1">
          <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
          <div className="vertical-box">
            <h4>Machine Learning</h4>
            <span>Standford University</span>
            <span>Progress Lorem ipsum dolor.</span>
          </div>
        </div>
      </div>
      <div className="horizontal-box m-b-1">
        <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
        <div className="vertical-box">
          <h4>Machine Learning</h4>
          <span>Standford University</span>
          <span>Progress Lorem ipsum dolor.</span>
        </div>
      </div>
      <div className="horizontal-box m-b-1">
        <img src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
        <div className="vertical-box">
          <h4>Machine Learning</h4>
          <span>Standford University</span>
          <span>Progress Lorem ipsum dolor.</span>
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
