import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
const _ = require('underscore');

/**
 * In some occasions, if any of the selectedCourseIds doesn't contain the whole s12nCourseIds
 * We'll deselect the S12nCard, and thus lose any other courses within the s12n as selected
*/
const S12nCard = ({
  name = 'S12nCard',
  id,
  courseIds = [1, 2],
  isSelected,
  onToggleS12nSelect
}) => {

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
          <button onClick={() => (onToggleS12nSelect(id, !isSelected, courseIds))}>
            {isSelected ? 'Deselect' : 'Select'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default S12nCard;
