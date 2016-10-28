/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition, zIndex
} = require('src/styles/theme');

const _ = require('underscore');
import { Avatar, Button, SmartScrollWrapper } from 'src';
import withApiMockData from 'src/components/hocs/withApiMockData';
import { courseraLogo } from 'src/assets/pngAssets';
import Measure from 'react-measure';
import withScrollInfo from 'src/components/hocs/withScrollInfo';

const FIRST_SECTION_SCROLL_POINT = 360;  // adjust later

class HeaderSmartScroll extends React.Component {
  static propTypes = {
    activeDomainSectionIndex: React.PropTypes.number,
    alwaysShow: React.PropTypes.bool, // Allow overwrite
    children: React.PropTypes.node,
    isFirstDomainSectionVisibleAfterScroll: React.PropTypes.bool,
    isInfiniteMode: React.PropTypes.bool,
    isLoggedIn: React.PropTypes.bool,
    onHeaderHeightChange: React.PropTypes.func.isRequired,
    onScrollPassFirstDomainSection: React.PropTypes.func.isRequired,
  }

  state = {
    containerHeight: 100,
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillReceiveProps({lastScrollPosition}) {
    if (lastScrollPosition > FIRST_SECTION_SCROLL_POINT ) {
      this.props.onScrollPassFirstDomainSection();
    }
  }

  onMeasure = (dimensions) => {
    if (this._isMounted) {
      this.setState({containerHeight: dimensions.height})
    }
  }

  componentWillUpdate(nextProps, {containerHeight}) {
    if (this.state.containerHeight !== containerHeight) {
      this.props.onHeaderHeightChange(containerHeight);
    }
  }

  render() {
    const {
      isLoggedIn,
      isInfiniteMode,
      children,
      activeDomainSectionIndex,
      didScroll,
      lastScrollPosition,
      isScrollingDown,
      isFirstDomainSectionVisibleAfterScroll,
      alwaysShow,
    } = this.props;
    const {containerHeight} = this.state;
    // Hide the container if we are in infiniteMode, or we reached a pointer close to this container
    // Quite tricky here, will investgiate more later
    const hideContainer = (!alwaysShow && isFirstDomainSectionVisibleAfterScroll) || (isInfiniteMode && lastScrollPosition > 200);
    console.warn('---', this.props);

    return (
      <SmartScrollWrapper delta={50} containerHeight={containerHeight} zIndex={hideContainer ? -1 : 1}>
        <Measure
          onMeasure={this.onMeasure}
        >
          <div {...css(styles.mainContainer)}>
            <header {...cssWithClass('container-fluid', styles.HeaderSmartScroll)} >
              <div {...cssWithClass('container horizontal-box align-items-spacebetween wrap', styles.headerInner)}>
                <a href="/"> <img src={courseraLogo} alt="Coursera Logo"/></a>
                {isInfiniteMode && <p>Infinite Mode</p>}
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


module.exports = withScrollInfo({delta: 160, updateInterval: 400})(HeaderSmartScroll);

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
