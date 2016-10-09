import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {Button} from 'src';

storiesOf('basic.Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}> Button </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
