import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {App} from 'src';

storiesOf('containers.App', module)
  .add('default', () => (
    <App handleClick={action('clicked')} />
  ));
