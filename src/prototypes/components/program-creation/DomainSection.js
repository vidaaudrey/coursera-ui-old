/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
import {Avatar, Button} from 'src';
const _ = require('underscore');
import {CourseCard, LayeredS12nCard} from 'src';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import DomainCard from 'src/prototypes/components/program-creation/DomainCard';
import DomainSectionSubDomainCard from 'src/prototypes/components/program-creation/DomainSectionSubDomainCard';


class DomainSection extends React.Component {
  static propTypes = {
    selectedCourseIds: React.PropTypes.array,
    selectedS12nIds: React.PropTypes.array,
    subdomainIds: React.PropTypes.array,
    domainId: React.PropTypes.string.isRequired,
    domainName: React.PropTypes.string.isRequired,
    searchKeyWord: React.PropTypes.string,
    onToggleCourseSelect: React.PropTypes.func.isRequired,
    onToggleS12nSelect: React.PropTypes.func.isRequired,
    onSelectChange: React.PropTypes.func,
  }

  static defaultProps = {
    selectedCourseIds: [],
    selectedS12nIds: [],
    subdomainIds: [],
  }

  constructor(props, context) {
    super(props, context);
    const {domainId, searchKeyWord} = props;
    console.log('--Domain Card TODO: search on s12n and course by domainId and searchKeyWord--', domainId, searchKeyWord);
  }

  render() {
    const {
      selectedCourseIds, selectedS12nIds,
      onToggleCourseSelect, onToggleS12nSelect,
      onSelectChange, searchKeyWord, domainName, domainId, subdomainIds,
    } = this.props;

    return (
      <section {...css(styles.DomainSection)}>
        <DomainSectionSubDomainCard
          onSelectChange={onSelectChange}
          subdomainIds={subdomainIds}
        />
        <DomainCard
          domainName={domainName}
          domainId={domainId}
          searchKeyWord={searchKeyWord}
          selectedCourseIds={selectedCourseIds}
          selectedS12nIds={selectedS12nIds}
          onToggleCourseSelect={onToggleCourseSelect}
          onToggleS12nSelect={onToggleS12nSelect}
        />
      </section>
    );
  }
}

module.exports = DomainSection;

const styles = StyleSheet.create({
  DomainSection: {
    textAlign: 'left',
  },
});
