import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {RaisedButton} from 'src';

storiesOf('basic.RaisedButton', module)
.addWithInfo(
   'simple usage',
   `
   <RaisedButton type="default" label={'Resume'}/>

   `,
   () => (
     <div className="container">
      <h2>Horizontal Layout</h2>
      <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
        <RaisedButton type="primary"  label={'primary'}/>
        <RaisedButton type="secondary" label={'secondary'}/>
        <RaisedButton type="default" label={'default'}/>
        <RaisedButton type="disabled" label={'disabled'}/>
        <RaisedButton type="primary" size="xs" label={'xs'}/>
        <RaisedButton type="secondary" size="md" label={'md'}/>
        <RaisedButton type="default" size="lg" label={'lg'}/>
      </div>
      <h2>Vertical Layout</h2>
      <div className="m-b-2 vertical-box">
        <RaisedButton type="primary"  label={'primary'}/>
        <RaisedButton type="secondary" label={'secondary'}/>
        <RaisedButton type="default" label={'default'}/>
        <RaisedButton type="disabled" label={'disabled'}/>
        <RaisedButton type="primary" size="xs" label={'xs'}/>
        <RaisedButton type="secondary" size="md" label={'md'}/>
        <RaisedButton type="default" size="lg" label={'lg'}/>
      </div>
     </div>
   ),
 );
