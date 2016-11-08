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
import {compose, pure} from 'recompose';
import SearchAndDomainSelectCard from 'src/prototypes/components/program-creation/SearchAndDomainSelectCard';

// class HeaderScrollCourseSelectPage extends React.Component {
class HeaderScrollCourseSelectPage extends React.Component {
  static propTypes = {
    alwaysHide: React.PropTypes.bool, // Allow overwrite
    children: React.PropTypes.node,
    isLoggedIn: React.PropTypes.bool,
    onHeaderHeightChange: React.PropTypes.func,
  }

  static defaultProps = {
    headerHeight: 100
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onMeasure = (dimensions) => {
    if (this._isMounted && this.props.onHeaderHeightChange) {
      this.props.onHeaderHeightChange(dimensions.height);
    }
  }

  render() {
    const {
      isLoggedIn,
      alwaysHide,
      headerHeight,
      domains, onSetSelectedDomainIds, onSetSearchKeyword, searchKeyWord, selectedDomainIds
    } = this.props;

    const hideContainer = alwaysHide;

    return (
      <SmartScrollWrapper
        delta={50}
        containerHeight={headerHeight}
        zIndex={zIndex.xlg}
      >
        <Measure
          onMeasure={this.onMeasure}
        >
          <div {...css(styles.mainContainer)}>
          <header {...cssWithClass('container-fluid', styles.HeaderScrollCourseSelectPage)} >
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
          <SearchAndDomainSelectCard
            domains={domains}
            onSetSelectedDomainIds={onSetSelectedDomainIds}
            onSetSearchKeyword={onSetSearchKeyword}
            searchKeyWord={searchKeyWord}
            selectedDomainIds={selectedDomainIds}
          />
        </div>
        </Measure>
      </SmartScrollWrapper>
    );
  }
}


module.exports = compose(
  // withScrollInfo({delta: 160, updateInterval: 400}),
  pure,
)(HeaderScrollCourseSelectPage);


const styles = StyleSheet.create({
  HeaderScrollCourseSelectPage: {
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
