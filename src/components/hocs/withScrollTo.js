import React from 'react';
import { hoistStatics } from 'recompose';

import {
  Link, DirectLink, Element, Events, scrollSpy, animateScroll as scroll, scroller,
} from 'react-scroll';

/**
 * A HOC to add scroll handlers and pass isScrolling to the child component
 * As scrolling is related to dom manipulation, we may only want to load the HOC
 * at CSR (use with withIsMounted)
 * Sample usage:
 *  onExpandCourse = (index) => {
 *   this.props.scrollToElement('id-or-name-of-element', 400);
 *  }
 * module.exports = compose(
 * withIsMounted,
 * withScrollTo({duration: 1500})
 * )(DomainSectionCardList);
 */

const withScrollTo = ({
  duration = 2000,
  smooth = true,
}) => {
  return (Component) => {
    const componentName = Component.displayName || Component.name;
    class HOC extends React.Component {
      displayName = `withScrollTo(${componentName})`;

      state = {
        isScrolling: false,
      }

      componentDidMount() {
        this._isMounted = true;
        Events.scrollEvent.register('begin', () => {
          this.updateScroll(true);
        });
        Events.scrollEvent.register('end', () => {
          this.updateScroll(false);
        });
        scrollSpy.update();
      }

      componentWillUnmount() {
        this._isMounted = false;
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }

      updateScroll = (isScrolling) => {
        if (this._isMounted) {
          this.setState({isScrolling});
        }
      }

      scrollTo = (posY, options = {}) => {
        scroll.scrollTo(posY, {
          smooth,
          duration,
          ...options,
        });
      }

      scrollToTop = (options = {}) => (
        scroll.scrollToTop({
          smooth: true,
          duration,
          ...options,
        })
      )

      scrollToBottom = (options = {}) => (
        scroll.scrollToBottom({
          smooth: true,
          duration,
          ...options,
        })
      )
      scrollMore = (deltaY, options = {}) => (
        scroll.scrollMore(deltaY, {
          smooth: true,
          duration,
          ...options,
        })
      )

      scrollToElement =(nameOrId, options = {}) => (
        scroller.scrollTo(nameOrId, {
          smooth: true,
          duration,
          ...options,
        })
      )

      render() {
        return (
          <Component
            {...this.props}
            {...this.state}
            scrollTo={this.scrollTo}
            scrollToTop={this.scrollToTop}
            scrollToBottom={this.scrollToBottom}
            scrollToElement={this.scrollToElement}
            scrollMore={this.scrollMore}
          />
        );
      }
    }

    hoistStatics(Component, HOC);
    return HOC;
  };
};

module.exports = withScrollTo;
