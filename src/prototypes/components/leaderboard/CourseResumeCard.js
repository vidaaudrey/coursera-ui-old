import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const _ = require('underscore');
import withApiMockData from 'src/components/hocs/withApiMockData';
import {StaticLinearProgress, Button} from 'src';


const BASE_URL = 'https://www.coursera.org/learn/';
const CourseResumeCard = ({
  style,
  course,
  ...props,
}) => {
  if (!course) return null;

  const {description, photoUrl, partnerIds} = course;

  return (
    <div {...css('vertical-box p-a-1', styles.CourseResumeCard)}>
      <p>Finish the next module to gain more points!</p>
      <div className="horizontal-box align-items-right wrap">
        <a href={`${BASE_URL}${course.slug}/home/welcome`}>
          <Button type="primary" label={'Resume'} />
        </a>
      </div>
    </div>
  );
};

const CoursewithApiMockData = withApiMockData({dataType: 'COURSE'})(CourseResumeCard);

module.exports = CoursewithApiMockData;

const styles = StyleSheet.create({
  CourseResumeCard: {
    backgroundColor: color.bgGray,
  },
});
