import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {LeaderBoardApp} from '../../';

storiesOf('LeaderBoardApp', module)
  .add('Main Page', () => (
    <LeaderBoardApp />
  ))
