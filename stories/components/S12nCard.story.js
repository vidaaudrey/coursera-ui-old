import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {S12nCard} from 'src';

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
     <div className="container">
      <S12nCard id={'s1'} onToggleS12nSelect={action('onToggleS12nSelect')}/>
     </div>
   ),
 );
