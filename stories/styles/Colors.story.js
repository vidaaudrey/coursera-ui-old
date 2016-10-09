import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {colors} from 'src';
// import {colors} from 'lib';


const colorStyles = {
  backgroundColor: colors.red50
}

storiesOf('ui.Colors', module)
  .add('test', () => (
    <div style={colorStyles}>Hello color</div>
  ));
