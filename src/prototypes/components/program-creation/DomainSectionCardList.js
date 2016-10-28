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
const MAX_S12N_CONTAINER_HEIGHT = 2820;

class DomainSectionCardList extends React.Component {
  static propTypes = {
    activeDomainSectionIndex: React.PropTypes.number.isRequired,
    domainId: React.PropTypes.string.isRequired,
    domainName: React.PropTypes.string.isRequired,
    index: React.PropTypes.number,
    isInfiniteModeLocal: React.PropTypes.bool,
    // Hide if not selected, as we need to get the ref for subdomainContainer for scrolling,
    // We need to render it, but in a way that's hidden from the dom
    isSelected: React.PropTypes.bool.isRequired,
    onEnterInfiniteModeByCourse: React.PropTypes.func.isRequired,
    onEnterInfiniteModeByS12n: React.PropTypes.func.isRequired,
    onLeaveInfiniteMode: React.PropTypes.func.isRequired,
    onLoadSubdomainContainer: React.PropTypes.func.isRequired,
    onToggleCourseSelect: React.PropTypes.func.isRequired,
    onToggleS12nSelect: React.PropTypes.func.isRequired,
    searchKeyWord: React.PropTypes.string,
    selectedCourseIds: React.PropTypes.array,
    selectedS12nIds: React.PropTypes.array,
    subdomainIds: React.PropTypes.array.isRequired,
  }

  static defaultProps = {
    selectedCourseIds: [],
    selectedS12nIds: [],
    subdomainIds: [],
  }

  componentDidMount() {
    this.props.onLoadSubdomainContainer({ref: this.containerRef, index: this.props.index});
  }

  onSelectSubdomainChange = (data, allSelectedIds) => {
    console.warn('onSelectSubdomainChange', allSelectedIds);
  }

  render() {
    const {
      index, isSelected,
      subdomainIds, domainId,
      selectedCourseIds, selectedS12nIds,
      onToggleCourseSelect, onToggleS12nSelect,
      domainName,
      onEnterInfiniteModeByCourse, onEnterInfiniteModeByS12n, onLeaveInfiniteMode,
      isInfiniteModeLocal, isCourseExpanded, activeDomainSectionIndex,
    } = this.props;

    const s12nIds = ['s1', 's2', 's3'];
    const courseIds = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
    const hideS12nCard = isInfiniteModeLocal && isCourseExpanded;
    const showS12nInfinite = isInfiniteModeLocal && !isCourseExpanded;
    let s12nContainerMaxHeight = 'auto';
    if (hideS12nCard) {
      s12nContainerMaxHeight = 0;
    } else if (!isInfiniteModeLocal) {
      s12nContainerMaxHeight = MAX_S12N_CONTAINER_HEIGHT;
    }

    return (
      <div {...css(styles.DomainSectionCardList, !isSelected && styles.visuallyHide)}>
        <div
          {...cssWithClass(isInfiniteModeLocal ? 'w-100' : 'container', isInfiniteModeLocal && styles.darkBg, styles.cardTransition)}
          ref={r => (this.containerRef = r)}
        >
          <div {...cssWithClass(isInfiniteModeLocal ? 'container' : '', !isInfiniteModeLocal && styles.w100)}>
            <DomainSectionSubDomainCard
              onSelectChange={this.onSelectSubdomainChange}
              subdomainIds={subdomainIds}
              isInfiniteMode={isInfiniteModeLocal}
              onCollapse={onLeaveInfiniteMode}
              domainId={domainId}
              domainName={domainName}
            />
          </div>
        </div>
        <div className="container">
          <div
            {...cssWithClass(
              'p-t-2',
              styles.cardTransition,
              hideS12nCard && styles.hideS12nCardContainer,
            )}
            style={{maxHeight: s12nContainerMaxHeight}}
          >
            <div>
              <h5 {...css(styles.cardType)}> Specializations</h5>
              <DomainSectionS12nList
                s12nIds={s12nIds}
                onToggleS12nSelect={onToggleS12nSelect}
                isExpanded={isInfiniteModeLocal && !isCourseExpanded}
                onExpand={() => (onEnterInfiniteModeByS12n(index))}
                selectedS12nIds={selectedS12nIds}
              />
            </div>
          </div>
          <div {...cssWithClass('m-b-1', styles.cardTransition)}>
            <h4 {...css(styles.cardType)}>Courses</h4>
            <DomainSectionCourseList
              courseIds={courseIds}
              onToggleCourseSelect={onToggleCourseSelect}
              isExpanded={isInfiniteModeLocal && isCourseExpanded}
              onExpand={() => (onEnterInfiniteModeByCourse(index))}
              selectedCourseIds={selectedCourseIds}
            />
          </div>

        </div>
      </div>
    );
  }
}


module.exports = DomainSectionCardList;

const styles = StyleSheet.create({
  DomainSectionCardList: {
    transition: transition.easeOut(),
    textAlign: 'left',
    maxHeight: 10000,
    paddingBottom: spacing.lg,
  },
  visuallyHide: {
    height: 0,
    opacity: 0,
    overflow: 'hidden',
  },
  cardTransition: {
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
  hideS12nCardContainer: {
    maxHeight: 0,
    overflow: 'hidden',
  },
  s12nCardContainer: {
    maxHeight: 10000, // give a maxHeight for smooth transition
  },
});
