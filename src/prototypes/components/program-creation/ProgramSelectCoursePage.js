import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import {Avatar, Button} from 'src';
import DomainCard from 'src/prototypes/components/program-creation/DomainCard';
import SubDomainSelectCard from 'src/prototypes/components/program-creation/SubDomainSelectCard';
import NoDomainSelected from 'src/prototypes/components/program-creation/NoDomainSelected';
import withApiData from 'src/components/hocs/withApiData';
const _ = require('underscore');

class ProgramSelectCoursePage extends React.Component {
  static propTypes = {
    searchKeyWord: React.PropTypes.string,
    selectedCourseIds: React.PropTypes.array.isRequired,
    selectedS12nIds: React.PropTypes.array.isRequired,
    selectedDomainIds: React.PropTypes.array.isRequired,
    onToggleCourseSelect: React.PropTypes.func.isRequired,
    onToggleS12nSelect: React.PropTypes.func.isRequired,
  }

  render() {
    const {
      selectedCourseIds, selectedS12nIds, selectedDomainIds,
      onToggleCourseSelect, onToggleS12nSelect,
      onSelectChange, domains, searchKeyWord,
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
      <div {...css(styles.ProgramSelectCoursePage)}>
        {_(domainListData).map(item => (
          <section className="m-b-3" key={`domain-container~${item.id}`}>
            <SubDomainSelectCard
              onSelectChange={onSelectChange}
              alignCenter
              subdomainIds={item.subdomainIds}
            />
            <DomainCard
              domainName={item.name}
              domainId={item.id}
              searchKeyWord={searchKeyWord}
              selectedCourseIds={selectedCourseIds}
              selectedS12nIds={selectedS12nIds}
              onToggleCourseSelect={onToggleCourseSelect}
              onToggleS12nSelect={onToggleS12nSelect}
            />
          </section>
        ))}
      </div>
    );
  }
}

const ProgramSelectCoursePageWithApiData = withApiData({
  dataType: 'DOMAINS',
})(ProgramSelectCoursePage);

module.exports = ProgramSelectCoursePageWithApiData;

const styles = StyleSheet.create({
  ProgramSelectCoursePage: {
    minHeight: 450,
  },
});
