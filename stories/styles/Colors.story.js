import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {colors} from '../../';

const colorStyles = {
  backgroundColor: colors.red50
}

storiesOf('Colors', module)
  .add('test', () => (
    <div style={colorStyles}>Hello color</div>
  ));
