/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');
import Measure from 'react-measure';
import {Avatar, Button, SmartScrollWrapper} from 'src';
import DomainSectionCardList from 'src/prototypes/components/program-creation/DomainSectionCardList';
import NoDomainSelected from 'src/prototypes/components/program-creation/NoDomainSelected';
import withApiMockData from 'src/components/hocs/withApiMockData';
const _ = require('underscore');
import SearchAndDomainSelectCard from 'src/prototypes/components/program-creation/SearchAndDomainSelectCard';
// import HeaderScrollCourseSelectPage from 'src/prototypes/components/program-creation/HeaderSmartScrollCourseSelectPage';
const { getScreenCordinates } = require('src/utils/common');
import withScrollInfo from 'src/components/hocs/withScrollInfo';
import HeaderSmartScroll from 'src/prototypes/components/program-common/HeaderSmartScroll';
const withScrollTo = require('src/components/hocs/withScrollTo');

import {compose, pure} from 'recompose';

import {
  HEADER_HEIGHT, FOOTER_HEIGHT, CREATE_PROGRAM_STEPS,
} from 'src/constants/ProgramCreationAppConstants';

const DEFAULT_HEADER_HEIGHT = 264;
const DEFAULT_EXPAND_DURATION = 400;
const NAVBAR_HEIGHT = 16;

class ProgramSelectCoursePage extends React.Component {
  static propTypes = {
    domains: React.PropTypes.array.isRequired,
    // activeDomainSectionIndex: React.PropTypes.number.isRequired,
    // onEnterInfiniteModeByCourse: React.PropTypes.func.isRequired,
    // onEnterInfiniteModeByS12n: React.PropTypes.func.isRequired,
    // onLeaveInfiniteMode: React.PropTypes.func.isRequired,
    // onLoadSubdomainContainer: React.PropTypes.func.isRequired,
    // onToggleCourseSelect: React.PropTypes.func.isRequired,
    // onToggleS12nSelect: React.PropTypes.func.isRequired,
    // searchKeyWord: React.PropTypes.string,
    selectedCourseIds: React.PropTypes.array,
    selectedDomainIds: React.PropTypes.array,
    selectedS12nIds: React.PropTypes.array,

    scrollToRef: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    selectedS12nIds: [],
    selectedCourseIds: [],
    selectedDomainIds: [],
    domains: [],
    searchKeyWord: null,
  }

  constructor(props, context) {
    super(props, context);
    const {selectedCourseIds, selectedS12nIds, selectedDomainIds} = this.props;
    this._subDomainContainerRefs = {};
    this._allDomainIds = _(props.domains).pluck('id');
    // Keep a record of all courseIds in a s12n
    this._selectedS12nRecord = {};
    this.state = {
      selectedCourseIds,
      selectedS12nIds,
      selectedDomainIds,

      headerHeight: DEFAULT_HEADER_HEIGHT,

      // For Course Selection Page
      isInfiniteMode: false,
      activeDomainSectionIndex: 0,
      isCourseExpanded: false,
      isFirstDomainSectionVisibleAfterScroll: false,  // Use it to hide nav after scroll
    };
  }

  onSetSearchKeyword = (searchKeyWord) => {
    this.setState({searchKeyWord});
  }

  onSetDomains = ({selectedDomainIds, id, newIsSelect}) => {
    this.setState({selectedDomainIds, isInfiniteMode: false, activeDomainSectionIndex: -1});
    // If newly selected, scroll to that section, otherwise, scroll to top
    // Only scroll if it's beyong the first section
    const shouldScrollToFirstSection = (!newIsSelect && _(this.state.selectedDomainIds).size() < 2) || this._allDomainIds[0] === id;
    this._scrollToDomainSection(id, shouldScrollToFirstSection);
    if (shouldScrollToFirstSection || !newIsSelect) {
      this.setState({isFirstDomainSectionVisibleAfterScroll: true});
    }
  }

  onScrollPassFirstDomainSection = () => {
    if (this.state.isFirstDomainSectionVisibleAfterScroll) {
      this.setState({isFirstDomainSectionVisibleAfterScroll: false});
    }
  }
  onToggleCourseSelect = (courseId, isSelected) => {
    if (isSelected) {
      this.handleAddCourse(courseId);
    } else {
      this.handleRemoveCourse(courseId);
    }
  }

  onToggleS12nSelect = (s12nId, isSelected, s12nCourseIds = []) => {
    if (isSelected) {
      this.handleAddS12n(s12nId, s12nCourseIds);
    } else {
      this.handleRemoveS12n(s12nId, s12nCourseIds);
    }
  }

  onEnterInfiniteModeByCourse = (activeDomainSectionIndex) => {
    this._handleExpand({activeDomainSectionIndex, isCourseExpanded: true});
  }

  onEnterInfiniteModeByS12n = (activeDomainSectionIndex) => {
    this._handleExpand({activeDomainSectionIndex, isCourseExpanded: false});
  }

  onLeaveInfiniteMode = () => {
    this.setState({isInfiniteMode: false});
  }

