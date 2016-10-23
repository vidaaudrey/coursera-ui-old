/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const _ = require('underscore');
import withApiData from 'src/components/hocs/withApiData';
import {StaticLinearProgress} from 'src';

const CARD_TYPES = {
  PROGRESS: 'PROGRESS',
  TOP_COURSE: 'TOP_COURSE',
  FINISHED_COURSE: 'FINISHED_COURSE',
  CUSTOM_CHILDREN: 'CUSTOM_CHILDREN',
};
const DEFAULT_COURSE_PHOTO_SIZE = 96;
const BASE_URL = 'https://www.coursera.org/learn/';

const CourseMiniCard = ({
  course,
  type = CARD_TYPES.PROGRESS,
  coursePhotoSize = DEFAULT_COURSE_PHOTO_SIZE,
  progress, grade, learnerCount,
  children,
}) => {
  if (!course) return null;

  const {name, photoUrl, partnerIds, partnerName: mockName} = course;
  const partner = _(partnerIds.edges).first();
  const partnerName = partner && partner.node.name || mockName;
  const dynamicStyles = getStyles({coursePhotoSize});

  return (
    <div className="horizontal-box CourseCard">
      <div>
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
        {type === CARD_TYPES.CUSTOM_CHILDREN &&
          <div className="m-t-auto">
            {children}
          </div>
        }

      </div>
    </div>
  );
};

CourseMiniCard.propTypes = {
  course: React.PropTypes.object.isRequired,
  progress: React.PropTypes.number,
  grade: React.PropTypes.number,
  learnerCount: React.PropTypes.number,
  children: React.PropTypes.node,
};

module.exports = withApiData({dataType: 'LEADER_COURSE'})(CourseMiniCard);

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
  };
}

const styles = StyleSheet.create({
  CourseMiniCard: {
    minWidth: 320
  },

  StaticLinearProgress: {
    margin: 8,
    marginLeft: 0,
  },
});
