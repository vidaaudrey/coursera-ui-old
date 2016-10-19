import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {S12nCard} from 'src';

storiesOf('rich.S12nCard', module)
.addWithInfo(
   'simple usage',
   `
   Button with size, type, label and children
   ~~~js
   import { Button } from 'coursera-ui';

   <Button type="primary"  label={'primary'}/>
   <Button type="secondary" label={'secondary'}/>
   <Button type="default" label={'default'}/>
   <Button type="disabled" label={'disabled'}/>
   <Button type="noStyle" label={'noStyle'}/>
   <Button type="primary" size="xs" label={'xs'}/>
   <Button type="secondary" size="md" label={'md'}/>
   <Button type="default" size="lg" label={'lg'}/>
   ~~~
   `,
   () => (
     <div className="container">
      <S12nCard />
     </div>
   ),
 );
