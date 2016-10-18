import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';

const CourseCard = ({name = 'CourseCard'}) => {
  return (
      <div className="rc-CourseCard card" style={{minHeight: 360}}>
         <img src="//placehold.it/200x120/A66506/FFFFFF" alt="CourseraAlt" style={{width: '100%'}} />
         <h1>{name}</h1>
         Lorem ipsum dolor sit.
      </div>
    );
};

export default CourseCard;
