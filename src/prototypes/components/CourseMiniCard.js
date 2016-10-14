import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
const _ = require('underscore');
import withApiData from '../../components/hocs/withApiData';

const CARD_TYPES = {
  PROGRESS: 'PROGRESS',
  TOP_COURSE: 'TOP_COURSE',
  FINISHED_COURSE: 'FINISHED_COURSE',
}


const ProgressBar = ({progress = 0}) => {
  return (
      <div className="rc-ProgressBar">
        progress {progress}
      </div>
    );
};


const CourseMiniCard = ({
  styles,
  course,
  type = CARD_TYPES.PROGRESS,
  progress, grade, learnerCount,
  ...props
}) => {
  if (!course) return null;

  const {name, description, photoUrl, partnerIds} = course;
  const partner = _(partnerIds.edges).first();
  const partnerName = partner && partner.node.name;

   return (
    <div className="horizontal-box CourseCard border-a">
      <div className="vertical-box align-items-absolute-center" style={{minWidth: 100}}>
        <img src={photoUrl} alt="CourseraAlt" {...css(styles.coursePhoto)}/>
      </div>
      <div className="border-a vertical-box">
        <h4>{name}</h4>
        <span>{partnerName}</span>
        {type === CARD_TYPES.PROGRESS && typeof progress !== undefined &&
          <div>
            <span className="d-block font-sm text-uppercase">progress</span>
            <ProgressBar progress={progress}/>
          </div>
        }
        {type === CARD_TYPES.FINISHED_COURSE && typeof grade !== undefined &&
          <div>
            <span className="d-block font-sm">
              {`Grade Achieved: ${grade}%`}
            </span>
          </div>
        }
        {type === CARD_TYPES.TOP_COURSE && typeof learnerCount !== undefined &&
          <div>
            <span className="d-block font-sm">
              {`${learnerCount} learners enrolled`}
            </span>
          </div>
        }
      </div>
    </div>
  );
};

const CourseWithApiData = withApiData({dataType: 'COURSE'})(CourseMiniCard);

export default withStyles(({color, gradient}) => ({
  CourseMiniCard: {
  },
  coursePhoto: {
    width: 100,
    height: 100,
  }
}))(CourseWithApiData);
