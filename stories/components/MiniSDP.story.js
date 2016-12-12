import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import MiniCDP from 'src/components/rich/MiniCDP';
import MiniSDP from 'src/components/rich/MiniSDP';
import { IntlProvider } from 'react-intl';

storiesOf('rich.coursera', module)
.addWithInfo(
  'MiniCDP',
  `
  CDP
  ~~~js
  import { MiniCDP } from 'coursera-ui';
  <MiniCDP id={'s1'} onToggleS12nSelect={action('onToggleS12nSelect')}/>
  ~~~
  `,
  () => (
    <div className="container bg-gray">
      <div className="row p-t-2">
        <div className="col-xs-12 border-a p-a-0">
          <IntlProvider locale="en">
            <MiniCDP id={'c1'} onToggleS12nSelect={action('onToggleS12nSelect')} />
          </IntlProvider>
        </div>
      </div>
    </div>
  ),
)
.addWithInfo(
  'MiniSDP',
  `
  SDP
  ~~~js
  import { MiniSDP } from 'coursera-ui';
  <MiniSDP id={'s1'} onToggleS12nSelect={action('onToggleS12nSelect')}/>
  ~~~
  `,
  () => (
    <div className="container bg-gray">
      <div className="row p-t-2">
        <div className="col-xs-12 border-a p-a-0">
          <IntlProvider locale="en">
            <MiniSDP id={'s1'} onToggleS12nSelect={action('onToggleS12nSelect')} />
          </IntlProvider>
        </div>
      </div>
    </div>
  ),
);
