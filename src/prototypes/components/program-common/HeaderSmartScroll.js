/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes, Component} from 'react';
import {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition, zIndex
} from 'src/styles/theme';

const _ = require('underscore');
import { Avatar, Button, SmartScrollWrapper } from 'src';
import withApiMockData from 'src/components/hocs/withApiMockData';
import { courseraLogo } from 'src/assets/pngAssets';
import Measure from 'react-measure';
import withScrollInfo from 'src/components/hocs/withScrollInfo';
import {compose, pure} from 'recompose';


class HeaderSmartScroll extends Component {
  static propTypes = {
    activeDomainSectionIndex: PropTypes.number,
    alwaysHide: PropTypes.bool, // Allow overwrite
    children: PropTypes.node,
    isLoggedIn: PropTypes.bool,
    onHeaderHeightChange: PropTypes.func,
    isAutoScroll: PropTypes.bool,
  }

  state = {
    containerHeight: 100,
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUpdate(nextProps, {containerHeight}) {
    if (this.state.containerHeight !== containerHeight && this.props.onHeaderHeightChange) {
      this.props.onHeaderHeightChange(containerHeight);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onMeasure = (dimensions) => {
    if (this._isMounted) {
      this.setState({containerHeight: dimensions.height});
    }
  }

  render() {
    const {
      isLoggedIn,
      children,
      alwaysHide,
      isAutoScroll,
    } = this.props;
    const {containerHeight} = this.state;

    return (
      <SmartScrollWrapper
        delta={50}
        containerHeight={containerHeight}
        zIndex={zIndex.xlg}
        alwaysHide={alwaysHide}
        isAutoScroll={isAutoScroll}
      >
        <Measure
          onMeasure={this.onMeasure}
        >
          <div {...css(styles.mainContainer)}>
            <header {...cssWithClass('container-fluid', styles.HeaderSmartScroll)} >
              <div {...cssWithClass('container horizontal-box align-items-spacebetween wrap', styles.headerInner)}>
                <a href="/"> <img src={courseraLogo} alt="Coursera Logo" /></a>
                <div className="horizontal-box align-items-vertical-center">
                  {isLoggedIn &&
                    <Avatar size={44} imgSrc="https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg" />
                  }
                </div>
                <div className="horizontal-box align-items-vertical-center">
                  <Button type="noStyle" size="sm" label="Log In" style={{marginRight: '1rem'}} />
                  <Button type="primary" size="sm" label="Sign Up" />
                </div>
              </div>
            </header>
            {children}
          </div>
        </Measure>
      </SmartScrollWrapper>
    );
  }
}


module.exports = compose(
  withScrollInfo({delta: 160, updateInterval: 400}),
  pure,
)(HeaderSmartScroll);


const styles = StyleSheet.create({
  HeaderSmartScroll: {
    height: 48,
    minWidth: spacing.minWidth,
    backgroundColor: color.white,
    boxShadow: `0 2px 4px 0 ${color.shadow}`,
  },
  mainContainer: {

  },
  hideContainer: {
    display: 'none',
  },
  headerInner: {
    padding: '8px 0',
  },
});
