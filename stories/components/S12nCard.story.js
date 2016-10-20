import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { S12nCard, LayeredS12nCard, CourseCard } from 'src';

storiesOf('rich.coursera', module)
.addWithInfo(
  'S12nCard',
  `
  Button with size, type, label and children
  ~~~js
  import { S12nCard } from 'coursera-ui';
  <S12nCard id={'s1'} onToggleS12nSelect={action('onToggleS12nSelect')}/>
  ~~~
  `,
  () => (
    <div className="row">
      <div className="col-md-6">
        <S12nCard id={'s1'} onToggleS12nSelect={action('onToggleS12nSelect')}/>
      </div>
      <div className="col-md-6">
        <LayeredS12nCard id={'s1'} onToggleS12nSelect={action('onToggleS12nSelect')}/>
      </div>
    </div>
  ),
)
.add('CourseCard', () => (
  <div className="row">
    <div className="col-md-3">
      <CourseCard id={'c1'} onToggleCourseSelect={action('onToggleCourseSelect')}/>
    </div>
    <div className="col-md-3">
      <CourseCard id={'c1'} onToggleCourseSelect={action('onToggleCourseSelect')}/>
    </div>
    <div className="col-md-3">
      <CourseCard id={'c1'} onToggleCourseSelect={action('onToggleCourseSelect')}/>
    </div>
    <div className="col-md-3">
      <CourseCard id={'c1'} onToggleCourseSelect={action('onToggleCourseSelect')}/>
    </div>
  </div>
));
