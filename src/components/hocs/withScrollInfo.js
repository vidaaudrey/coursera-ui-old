import React from 'react';
import { hoistStatics } from 'recompose';
import _ from 'underscore';

/**
 * A HOC to detect the window's scroll direction and position
 * then pass the information to the child component
 * Check 'SmartScrollWrapper' for example
 */
const withScrollInfo = ({delta = 5, updateInterval = 100 }) =>
  (Component) => {
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
        // Such a hack: http://stackoverflow.com/questions/16618785/ie8-alternative-to-window-scrolly
        const newScrollPosition = window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop;
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

      render() {
        return (
          <div className="vertical-box" ref={r => (this.domRef = r)}>
            <Component
              {...this.props}
              {...this.state}
            />
          </div>
        );
      }
    }

    hoistStatics(Component, HOC);
    return HOC;
  };


export default withScrollInfo;
