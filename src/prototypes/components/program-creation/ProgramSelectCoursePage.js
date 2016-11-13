/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes, Component} from 'react';
import {cssWithClass, StyleSheet, css, color, spacing, gradient, transition,} from 'src/styles/theme';
import { domainPropType } from 'src/constants/propTypes';
import _ from 'underscore';
import {compose, pure} from 'recompose';

import withScrollInfo from 'src/components/hocs/withScrollInfo';
const withScrollTo = require('src/components/hocs/withScrollTo');
import DomainSectionCard from 'src/prototypes/components/program-creation/DomainSectionCard';
import NoDomainSelected from 'src/prototypes/components/program-creation/NoDomainSelected';
import withApiMockData from 'src/components/hocs/withApiMockData';
import SearchAndDomainSelectCard from 'src/prototypes/components/program-creation/SearchAndDomainSelectCard';
import HeaderSmartScroll from 'src/prototypes/components/program-common/HeaderSmartScroll';

import {
  HEADER_HEIGHT, FOOTER_HEIGHT, CREATE_PROGRAM_STEPS,
} from 'src/constants/ProgramCreationAppConstants';

const DEFAULT_HEADER_HEIGHT = 260;
const DEFAULT_SCROLL_DURATION = 1500;

class ProgramSelectCoursePage extends Component {
  static propTypes = {
    domains: PropTypes.array.isRequired,
    selectedCourseIds: PropTypes.array,
    selectedDomainIds: PropTypes.array,
    selectedS12nIds: PropTypes.array,

    scrollToElement: PropTypes.func.isRequired,
    scrollToTop: PropTypes.func.isRequired,
    scrollTo: PropTypes.func.isRequired,
    isScrolling: PropTypes.bool,
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
    this._allDomainIds = _(props.domains).pluck('id');
    // Keep a record of all courseIds in a s12n
    this._selectedS12nRecord = {};
    this.state = {
      selectedCourseIds,
      selectedS12nIds,
      selectedDomainIds,

      headerHeight: DEFAULT_HEADER_HEIGHT,

      isInfiniteMode: false,
      activeDomainSectionIndex: 0,
      isCourseExpanded: false,
    };
  }

  onSetSearchKeyword = (searchKeyWord) => {
    this.setState({searchKeyWord});
  }

  onSetSelectedDomainIds = ({selectedDomainIds, id, newIsSelect}) => {
    this.setState({selectedDomainIds, isInfiniteMode: false, activeDomainSectionIndex: -1});
    const domainIdIndex = _(this._allDomainIds).indexOf(id);
    let scrollToDomainId = id;
    // If newly selected, scroll to that section, otherwise, scroll to top
    if (!newIsSelect || domainIdIndex === 0 || _(this.state.selectedDomainIds).size() < 2) {
      scrollToDomainId = this._allDomainIds[0];
    }
    this._scrollToDomainSection(scrollToDomainId);
  }

  onToggleCourseSelect = (courseId, isSelected) => {
    if (isSelected) {
      this._addCourse(courseId);
    } else {
      this._removeCourse(courseId);
    }
  }

  onToggleS12nSelect = (s12nId, isSelected, s12nCourseIds = []) => {
    if (isSelected) {
      this._addS12n(s12nId, s12nCourseIds);
    } else {
      this._removeS12n(s12nId, s12nCourseIds);
    }
  }

  onEnterInfiniteModeByCourse = (activeDomainSectionIndex, subdomainHeaderHeight) => {
    this._subdomainHeaderHeight = subdomainHeaderHeight;
    this._handleExpand({activeDomainSectionIndex, isCourseExpanded: true});
  }

  onEnterInfiniteModeByS12n = (activeDomainSectionIndex, subdomainHeaderHeight) => {
    this._subdomainHeaderHeight = subdomainHeaderHeight;
    this._handleExpand({activeDomainSectionIndex, isCourseExpanded: false});
  }

  onLeaveInfiniteMode = () => {
    this.setState({isInfiniteMode: false});
  }

