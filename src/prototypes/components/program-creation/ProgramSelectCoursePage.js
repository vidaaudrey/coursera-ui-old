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
    searchKeyWord: React.PropTypes.string,
    selectedCourseIds: React.PropTypes.array.isRequired,
    selectedS12nIds: React.PropTypes.array.isRequired,
    selectedDomainIds: React.PropTypes.array.isRequired,
    onToggleCourseSelect: React.PropTypes.func.isRequired,
    onToggleS12nSelect: React.PropTypes.func.isRequired,
    onEnterInfiniteModeByCourse: React.PropTypes.func.isRequired,
    onEnterInfiniteModeByS12n: React.PropTypes.func.isRequired,
    onLeaveInfiniteMode: React.PropTypes.func.isRequired,
    activeDomainSectionIndex: React.PropTypes.number.isRequired,
    onLoadSubdomainContainer: React.PropTypes.func.isRequired,
  }


  render() {
    const {
      headerHeight,
      selectedCourseIds, selectedS12nIds, selectedDomainIds,
      onToggleCourseSelect, onToggleS12nSelect,
      onSelectChange, domains, searchKeyWord,
      onEnterInfiniteModeByCourse, onEnterInfiniteModeByS12n, onLeaveInfiniteMode,
      onLoadSubdomainContainer,
      activeDomainSectionIndex, isCourseExpanded,
      isInfiniteMode,
    } = this.props;

    if (_(selectedDomainIds).size() === 0) {
      return <NoDomainSelected />;
    }

    const domainListData = _(domains).reduce((total, item) => {
      if (_(selectedDomainIds).contains(item.id)) {
        total.push(item);
        return total;
      }
      return total;
    }, []);

    return (
      <div {...css(styles.ProgramSelectCoursePage)} style={{marginTop: headerHeight}}>
        {_(domainListData).map((item, index) => (
          <div className="m-b-3" key={`domain-container~${item.id}`}>
            <DomainSectionCardList
              index={index}
              onSelectChange={onSelectChange}
              subdomainIds={item.subdomainIds}
              domainName={item.name}
              domainId={item.id}
              searchKeyWord={searchKeyWord}
              selectedCourseIds={selectedCourseIds}
              selectedS12nIds={selectedS12nIds}
              onToggleCourseSelect={onToggleCourseSelect}
              onToggleS12nSelect={onToggleS12nSelect}
              onEnterInfiniteModeByCourse={onEnterInfiniteModeByCourse}
              onEnterInfiniteModeByS12n={onEnterInfiniteModeByS12n}
              onLeaveInfiniteMode={onLeaveInfiniteMode}
              isInfiniteMode={isInfiniteMode}
              isInfiniteModeLocal={isInfiniteMode && index === activeDomainSectionIndex}
              isCourseExpanded={isCourseExpanded}
              activeDomainSectionIndex={activeDomainSectionIndex}
              onLoadSubdomainContainer={onLoadSubdomainContainer}
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
