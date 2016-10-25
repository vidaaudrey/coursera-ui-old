/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');
const _ = require('underscore');
import withApiMockData from 'src/components/hocs/withApiMockData';
import {StaticLinearProgress} from 'src';


const DEFAULT_COURSE_PHOTO_SIZE = 96;

const BASE_URL = 'https://www.s12nra.org/specialization/';

const S12nMiniCard = ({
  s12n,
  id,
  s12nPhotoSize = DEFAULT_COURSE_PHOTO_SIZE,
  children,
  ...props,
}) => {
  if (!s12n) return null;

  const {name, description, promoPhoto, courseIds, partnerIds, partnerName: mockName} = s12n;
  const partner = _(partnerIds.edges).first();
  const partnerName = partner && partner.node.name || mockName;
  const dynamicStyles = getStyles({s12nPhotoSize});

  return (
    <div className="horizontal-box CourseCard">
      <div className="horizontal-box align-items-top m-r-1" style={{minWidth: 100}}>
        <a href={`${BASE_URL}${s12n.slug}`}>
          <img src={promoPhoto} alt="CourseraAlt" className="border-a" style={dynamicStyles.s12nPhoto} />
        </a>
      </div>
      <div className="vertical-box flex-1">
        <h4 className="font-weight-normal m-b-0">{name}</h4>
        <span className="text-muted font-sm">{partnerName}</span>
        <span {...css(styles.courseCount)}>{`${_(courseIds).size()}-course-specialization`}</span>
      </div>
    </div>
  );
};

module.exports = withApiMockData({dataType: 'S12N'})(S12nMiniCard);

// Dynamic styles
function getStyles({s12nPhotoSize}) {
  return {
    StaticLinearProgress: {
      margin: 4,
      marginLeft: 0,
    },
    s12nPhoto: {
      width: s12nPhotoSize,
      height: s12nPhotoSize,
    },
  };
}

const styles = StyleSheet.create({
  S12nMiniCard: {
  },
  courseCount: {
    color: color.secondaryText,
    background: color.bgGray,
  },
});
