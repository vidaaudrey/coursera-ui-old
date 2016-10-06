import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {Welcome} from './support';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));
