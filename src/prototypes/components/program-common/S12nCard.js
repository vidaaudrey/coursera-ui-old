import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';

const S12nCard = ({name = 'S12nCard'}) => {
  return (
      <div className="rc-S12nCard card" style={{minHeight: 360}}>
        <img src="//placehold.it/200x100/A66506/FFFFFF" alt="CourseraAlt" style={{width: '100%'}} />
        <h1>{name}</h1>
         Lorem ipsum dolor.
      </div>
    );
};

export default S12nCard;
