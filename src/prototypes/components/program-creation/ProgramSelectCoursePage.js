/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import withScrollInfo from 'src/components/hocs/withScrollInfo';
import {Avatar, Button} from 'src';
import DomainSectionCardList from 'src/prototypes/components/program-creation/DomainSectionCardList';
import NoDomainSelected from 'src/prototypes/components/program-creation/NoDomainSelected';
import withApiMockData from 'src/components/hocs/withApiMockData';
const _ = require('underscore');

class ProgramSelectCoursePage extends React.Component {
  static propTypes = {
    activeDomainSectionIndex: React.PropTypes.number.isRequired,
    domains: React.PropTypes.array.isRequired,
    onEnterInfiniteModeByCourse: React.PropTypes.func.isRequired,
    onEnterInfiniteModeByS12n: React.PropTypes.func.isRequired,
    onLeaveInfiniteMode: React.PropTypes.func.isRequired,
    onLoadSubdomainContainer: React.PropTypes.func.isRequired,
    onToggleCourseSelect: React.PropTypes.func.isRequired,
    onToggleS12nSelect: React.PropTypes.func.isRequired,
    searchKeyWord: React.PropTypes.string,
    selectedCourseIds: React.PropTypes.array.isRequired,
    selectedDomainIds: React.PropTypes.array.isRequired,
    selectedS12nIds: React.PropTypes.array.isRequired,
  }

  static defaultProps = {
    selectedS12nIds: [],
    selectedCourseIds: [],
    domains: [],
  }


  render() {
    const {
      headerHeight,
      selectedCourseIds,
      selectedS12nIds,
      selectedDomainIds,
      onToggleCourseSelect,
      onToggleS12nSelect,
      onSelectChange,
      domains,
      searchKeyWord,
      onEnterInfiniteModeByCourse,
      onEnterInfiniteModeByS12n,
      onLeaveInfiniteMode,
      onLoadSubdomainContainer,
      activeDomainSectionIndex,
      isCourseExpanded,
      isInfiniteMode
    } = this.props;

    const domainListData = domains.map(item => ({...item, isSelected: _(selectedDomainIds).contains(item.id)}));

    return (
      <div {...css(styles.ProgramSelectCoursePage)} style={{marginTop: headerHeight}}>
        {_(selectedDomainIds).size() === 0 && <NoDomainSelected />}
        {_(domainListData).map((item, index) => (
          <div key={`domain-container~${item.id}`}>
            <DomainSectionCardList
              activeDomainSectionIndex={activeDomainSectionIndex}
              domainId={item.id}
              domainName={item.name}
              index={index}
              isCourseExpanded={isCourseExpanded}
              isInfiniteMode={isInfiniteMode}
              isInfiniteModeLocal={isInfiniteMode && index === activeDomainSectionIndex}
              isSelected={item.isSelected}
              onEnterInfiniteModeByCourse={onEnterInfiniteModeByCourse}
              onEnterInfiniteModeByS12n={onEnterInfiniteModeByS12n}
              onLeaveInfiniteMode={onLeaveInfiniteMode}
              onLoadSubdomainContainer={onLoadSubdomainContainer}
              onToggleCourseSelect={onToggleCourseSelect}
              onToggleS12nSelect={onToggleS12nSelect}
              searchKeyWord={searchKeyWord}
              selectedCourseIds={selectedCourseIds}
              selectedS12nIds={selectedS12nIds}
              subdomainIds={item.subdomainIds}
            />
          </div>
        ))}
      </div>
    );
  }
}

const ProgramSelectCoursePagewithApiMockData = withApiMockData({
  dataType: 'DOMAINS',
})(ProgramSelectCoursePage);

module.exports = ProgramSelectCoursePagewithApiMockData;

const styles = StyleSheet.create({
  ProgramSelectCoursePage: {
    minHeight: 450,
  },
});
