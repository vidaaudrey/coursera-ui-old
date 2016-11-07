import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ScrollDemo from '../support/ScrollDemo';
import InfiniteScrollDemoWrapper from '../support/InfiniteScrollDemoWrapper';

storiesOf('Demos', module)
  .addWithInfo(
    'simple usage',
    `
      Scroll Demo
    ~~~js
    hello
    ~~~
    `,
    () => (
      <div className="container">
        <ScrollDemo />
      </div>
    ),
  )
  .addWithInfo(
    'InfiniteScrollDemo',
    `
      Usage

      ~~~js
      import { Chip } from 'coursera-ui';

      <ChipList
        listData={listData}
        showSelectAll={true}
        selectAllLabel={'All Topics'}
        alignCenter={true}
        onSelectChange={action('select changed')}
      />
      ~~~
    `,
    () => (
      <div className="container">
        <InfiniteScrollDemoWrapper />
      </div>
    ),
  );