  onS12nContainerHeightChange = (s12nContainerHeight) => {
    this._s12nContainerHeight = s12nContainerHeight;
  }

  _addCourse = (id) => {
    let selectedCourseIds = [...this.state.selectedCourseIds, id];
    selectedCourseIds = _.uniq(selectedCourseIds);
    this.setState({
      selectedCourseIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount + 1,
    });
  }

  _removeCourse = (id) => {
    const selectedCourseIds = _.reject(this.state.selectedCourseIds, item => item === id);
    this.setState({
      selectedCourseIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount - 1,
    });
  }

  _addS12n = (id, s12nCourseIds = []) => {
    let selectedS12nIds = [...this.state.selectedS12nIds, id];
    selectedS12nIds = _.uniq(selectedS12nIds);
    this.setState({
      selectedS12nIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount + _(s12nCourseIds).size(),
    });

    this._selectedS12nRecord[id] = s12nCourseIds;
  }

  _removeS12n = (id, s12nCourseIds = []) => {
    const selectedS12nIds = _.reject(this.state.selectedS12nIds, item => item === id);
    this.setState({
      selectedS12nIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount - _(s12nCourseIds).size(),
    });
  }

  _handleExpand = ({activeDomainSectionIndex, isCourseExpanded}) => {
    this.setState({isInfiniteMode: true, activeDomainSectionIndex, isCourseExpanded});
    this._scrollToDomainSectionDetail(isCourseExpanded);
  }

  _scrollToDomainSection = (domainId) => {
    const offset = 0;
    // TODO[Audrey]: adjust duration based on distance, currently very rough calculation
    const domainIdIndex = _(this.state.selectedDomainIds).indexOf(domainId);
    const indexGap = Math.abs(domainIdIndex, this.state.activeDomainSectionIndex);
    const duration = ((indexGap + 1) * DEFAULT_SCROLL_DURATION) / 2;
    this.props.scrollToElement(domainId, { offset, duration });
  }

  _scrollToDomainSectionDetail = (isCourseExpanded) => {
    if (isCourseExpanded) {
      // TODO[Audrey]: confirm with design about the behavior
      // const domainId = this._allDomainIds[this.state.activeDomainSectionIndex]
      const scrollY = this._s12nContainerHeight + this._subdomainHeaderHeight;
      this.props.scrollTo(scrollY - 160, {
        isDynamic: true,
      });
    } else {
      this.props.scrollToTop();
    }
  }

  render() {
    const {
      domains, isScrolling,
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
            onSetSelectedDomainIds={this.onSetSelectedDomainIds}
            onSetSearchKeyword={this.onSetSearchKeyword}
            searchKeyWord={searchKeyWord}
            selectedDomainIds={selectedDomainIds}
          />
        </HeaderSmartScroll>

        <div
          className={isInfiniteMode ? 'w-100' : 'container'}
          style={mainContainerStyle}
        >
          {_(selectedDomainIds).size() === 0 && <NoDomainSelected />}
          {_(domainListData).map((item, index) => (
            <div
              key={`domain-container~${item.id}`}
              style={item.isSelected ? {} : {maxHeight: 0}}
              id={item.id}
            >
              <DomainSectionCard
                isAutoScroll={isScrolling}
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
                onToggleCourseSelect={this.onToggleCourseSelect}
                onToggleS12nSelect={this.onToggleS12nSelect}
                searchKeyWord={searchKeyWord}
                selectedCourseIds={selectedCourseIds}
                selectedS12nIds={selectedS12nIds}
                subdomainIds={item.subdomainIds}
                onS12nContainerHeightChange={this.onS12nContainerHeightChange}
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
  withScrollTo({duration: DEFAULT_SCROLL_DURATION, smooth: true})
)(ProgramSelectCoursePage);

const styles = StyleSheet.create({
  ProgramSelectCoursePage: {
    minHeight: 450,
    backgroundColor: color.bgGray,
    overflowY: 'scroll',
  },
  domainSectionCardListContainer: {

  }
});
