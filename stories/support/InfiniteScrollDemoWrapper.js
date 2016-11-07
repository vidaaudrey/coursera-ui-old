import React, {PropTypes} from 'react';
import InfiniteScrollDemo from './InfiniteScrollDemo';

class InfiniteScrollDemoWrapper extends React.Component {
  render() {
    return (
      <div
        className="rc-InfiniteScrollDemoWrapper border-a"
        onScroll={this.handleScroll}
      >
        <h2>wrapper</h2>
        <div
          ref={r => (this.containerRef = r)}
          style={{overflow: 'scroll'}}
        >
          <InfiniteScrollDemo limit={60} />
        </div>
      </div>
    );
  }
}

module.exports = InfiniteScrollDemoWrapper;
