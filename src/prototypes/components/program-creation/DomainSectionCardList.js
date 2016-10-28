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
    isInfiniteModeLocal: React.PropTypes.bool,
    onEnterInfiniteModeByCourse: React.PropTypes.func.isRequired,
    onEnterInfiniteModeByS12n: React.PropTypes.func.isRequired,
    onLeaveInfiniteMode: React.PropTypes.func.isRequired,
    // onExpand: React.PropTypes.func.isRequired,
    activeDomainSectionIndex: React.PropTypes.number.isRequired,
    onLoadSubdomainContainer: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    selectedCourseIds: [],
    selectedS12nIds: [],
    subdomainIds: [],
  }

  // constructor(props, context) {
  //   super(props, context);
  //   this.state = {
  //     isCourseSectionExpanded: false,
  //     isS12nSectionExpanded: false,
  //     scrollPosY: 0,
  //   };
  // }
  //
  // componentWillReceiveProps({activeDomainSectionIndex, index}) {
  //   // If the user move to the next section, we'll get out of the infiniteMode
  //   if (activeDomainSectionIndex !== index) {
  //     this.setState({
  //       isCourseSectionExpanded: false,
  //       isS12nSectionExpanded: false,
  //       scrollPosY: 0,
  //     });
  //   }
  // }

  componentDidMount() {
    this.props.onLoadSubdomainContainer({ref: this.containerRef, index: this.props.index});
  }

  // onS12nExpand = () => {
  //   const pos = getScreenCordinates(this.containerRef, window.document);
  //   this.setState({
  //     isS12nSectionExpanded: true,
  //     scrollPosY: pos.y,
  //   });
  //   this.handleExpand({scrollPosY: pos.y, isCourseExpanded: false});
  // }
  //
  // onCourseExpand = () => {
  //   const pos = getScreenCordinates(this.containerRef, window.document);
  //   this.setState({
  //     isCourseSectionExpanded: true,
  //     scrollPosY: pos.y,
  //   });
  //   this.handleExpand({scrollPosY: pos.y, isCourseExpanded: true});
  // }
  //
  // onCollapse = () => {
  //   scroll.scrollTo(this.state.scrollPosY, {
  //     ...SCROLL_OPTIONS,
  //     duration: DEFAULT_UNIT_COLLAPSE_DURATION,
  //   });
  //
  //   if (this.state.isS12nSectionExpanded) {
  //     this.setState({isS12nSectionExpanded: false});
  //   } else {
  //     this.setState({isCourseSectionExpanded: false});
  //   }
  //   this.props.onLeaveInfiniteMode(); // delete later
  // }
  //
  onSelectSubdomainChange = (data, allSelectedIds) => {
    console.warn('onSelectSubdomainChange', allSelectedIds);
  }
  //
  // handleExpand = ({scrollPosY, isCourseExpanded}) => {
  //   scroll.scrollTo(scrollPosY - NAVBAR_HEIGHT, {
  //     ...SCROLL_OPTIONS,
  //     duration: DEFAULT_EXPAND_DURATION,
  //   });
  //
  //   this.props.onEnterInfiniteMode();
  //   this.props.onExpand({
  //     index: this.props.index,
  //     isCourseExpanded,
  //   });
  // }

  render() {
    const {
      index,
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

    return (
      <div {...css(styles.DomainSectionCardList)}>
        <div
          {...cssWithClass(isInfiniteModeLocal ? 'w-100' : 'container', isInfiniteModeLocal && styles.darkBg, styles.subDomainCardTransition)}
          ref={r => (this.containerRef = r)}
        >
          <div {...cssWithClass(isInfiniteModeLocal ? 'container' : '', !isInfiniteModeLocal && styles.w100)}>
            <DomainSectionSubDomainCard
              onSelectChange={this.onSelectSubdomainChange}
              subdomainIds={subdomainIds}
              isInfiniteMode={isInfiniteModeLocal}
              onCollapse={onLeaveInfiniteMode}
              domainId={domainId}
            />
          </div>
        </div>
        <div className="container">
          <div {...css(styles.subDomainCardTransition, styles.s12nCardContainer, hideS12nCard && styles.hideS12nCardContainer)}>
            <h2>{domainId}</h2>
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
          <div {...css(styles.subDomainCardTransition)}>
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
  hideS12nCardContainer: {
    maxHeight: 0,
    transition: transition.easeOut(),
    overflow: 'hidden',
  },
  s12nCardContainer: {
    maxHeight: 1000,
  },
});
