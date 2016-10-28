import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
const _ = require('underscore');

/**
 * A HOC to detect the window's scroll direction and position
 * then pass the information to the child component
 * Check 'SmartScrollWrapper' for example
 */

const withScrollInfo = ({delta = 5, updateInterval = 100 }) => {
  return (Component) => {
    const componentName = Component.displayName || Component.name || 'Component';
    class HOC extends React.Component {
      static displayName = `withScrollInfo(${componentName})`;

      static propTypes = {
        delta: React.PropTypes.number,
      }

      state = {
        isScrollingDown: true,
        lastScrollPosition: 0,
        didScroll: false,
      }

      componentDidMount() {
        this._isMounted = true;
        const throttled = _.throttle(this.handleScroll, updateInterval);
        window.addEventListener('scroll', throttled);
      }

      componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('scroll', this.handleScroll);
      }

      handleScroll = () => {
        // TODO: FF and IE Hack
        if (window.scrollTop + 1 !== document.height - window.height) {
          const newScrollPosition = document.body.scrollTop;
          const {lastScrollPosition} = this.state;
          // Only update state if the scroll has reached delta.
          const scrollDifference = Math.abs(lastScrollPosition - newScrollPosition);
          // Prioritize prop delta over HOC delta.
          const deltaLocal = this.props.delta || delta;
          if (scrollDifference + 1 < deltaLocal) return;

          const isScrollingDown = lastScrollPosition <= newScrollPosition;
          if (this._isMounted) {
            this.setState({
              didScroll: true,
              isScrollingDown,
              lastScrollPosition: newScrollPosition,
            });
          }
        }
      }

      render() {
        return (
          <Component
            {...this.props}
            {...this.state}
          />
        );
      }
    }

    hoistNonReactStatic(Component, HOC);

    return HOC;
  };
};


export default withScrollInfo;
