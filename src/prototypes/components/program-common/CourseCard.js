import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';

const CourseCard = ({name = 'CourseCard'}) => {
  return (
      <div className="card vertical-box" style={{minHeight: 360}}>
        <img src="//placehold.it/200x120/A66506/FFFFFF" alt="CourseraAlt" style={{width: '100%'}} />
        <div className="main flex-1 vertical-box">
          <div className="content flex-1">
            <h1>{name}</h1>
            Lorem ipsum dolor sit.
          </div>
          <div className="footer horizontal-box align-items-spacebetween">
            <p>footer content</p>
            <button>button</button>
          </div>
        </div>
      </div>
    );
};

export default CourseCard;
