import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {Button} from 'src';

storiesOf('basic.Button', module)
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
   <Button type="primary" size="sm" label={'sm'}/>
   <Button type="secondary" size="md" label={'md'}/>
   <Button type="default" size="lg" label={'lg'}/>
   ~~~
   `,
   () => (
     <div className="container">
      <h2>Horizontal Layout</h2>
      <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
        <Button type="primary"  label={'primary'}/>
        <Button type="secondary" label={'secondary'}/>
        <Button type="default" label={'default'}/>
        <Button type="disabled" label={'disabled'}/>
        <Button type="noStyle" label={'noStyle'}/>
        <Button type="primary" size="sm" label={'sm'}/>
        <Button type="secondary" size="md" label={'md'}/>
        <Button type="default" size="lg" label={'lg'}/>
      </div>
      <h2>Vertical Layout</h2>
      <div className="m-b-2 vertical-box">
        <Button type="primary"  label={'primary'}/>
        <Button type="secondary" label={'secondary'}/>
        <Button type="default" label={'default'}/>
        <Button type="disabled" label={'disabled'}/>
        <Button type="primary" size="sm" label={'sm'}/>
        <Button type="secondary" size="md" label={'md'}/>
        <Button type="default" size="lg" label={'lg'}/>
      </div>
     </div>
   ),
 );
