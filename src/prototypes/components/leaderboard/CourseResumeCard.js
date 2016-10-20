import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet, Button } from 'src';
const _ = require('underscore');
import withApiData from 'src/components/hocs/withApiData';
import {StaticLinearProgress} from 'src';


const BASE_URL = 'https://www.coursera.org/learn/';
const CourseResumeCard = ({
  style,
  styles,
  course,
  ...props
}) => {
  if (!course) return null;

  const {name, description, photoUrl, partnerIds} = course;

   return (
    <div {...cssWithClass('vertical-box p-a-1', styles.CourseResumeCard)}>
      <p>Finish the next module to gain more points!</p>
      <div className="horizontal-box align-items-right wrap">
        <a href={`${BASE_URL}${course.slug}/home/welcome`}>
        <Button type="primary" label={'Resume'}/>
        </a>
      </div>
    </div>
  );
};

const CourseWithApiData = withApiData({dataType: 'COURSE'})(CourseResumeCard);

export default withStyles(({color, gradient}) => ({
  CourseResumeCard: {
    backgroundColor: color.bgGray,
  },
}))(CourseWithApiData);
