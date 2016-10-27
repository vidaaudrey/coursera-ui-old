/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const _ = require('underscore');
import {Button, CourseCard, LayeredS12nCard} from 'src';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');
const {containerAll, w100} = require('src/styles/responsiveUtils');

import Measure from 'react-measure';
const Scroll  = require('react-scroll');
const scroll = Scroll.animateScroll;
const DomainSectionSubDomainCard = require('src/prototypes/components/program-creation/DomainSectionSubDomainCard');
const DomainSectionS12nList = require('src/prototypes/components/program-creation/DomainSectionS12nList');
const DomainSectionCourseList = require('src/prototypes/components/program-creation/DomainSectionCourseList');
const classNames = require('classnames');

const { getScreenCordinates } = require('src/utils/common');

const SCROLL_OPTIONS = {
  smooth: true,
};

const DEFAULT_EXPAND_DURATION = 400;
const DEFAULT_UNIT_COLLAPSE_DURATION = 600;
const NAVBAR_HEIGHT = 20;

class DomainSectionCardList extends React.Component {
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
    onEnterInfiniteMode: React.PropTypes.func.isRequired,
    onLeaveInfiniteMode: React.PropTypes.func.isRequired,
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
      scrollPosY: 0,
    };
  }

  onS12nExpand = () => {
    const pos = getScreenCordinates(this.containerRef, window.document);
    this.setState({
      isS12nSectionExpanded: true,
      scrollPosY: pos.y,
    });
    this.handleExpand(pos.y);
  }

  onCourseExpand = () => {
    const pos = getScreenCordinates(this.containerRef, window.document);
    this.setState({
      isCourseSectionExpanded: true,
      scrollPosY: pos.y,
    });
    this.handleExpand(pos.y);
  }

  onCollapse = () => {
    scroll.scrollTo(this.state.scrollPosY, {
      ...SCROLL_OPTIONS,
      duration: DEFAULT_UNIT_COLLAPSE_DURATION,
    });

    if (this.state.isS12nSectionExpanded) {
      this.setState({isS12nSectionExpanded: false});
    } else {
      this.setState({isCourseSectionExpanded: false});
    }
    this.props.onLeaveInfiniteMode();
  }

  onSelectSubdomainChange = (data, allSelectedIds) => {
    console.warn('onSelectSubdomainChange', allSelectedIds);
  }

  handleExpand = (scrollPosY) => {
    scroll.scrollTo(scrollPosY - NAVBAR_HEIGHT, {
      ...SCROLL_OPTIONS,
      duration: DEFAULT_EXPAND_DURATION,
    });
    this.props.onEnterInfiniteMode();
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
    const courseIds = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
    const isInfiniteMode = isCourseSectionExpanded || isS12nSectionExpanded;

    return (
      <div {...css(styles.DomainSectionCardList)}>
        <div
          {...cssWithClass(isInfiniteMode ? 'w-100' : 'container', isInfiniteMode && styles.darkBg, styles.subDomainCardTransition)}
          ref={r => (this.containerRef = r)}
        >
          <div {...cssWithClass(isInfiniteMode ? 'container' : '', !isInfiniteMode && styles.w100)}>
            <DomainSectionSubDomainCard
              onSelectChange={this.onSelectSubdomainChange}
              subdomainIds={subdomainIds}
              isInfiniteMode={isInfiniteMode}
              onCollapse={this.onCollapse}
            />
          </div>
        </div>
        <div className="container">
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

          <h4 {...css(styles.cardType)}>Courses</h4>
          <DomainSectionCourseList
            courseIds={courseIds}
            onToggleCourseSelect={onToggleCourseSelect}
            isExpanded={isCourseSectionExpanded}
            onExpand={this.onCourseExpand}
            selectedCourseIds={selectedCourseIds}
          />
        </div>
      </div>
    );
  }
}


module.exports = DomainSectionCardList;

const styles = StyleSheet.create({
  DomainSectionCardList: {
    textAlign: 'left',
  },
  subDomainCardTransition: {
    transition: transition.easeOut(),
  },
  w100: {
    width: '100%',
  },
  darkBg: {
    backgroundColor: color.darkPrimary,
  },
  domainName: {
    fontWeight: 'normal',
  },
  cardType: {
    textTransform: 'uppercase',
    color: color.secondaryText,
  },
});
