import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {LeaderboardApp} from 'src';

storiesOf('prototype.LeaderboardApp', module)
  .add('default view', () => (
    <LeaderboardApp />
  ));
