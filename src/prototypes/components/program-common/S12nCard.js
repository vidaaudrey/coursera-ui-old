import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';

const S12nCard = ({name = 'S12nCard'}) => {
  return (
      <div className="rc-S12nCard card" style={{minHeight: 360}}>
         <h1>S12nCard {name}</h1>
      </div>
    );
};

export default S12nCard;
