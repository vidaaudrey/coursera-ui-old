/* eslint-disable no-use-before-define */
import React from 'react';
import Measure from 'react-measure';
import { SmartScrollWrapper } from 'src';

/**
*  A responsive wrapper around SmartScrollWrapper
*  for providing the right container height when the screen size changes
*/
class SmartScrollWrapperResponsive extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    delta: React.PropTypes.number,
  }

  state = {
    containerHeight: 0,
  }

  render() {
    const {children, delta} = this.props;
    return (
      <SmartScrollWrapper delta={delta} containerHeight={this.state.containerHeight}>
        <Measure
          onMeasure={dimensions => this.setState({containerHeight: dimensions.height})}
        >
          {children}
        </Measure>
      </SmartScrollWrapper>
    );
  }
}

module.exports = SmartScrollWrapperResponsive;
