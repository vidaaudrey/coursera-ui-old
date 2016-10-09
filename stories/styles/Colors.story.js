import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import colors from 'src/styles/colors';

const colorStyles = {
  backgroundColor: colors.red50
}

storiesOf('ui.Colors', module)
  .add('test', () => (
    <div style={colorStyles}>Hello color</div>
  ));
