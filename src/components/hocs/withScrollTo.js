import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
const Scroll  = require('react-scroll');
const scroll = Scroll.animateScroll;
const { getScreenCordinates } = require('src/utils/common');
import {compose, withHandlers} from 'recompose';


/**
 * A HOC to add scroll handlers
 * Sample usage:
 *  onExpandCourse = (index) => {
 *   this.props.scrollToRef(this.courseContainerRef, 400);
 *  }
 * module.exports = compose(withScrollTo({duration: 1500}))(DomainSectionCardList);
 */
module.exports = ({duration = 2000}) => (
  withHandlers({
    scrollToRef: (props) => (ref, offSetY = 0) => {
      const pos = getScreenCordinates(ref, window.document);
      scroll.scrollTo(pos.y + offSetY, {
        smooth: true,
        duration,
      });
    },
    scrollToTop: props => () => (
      scroll.scrollToTop({
        smooth: true,
        duration,
      })
    ),
    scrollTo: (props) => (scrollY) => (
      scroll.scrollTo(scrollY, {
        smooth: true,
        duration,
      })
    ),
  })
);
