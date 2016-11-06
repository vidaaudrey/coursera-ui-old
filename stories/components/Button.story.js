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
    <div className="container p-t-1">
      <h2>Light Theme</h2>
      <div className="p-a-2">
        <h3>Horizontal Layout</h3>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Button type="primary" label={'primary'} />
          <Button type="secondary" label={'secondary'} />
          <Button type="default" label={'default'} />
          <Button type="disabled" label={'disabled'} />
          <Button type="noStyle" label={'noStyle'} />
          <Button type="primary" size="sm" label={'sm'} />
          <Button type="secondary" size="md" label={'md'} />
          <Button type="default" size="lg" label={'lg'} />
        </div>
        <h3>Vertical Layout</h3>
        <div className="m-b-2 vertical-box">
          <Button type="primary" label={'primary'} />
          <Button type="secondary" label={'secondary'} />
          <Button type="default" label={'default'} />
          <Button type="disabled" label={'disabled'} />
          <Button type="primary" size="sm" label={'sm'} />
          <Button type="secondary" size="md" label={'md'} />
          <Button type="default" size="lg" label={'lg'} />
        </div>
      </div>

      <h2>Dark Theme</h2>
      <div className="p-a-2" style={{backgroundColor: '#363b42'}}>
        <h3 className="color-white">Horizontal Layout</h3>
        <div className="m-b-2 horizontal-box align-items-spacebetween wrap">
          <Button isThemeDark type="primary" label={'primary'} />
          <Button isThemeDark type="secondary" label={'secondary'} />
          <Button isThemeDark type="default" label={'default'} />
          <Button isThemeDark type="disabled" label={'disabled'} />
          <Button isThemeDark type="noStyle" label={'noStyle'} />
          <Button isThemeDark type="primary" size="sm" label={'sm'} />
          <Button isThemeDark type="secondary" size="md" label={'md'} />
          <Button isThemeDark type="default" size="lg" label={'lg'} />
        </div>
        <h3 className="color-white">Vertical Layout</h3>
        <div className="m-b-2 vertical-box" style={{backgroundColor: 'blakc'}}>
          <Button isThemeDark type="primary" label={'primary'} />
          <Button isThemeDark type="secondary" label={'secondary'} />
          <Button isThemeDark type="default" label={'default'} />
          <Button isThemeDark type="disabled" label={'disabled'} />
          <Button isThemeDark type="primary" size="sm" label={'sm'} />
          <Button isThemeDark type="secondary" size="md" label={'md'} />
          <Button isThemeDark type="default" size="lg" label={'lg'} />
        </div>
      </div>
    </div>
  ),
);
