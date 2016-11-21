import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ScrollDemo from '../support/ScrollDemo';
import InfiniteScrollDemoWrapper from '../support/InfiniteScrollDemoWrapper';
import withBreakPoint from 'src/components/hocs/withBreakPoint';

const BreakPointDemo = ({ breakPoint, breakPointNumber }) => {
  return (
    <div className="rc-App">
      <h1>withBreakPoint Demo</h1>
      <p>Resize the window to see the break point change</p>
      <h2>Current breakPoint: {breakPoint} / {breakPointNumber}</h2>
    </div>
  );
};
const BreakPointDemoWithBreakPoint = withBreakPoint(BreakPointDemo);

storiesOf('Demos', module)
  // .addWithInfo(
  //   'Scroll Demo',
  //   `
  //     Scroll Demo
  //   ~~~js
  //   hello
  //   ~~~
  //   `,
  //   () => (
  //     <div className="container">
  //       <ScrollDemo />
  //     </div>
  //   ),
  // )
  // .addWithInfo(
  //   'InfiniteScrollDemo',
  //   `
  //     Usage
  //
  //     ~~~js
  //     import { Chip } from 'coursera-ui';
  //
  //     <ChipList
  //       listData={listData}
  //       showSelectAll={true}
  //       selectAllLabel={'All Topics'}
  //       alignCenter={true}
  //       onSelectChange={action('select changed')}
  //     />
  //     ~~~
  //   `,
  //   () => (
  //     <div className="container">
  //       <InfiniteScrollDemoWrapper />
  //     </div>
  //   ),
  // )
  .addWithInfo(
    'withBreakPoint',
    `
      Usage

      ~~~js
      import {withBreakPoint} from 'coursera-ui';

      const BreakPointDemo = ({ breakPoint, breakPointNumber }) => {
        return (
          <div className="rc-App">
            <h1>withBreakPoint Demo</h1>
            <p>Resize the window to see the break point change</p>
            <h2>Current breakPoint: {breakPoint} / {breakPointNumber}</h2>
          </div>
        );
      };
      ~~~
    `,
    () => (
      <div className="container">
        <BreakPointDemoWithBreakPoint showBreakPointNumber/>
      </div>
    ),
  );
