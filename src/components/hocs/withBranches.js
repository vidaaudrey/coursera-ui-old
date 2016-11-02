/* eslint-disable max-len */
import React, {PropTypes} from 'react';
import { branch, compose, renderComponent, setDisplayName, setPropTypes } from 'recompose';
import NotFoundOrAuthorized from 'src/components/coursera/NotFoundOrAuthorized';
import Loading from 'src/components/coursera/Loading';

/**
 * A set of reusable branching hocs for handling
 * - loading state
 * - auth/notFound state
 * - ssrPlaceholder state. As the component can't access dom
 *   at SSR, we need to use placeholder components to be able to
 *   get the data / or the minium layout content, so we don't have
 *   to wait till CSR
 *   Usage:
 *   const CourseCardNotAuthorized = withNotFoundOrAuthorized(CourseCard);
 *   const CourseCardPlaceholder = () => <h1>Course Card SSR Placeholder Component</h1>;
 *   const CourseCardWithSSRPlaceholderBranch = withSSRPlaceholder(CourseCardPlaceholder)(CourseCard);
 *   <CourseCardNotAuthorized
 *    isNotAuthorized
 *    notAuthorizedMessage="Not authorized to see this course card"
 *    id={'c1'}
 *   />

*    <CourseCardWithSSRPlaceholderBranch
*     isCSROnly
*     id={'c1'}
*     onToggleCourseSelect={action('onToggleCourseSelect')}
*    />
 */

const withNotFoundOrAuthorized = Component =>
  compose(
    branch(
      props => props.isNotFound || props.isNotAuthorized,
      renderComponent(NotFoundOrAuthorized),
      renderComponent(Component),
    ),
    setDisplayName('withNotFoundOrAuthorized'),
    setPropTypes({
      isNotFound: PropTypes.bool,
      isNotAuthorized: PropTypes.bool,
    }),
  )(Component);


const withLoading = Component =>
  compose(
    branch(
      props => props.isLoading,
      renderComponent(Loading),
      renderComponent(Component),
    ),
    setDisplayName('withLoading'),
    setPropTypes({
      isLoading: PropTypes.bool,
    }),
  )(Component);


const withSSRPlaceholder = PlaceholderComponent =>
  Component =>
    compose(
      branch(
        props => props.isCSROnly,
        renderComponent(PlaceholderComponent),
        renderComponent(Component),
      ),
      setDisplayName('withSSRPlaceholder'),
      setPropTypes({
        isCSROnly: PropTypes.bool,
      }),
    )(Component);


module.exports = {
  withNotFoundOrAuthorized,
  withLoading,
  withSSRPlaceholder,
};
