import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {SearchInput} from 'src';

storiesOf('basic.SearchInput', module)
  .addWithInfo(
    'interaction',
    `
    ---

    `,
    () => (
      <div className="vertical-box p-t-3">
        <SearchInput
          onSearch={action('onSearch')}
          onChange={action('onChange')}
        />
      </div>
    ),
    { inline: false, propTables: [SearchInput]}
  );
