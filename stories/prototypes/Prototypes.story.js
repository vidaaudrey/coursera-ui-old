import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {LeaderboardApp, ProgramCreationApp} from 'src';

storiesOf('prototype.all', module)
  .add('LeaderboardApp', () => (
    <LeaderboardApp />
  ))
  .add('ProgramCreationApp', () => (
    <ProgramCreationApp />
  ));
