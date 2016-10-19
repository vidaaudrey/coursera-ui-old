import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
const _ = require('underscore');
import withApiData from '../../../components/hocs/withApiData';
import {StaticLinearProgress} from 'src';

const CARD_TYPES = {
  PROGRESS: 'PROGRESS',
  TOP_COURSE: 'TOP_COURSE',
  FINISHED_COURSE: 'FINISHED_COURSE',
}
const DEFAULT_COURSE_PHOTO_SIZE = 96;

const BASE_URL = 'https://www.coursera.org/learn/';
const CourseMiniCard = ({
  styles,
  course,
  type = CARD_TYPES.PROGRESS,
  coursePhotoSize = DEFAULT_COURSE_PHOTO_SIZE,
  progress, grade, learnerCount,
  ...props
}) => {
  if (!course) return null;

  const {name, description, photoUrl, partnerIds} = course;
  const partner = _(partnerIds.edges).first();
  const partnerName = partner && partner.node.name;
  const dynamicStyles = getStyles({coursePhotoSize});

   return (
    <div className="horizontal-box CourseCard">
      <div className="horizontal-box align-items-top m-r-1" style={{minWidth: 100}}>
        <a href={`${BASE_URL}${course.slug}/home/welcome`}>
          <img src={photoUrl} alt="CourseraAlt" className="border-a" style={dynamicStyles.coursePhoto} />
        </a>
      </div>
      <div className="vertical-box flex-1">
        <h4 className="font-weight-normal m-b-0">{name}</h4>
        <span className="text-muted font-sm">{partnerName}</span>

        {type === CARD_TYPES.PROGRESS && typeof progress !== undefined &&
          <div className="m-t-auto">
            <strong className="d-block font-sm text-uppercase">progress</strong>
            <StaticLinearProgress progress={30} style={dynamicStyles.StaticLinearProgress} color="#37bc9b" />
          </div>
        }
        {type === CARD_TYPES.FINISHED_COURSE && typeof grade !== undefined &&
          <div className="m-t-auto">
            <span className="d-block font-sm">
              {`Grade Achieved: ${grade}%`}
            </span>
          </div>
        }
        {type === CARD_TYPES.TOP_COURSE && typeof learnerCount !== undefined &&
          <div className="m-t-auto">
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

// Dynamic styles
function getStyles({coursePhotoSize}) {
  return {
    StaticLinearProgress: {
      margin: 4,
      marginLeft: 0,
    },
    coursePhoto: {
      width: coursePhotoSize,
      height: coursePhotoSize,
    },
  }
}

export default withStyles(({color, gradient}) => ({
  CourseMiniCard: {
  },
  StaticLinearProgress: {
    margin: 8,
    marginLeft: 0,
  },
}))(CourseWithApiData);
