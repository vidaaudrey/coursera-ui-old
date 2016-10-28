import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
const CSVImportWidget = require('src/components/coursera/csvImportWidget/CSVImportWidget');
const FileUploadWidget = require('src/components/coursera/fileUploadWidget/FileUploadWidget');
storiesOf('rich.coursera', module)
.addWithInfo(
  'csvImportWidget',
  `

  ~~~js

  ~~~
  `,
  () => (
    <div className="container">
      <CSVImportWidget apiManager={{}} />
    </div>
  ),
)
.addWithInfo(
  'csvImportWidget',
  `

  ~~~js

  ~~~
  `,
  () => (
    <div className="container">
      <FileUploadWidget />
    </div>
  ),
);
