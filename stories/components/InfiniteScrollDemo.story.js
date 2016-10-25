import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import IconLibrary from '../support/IconLibrary';
// import { ChipList, Chip } from 'src';
import InfiniteScrollDemo from 'src/components/extended/InfiniteScrollDemo';

storiesOf('extended.Demos', module)
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
        <InfiniteScrollDemo limit={21} />
      </div>
    ),
  );
