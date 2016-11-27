import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');
import DraggableContainer from 'stories/support/DraggableContainer';

import ChessApp from 'stories/support/chess/ChessApp';

storiesOf('extended.Draggable', module)
  .addWithInfo(
    'DraggableContainer',
    `
      Usage

      ~~~js
      import { SmartScrollWrapper, SmartScrollWrapperResponsive } from 'coursera-ui';
      ~~~
    `,
    () => (
      <div className="container">
        <DraggableContainer />
      </div>
    ),
  )
  .addWithInfo(
    'Chess',
    `
      Usage

      ~~~js
      import { SmartScrollWrapper, SmartScrollWrapperResponsive } from 'coursera-ui';
      ~~~
    `,
    () => (
      <div className="container" style={{height: 500}}>
        <ChessApp />
      </div>
    ),
  )
