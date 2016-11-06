/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {hoistStatics} from 'recompose';

/**
 * A HOC to detect whether component is mounted
 * Can use together with SSR/CSR specific logic or branching
 */

const withIsMounted = (Component) => {
  const componentName = Component.displayName || Component.name;

  class HOC extends React.Component {
    static displayName = `withIsMounted(${componentName})`;

    state = {isMounted: false}

    componentDidMount() {
      this.setState({isMounted: true});
    }

    componentWillUnmount() {
      this.setState({isMounted: false});
    }

    render() {
      return (
        <Component {...this.props} {...this.state} />
      );
    }
  }

  hoistStatics(Component, HOC);
  return HOC;
};

module.exports = withIsMounted;
