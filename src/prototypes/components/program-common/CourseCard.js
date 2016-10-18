import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';

const CourseCard = ({name = 'CourseCard'}) => {
  return (
      <div className="rc-CourseCard card" style={{minHeight: 360}}>
         <h1>CourseCard {name}</h1>
      </div>
    );
};

export default CourseCard;
