/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const _ = require('underscore');
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition, breakPoints, zIndex
} = require('src/styles/theme');

let DomainSectionSubDomainCard = require('src/prototypes/components/program-creation/DomainSectionSubDomainCard');
let DomainSectionS12nList = require('src/prototypes/components/program-creation/DomainSectionS12nList');
let DomainSectionCourseList = require('src/prototypes/components/program-creation/DomainSectionCourseList');
const withResponsiveConfig = require('src/components/hocs/withResponsiveConfig');
const withDimensions = require('src/components/hocs/withDimensions');
import {compose} from 'recompose';
DomainSectionSubDomainCard = compose(withDimensions({}), withResponsiveConfig)(DomainSectionSubDomainCard);
DomainSectionS12nList = withResponsiveConfig(DomainSectionS12nList);
DomainSectionCourseList = withResponsiveConfig(DomainSectionCourseList);
const withScrollTo = require('src/components/hocs/withScrollTo');

const MAX_S12N_CONTAINER_HEIGHT = 2820;

class DomainSectionCardList extends React.Component {
  static propTypes = {
    // activeDomainSectionIndex: React.PropTypes.number.isRequired,
    domainId: React.PropTypes.string.isRequired,
    domainName: React.PropTypes.string.isRequired,
    index: React.PropTypes.number,
    isCourseExpanded: React.PropTypes.bool,
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

    scrollToTop: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    selectedCourseIds: [],
    selectedS12nIds: [],
    subdomainIds: [],
  }

  state = {
    subDomainCardHeight: 350,
  }

  componentDidMount() {
    this.props.onLoadSubdomainContainer({ref: this.containerRef, index: this.props.index});
  }
  onExpandCourse = (index) => {
    this.props.scrollToTop();
    this.props.onEnterInfiniteModeByCourse(index);
  }

  onExpandS12n = (index) => {
    this.props.scrollToTop();
    this.props.onEnterInfiniteModeByS12n(index);
  }
  onSelectSubdomainChange = (data, allSelectedIds) => {
    console.warn('onSelectSubdomainChange', allSelectedIds);
  }

  onSubDomainCardDimensionChange = (dimensions) => {
    this.setState({subDomainCardHeight: dimensions.height});
  }

  render() {
    const {
      domainId,
      domainName,
      index,
      isCourseExpanded,
      isInfiniteMode,
      isInfiniteModeLocal,
      isSelected,
      onLeaveInfiniteMode,
      onToggleCourseSelect,
      onToggleS12nSelect,
      selectedCourseIds,
      selectedS12nIds,
      subdomainIds,
    } = this.props;

    const {subDomainCardHeight} = this.state;

    // Render nothing if some other card is in isInfiniteMode
    if (isInfiniteMode && !isInfiniteModeLocal) {
      return null;
    }

    const mainCardContainerStyle = {
      paddingTop: isInfiniteMode ? subDomainCardHeight - 48 : 0,
    };

    console.warn('--DomainSectionCardList-', this.props);
    return (
      <div {...css(styles.DomainSectionCardList, !isSelected && styles.visuallyHide)}>
        <div
          {...cssWithClass(isInfiniteMode ? 'w100' : 'container', styles.cardTransition, isInfiniteMode ? styles.subDomainCardInfiniteMode : styles.subDomainCardNotInfiniteMode)}
          ref={r => (this.containerRef = r)}
        >
          <div {...cssWithClass(isInfiniteMode ? 'container' : '', styles.subDomainCardInnerContainer)}>
            <DomainSectionSubDomainCard
              onSelectChange={this.onSelectSubdomainChange}
              subdomainIds={subdomainIds}
              isInfiniteMode={isInfiniteModeLocal}
              onCollapse={onLeaveInfiniteMode}
              domainId={domainId}
              domainName={domainName}
              onDimensionChange={this.onSubDomainCardDimensionChange}
            />
          </div>
        </div>
        <div className="container" style={mainCardContainerStyle}>
          <div
            {...cssWithClass('p-t-2', styles.cardTransition)}
            ref={r => (this.s12nContainerRef = r)}
          >
            <h5 {...css(styles.cardType)}> Specializations</h5>
            <DomainSectionS12nList
              responsiveConfig={{
                xs: {initialS12nCount: 2},
                sm: {initialS12nCount: 2},
                md: {initialS12nCount: 2},
                lg: {initialS12nCount: 6},
                xl: {initialS12nCount: 8},
                xxl: {initialS12nCount: 8},
              }}
              limit={16}
              onToggleS12nSelect={onToggleS12nSelect}
              isExpanded={isInfiniteModeLocal && !isCourseExpanded}
              onExpand={() => (this.onExpandS12n(index))}
              selectedS12nIds={selectedS12nIds}
            />
          </div>
          <div
            {...cssWithClass('m-b-1', styles.cardTransition)}
            ref={r => (this.courseContainerRef = r)}
          >
            <h4 {...css(styles.cardType)}>Courses</h4>
            <DomainSectionCourseList
              limit={27}
              responsiveConfig={{
                xs: {initialCourseCount: 2},
                sm: {initialCourseCount: 4},
                md: {initialCourseCount: 4},
                lg: {initialCourseCount: 8},
                xl: {initialCourseCount: 8},
                xxl: {initialCourseCount: 12},
              }}
              onToggleCourseSelect={onToggleCourseSelect}
              isExpanded={isInfiniteModeLocal && isCourseExpanded}
              onExpand={() => (this.onExpandCourse(index))}
              selectedCourseIds={selectedCourseIds}
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = compose(withScrollTo({duration: 1500}))(DomainSectionCardList);


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
  s12nCardContainer: {
    maxHeight: 10000, // give a maxHeight for smooth transition
  },
  subDomainCard: {
    backgroundColor: color.darkPrimary,
  },
  subDomainCardNotInfiniteMode: {
    width: '100%',
  },
  subDomainCardInfiniteMode: {
    backgroundColor: color.darkPrimary,
    position: 'fixed',
    zIndex: zIndex.md,
    top: 0,
    left: 0,
    right: 0,
  },
});
