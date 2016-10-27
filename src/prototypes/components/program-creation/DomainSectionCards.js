/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const _ = require('underscore');
import {Button, CourseCard, LayeredS12nCard} from 'src';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');
import Measure from 'react-measure';
const Scroll  = require('react-scroll');
const scroll = Scroll.animateScroll;
const DomainSectionSubDomainCard = require('src/prototypes/components/program-creation/DomainSectionSubDomainCard');
const DomainSectionS12nList = require('src/prototypes/components/program-creation/DomainSectionS12nList');
const DomainSectionCourseList = require('src/prototypes/components/program-creation/DomainSectionCourseList');

const {
  getScreenCordinates, getSmoothScrollToTopDuration,
} = require('src/utils/common');

const SCROLL_OPTIONS = {
  smooth: true,
};
const SCROLL_UNIT_DURATION = 600;

const DEFAULT_EXPAND_DURATION =  400;
const DEFAULT_UNIT_COLLAPSE_DURATION = 200;

class DomainSectionCards extends React.Component {
  static propTypes = {
    selectedCourseIds: React.PropTypes.array,
    selectedS12nIds: React.PropTypes.array,
    domainId: React.PropTypes.string.isRequired,
    subdomainIds: React.PropTypes.array.isRequired,
    domainName: React.PropTypes.string.isRequired,
    searchKeyWord: React.PropTypes.string,
    onToggleCourseSelect: React.PropTypes.func.isRequired,
    onToggleS12nSelect: React.PropTypes.func.isRequired,
    index: React.PropTypes.number,
  }

  static defaultProps = {
    selectedCourseIds: [],
    selectedS12nIds: [],
    subdomainIds: [],
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isCourseSectionExpanded: false,
      isS12nSectionExpanded: false,
    };
  }

  onS12nExpand = () => {
    this.setState({isS12nSectionExpanded: true});
    const pos = getScreenCordinates(this.containerRef, window.document);
    scroll.scrollTo(pos.y, {
      ...SCROLL_OPTIONS,
      duration: DEFAULT_EXPAND_DURATION,
    });
  }

  onCourseExpand = () => {
    this.setState({isCourseSectionExpanded: true});
    const pos = getScreenCordinates(this.containerRef, window.document);
    scroll.scrollTo(pos.y, {
      ...SCROLL_OPTIONS,
      duration: DEFAULT_EXPAND_DURATION,
    });
  }

  onCollapse = () => {
    scroll.scrollToTop({
      ...SCROLL_OPTIONS,
      duration: getSmoothScrollToTopDuration(this.props.index, DEFAULT_UNIT_COLLAPSE_DURATION),
    });

    if (this.state.isS12nSectionExpanded) {
      this.setState({isS12nSectionExpanded: false});
    } else {
      this.setState({isCourseSectionExpanded: false});
    }
  }

  onSelectSubdomainChange = (data, allSelectedIds) => {
    console.warn('onSelectSubdomainChange', allSelectedIds);
  }

  scrollSubdomainCardIntoView = () => {

  }

  render() {
    const {
      subdomainIds,
      selectedCourseIds, selectedS12nIds,
      onToggleCourseSelect, onToggleS12nSelect,
      domainName,
    } = this.props;
    const {
      isCourseSectionExpanded, isS12nSectionExpanded
    } = this.state;

    const s12nIds = ['s1', 's2', 's3'];
    // const s12nIds = ['s1', 's2', 's3', 's4', 's5', 's6'];
    const courseIds = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
    const courses = _.chain(courseIds)
      .map(id => ({
        id,
        isSelected: _(selectedCourseIds).contains(id),
      }))
      .value();

    const isInfiniteMode = isCourseSectionExpanded || isS12nSectionExpanded;

    return (
      <div {...css(styles.DomainSectionCards)}>
        <div
          ref={r => (this.containerRef = r)}
        >
          <DomainSectionSubDomainCard
            onSelectChange={this.onSelectSubdomainChange}
            subdomainIds={subdomainIds}
            isInfiniteMode={isInfiniteMode}
            onCollapse={this.onCollapse}
          />
        </div>

        <h2 {...css(styles.domainName)}>{domainName}</h2>

        {!isCourseSectionExpanded &&
          <div>
            <h5 {...css(styles.cardType)}> Specializations</h5>
            <DomainSectionS12nList
              s12nIds={s12nIds}
              onToggleS12nSelect={onToggleS12nSelect}
              isExpanded={isS12nSectionExpanded}
              onExpand={this.onS12nExpand}
              selectedS12nIds={selectedS12nIds}
            />
          </div>
        }

        <h4 {...css(styles.cardType)}> Courses</h4>
        <DomainSectionCourseList
          courseIds={courseIds}
          onToggleCourseSelect={onToggleCourseSelect}
          isExpanded={isCourseSectionExpanded}
          onExpand={this.onCourseExpand}
          selectedCourseIds={selectedCourseIds}
        />
      </div>
    );
  }
}


module.exports = DomainSectionCards;

const styles = StyleSheet.create({
  DomainSectionCards: {
    textAlign: 'left',
  },
  domainName: {
    fontWeight: 'normal',
  },
  cardType: {
    textTransform: 'uppercase',
    color: color.secondaryText,
  },
});
