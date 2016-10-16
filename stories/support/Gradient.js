import React from 'react';
import {gradients} from 'src';
const _ = require('underscore');
import GradientCell from './GradientCell';

const {
    strawberry, peach, pear, kiwi, sea, coursera, blueberry, grape
} = gradients;

export default class Gradient extends React.Component {

  render() {

    return (
      <div className="Gradient w-100">
        <div className="color-list-container container-fluid">
          <div className="row m-b-3 p-a-1">
            {_(gradients).map((item, key) =>
              <GradientCell name={key} key={`GradientCell~${key}`} gradient={item}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}
