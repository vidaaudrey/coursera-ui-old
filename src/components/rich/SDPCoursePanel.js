import React, { PropTypes } from 'react';
import { Expandable } from 'src';
import _ from 'underscore';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, vero.';

const SDPCoursePanel = ({ index, course, ...rest }) => {
  return (
    <Expandable
      header={<b>{`Course ${index}: ${course.name}`}</b>}
      {...rest}
    >
      {course.description}
      {_.range(index).map(item => lorem)}
    </Expandable>
  );
};

module.exports = SDPCoursePanel;
