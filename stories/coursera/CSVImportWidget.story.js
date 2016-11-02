import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { S12nCard, LayeredS12nCard, CourseCard } from 'src';

import CSVImportWidget from 'src/components/coursera/csvImportWidget/CSVImportWidget';
import FileUploadWidget from 'src/components/coursera/fileUploadWidget/FileUploadWidget';
// import BranchDemo from 'src/components/coursera/BranchDemo';
import {
  withNotFoundOrAuthorized,
  withLoading,
  withSSRPlaceholder,
} from 'src/components/hocs/withBranches';

const CourseCardNotAuthorized = withNotFoundOrAuthorized(CourseCard);
const CourseCardNotFound = withNotFoundOrAuthorized(CourseCard);
const CourseCardLoading = withLoading(CourseCard);

const CourseCardPlaceholder = () => <h1>Course Card SSR Placeholder Component</h1>;
const CourseCardWithSSRPlaceholderBranch = withSSRPlaceholder(CourseCardPlaceholder)(CourseCard);

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
)
.addWithInfo(
  'branching',
  `
  A set of reusable branching hocs for handling
  auth/notFound/redirect, loading, and ssrPlaceholder
  ~~~js
  import {
    withNotFoundOrAuthorized,
    withLoading,
    withSSRPlaceholder,
  } from 'src/components/hocs/withBranches';

  const CourseCardNotAuthorized = withNotFoundOrAuthorized(CourseCard);
  const CourseCardPlaceholder = () => <h1>Course Card SSR Placeholder Component</h1>;
  const CourseCardWithSSRPlaceholderBranch = withSSRPlaceholder(CourseCardPlaceholder)(CourseCard);

  <CourseCardNotAuthorized
    isNotAuthorized
    notAuthorizedMessage="Not authorized to see this course card"
    id={'c1'}
    onToggleCourseSelect={action('onToggleCourseSelect')}
  />

  <CourseCardWithSSRPlaceholderBranch
    isCSROnly
    id={'c1'}
    onToggleCourseSelect={action('onToggleCourseSelect')}
  />
  ~~~
  `,
  () => (
    <div className="container">
      <div className="row vertical-box">
        <h2 className="text-muted">basic component</h2>
        <CourseCard
          id={'c1'}
          onToggleCourseSelect={action('onToggleCourseSelect')}
        />
      </div>
      <div className="row vertical-box">
        <h2 className="text-muted">notAuthorized</h2>
        <CourseCardNotAuthorized
          isNotAuthorized
          notAuthorizedMessage="Not authorized to see this course card"
          id={'c1'}
          onToggleCourseSelect={action('onToggleCourseSelect')}
        />
      </div>
      <div className="row vertical-box">
        <h2 className="text-muted">notFound</h2>
        <CourseCardNotFound
          isNotFound
          notAuthorizedMessage="CourseId Not Found"
          id={'c1'}
          onToggleCourseSelect={action('onToggleCourseSelect')}
        />
      </div>
      <div className="row vertical-box">
        <h2 className="text-muted">loading</h2>
        <CourseCardLoading
          isLoading
          loadingMessage="Loading course information..."
          id={'c1'}
          onToggleCourseSelect={action('onToggleCourseSelect')}
        />
      </div>
      <div className="row vertical-box">
        <h2 className="text-muted">SSR Placeholder</h2>
        <CourseCardWithSSRPlaceholderBranch
          isCSROnly
          id={'c1'}
          onToggleCourseSelect={action('onToggleCourseSelect')}
        />
      </div>
    </div>
  ),
);