  onSetInfiniteScrollSection = ({index: activeDomainSectionIndex, isCourseExpanded}) => {
    this.setState({activeDomainSectionIndex, isCourseExpanded});
  }

  onHeaderHeightChange = (headerHeight) => {
    this.setState({headerHeight});
  }

  onLoadSubdomainContainer = ({ref, index}) => {
    console.warn('--onLoadSubdomainContainer-', ref, index);
    // Keep a copy of all the containerRefs so we can query at runtime
    this._subDomainContainerRefs[index] = ref;
  }

  handleAddCourse = (id) => {
    let selectedCourseIds = [...this.state.selectedCourseIds, id];
    selectedCourseIds = _.uniq(selectedCourseIds);
    this.setState({
      selectedCourseIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount + 1,
    });
  }

  handleRemoveCourse = (id) => {
    const selectedCourseIds = _.reject(this.state.selectedCourseIds, item => item === id);
    this.setState({
      selectedCourseIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount - 1,
    });
  }

  handleAddS12n = (id, s12nCourseIds = []) => {
    let selectedS12nIds = [...this.state.selectedS12nIds, id];
    selectedS12nIds = _.uniq(selectedS12nIds);
    this.setState({
      selectedS12nIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount + _(s12nCourseIds).size(),
    });

    this._selectedS12nRecord[id] = s12nCourseIds;
  }

  handleRemoveS12n = (id, s12nCourseIds = []) => {
    const selectedS12nIds = _.reject(this.state.selectedS12nIds, item => item === id);
    this.setState({
      selectedS12nIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount - _(s12nCourseIds).size(),
    });
  }

  _handleExpand = ({activeDomainSectionIndex, isCourseExpanded}) => {
    this.setState({isInfiniteMode: true, activeDomainSectionIndex, isCourseExpanded});
    this.props.scrollToRef(this._subDomainContainerRefs[activeDomainSectionIndex])
  }

  _scrollToDomainSection = (domainId, shouldScrollToFirstSection) => {
    // Get the domain index and scroll to the corresponding section
    const domainIndex = shouldScrollToFirstSection ? 0 : _(this._allDomainIds).indexOf(domainId);
    if (this._subDomainContainerRefs[domainIndex]) {
      this.props.scrollToRef(this._subDomainContainerRefs[domainIndex])
    }
  }

  render() {
    const {
      domains,
    } = this.props;

    const {
      activeDomainSectionIndex,
      isCourseExpanded,
      isInfiniteMode,
      selectedDomainIds,
      selectedS12nIds,
      selectedCourseIds,
      searchKeyWord,
      headerHeight,
    } = this.state;
    // console.warn('-page--', this.props, this.state);

    const domainListData = domains.map(item => ({...item, isSelected: _(selectedDomainIds).contains(item.id)}));
    const mainContainerStyle = {
      paddingTop: isInfiniteMode ? 0 : headerHeight,
    };
    return (
      <div className="bg-gray">
        <HeaderSmartScroll alwaysHide={isInfiniteMode}>
          <SearchAndDomainSelectCard
            domains={domains}
            onSetDomains={this.onSetDomains}
            onSetSearchKeyword={this.onSetSearchKeyword}
            searchKeyWord={searchKeyWord}
            selectedDomainIds={selectedDomainIds}
            onHeaderHeightChange={this.onHeaderHeightChange}
          />
        </HeaderSmartScroll>
        <div
          className="container"
          style={mainContainerStyle}
        >
          {_(selectedDomainIds).size() === 0 && <NoDomainSelected />}
          {_(domainListData).map((item, index) => (
            <div key={`domain-container~${item.id}`} style={item.isSelected ? {} : {maxHeight: 0}}>
              <DomainSectionCardList
                domainId={item.id}
                domainName={item.name}
                index={index}
                isCourseExpanded={isCourseExpanded}
                isInfiniteMode={isInfiniteMode}
                isInfiniteModeLocal={isInfiniteMode && index === activeDomainSectionIndex}
                isSelected={item.isSelected}
                onEnterInfiniteModeByCourse={this.onEnterInfiniteModeByCourse}
                onEnterInfiniteModeByS12n={this.onEnterInfiniteModeByS12n}
                onLeaveInfiniteMode={this.onLeaveInfiniteMode}
                onLoadSubdomainContainer={this.onLoadSubdomainContainer}
                onToggleCourseSelect={this.onToggleCourseSelect}
                onToggleS12nSelect={this.onToggleS12nSelect}
                searchKeyWord={searchKeyWord}
                selectedCourseIds={selectedCourseIds}
                selectedS12nIds={selectedS12nIds}
                subdomainIds={item.subdomainIds}
              />
            </div>
          ))}

        </div>
      </div>
    );
  }
}

module.exports = compose(
  withApiMockData({dataType: 'DOMAINS'}),
  withScrollTo({duration: 1500})
)(ProgramSelectCoursePage);

const styles = StyleSheet.create({
  ProgramSelectCoursePage: {
    minHeight: 450,
    backgroundColor: color.bgGray,
  },
  domainSectionCardListContainer: {

  }
});
