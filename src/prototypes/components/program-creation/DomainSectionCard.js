/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes, Component} from 'react';
import {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition, breakPoints, zIndex
} from 'src/styles/theme';
import _ from 'underscore';
import Measure from 'react-measure';

import HeaderSmartScroll from 'src/prototypes/components/program-common/HeaderSmartScroll';
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
const DEFAULT_HEADER_HEIGHT = 168;

class DomainSectionCard extends Component {
  static propTypes = {
    // activeDomainSectionIndex: React.PropTypes.number.isRequired,
    domainId: PropTypes.string.isRequired,
    domainName: PropTypes.string.isRequired,
    index: PropTypes.number,
    isCourseExpanded: PropTypes.bool,
    isInfiniteModeLocal: PropTypes.bool,
    // Hide if not selected, as we need to get the ref for subdomainContainer for scrolling,
    // We need to render it, but in a way that's hidden from the dom
    isSelected: PropTypes.bool.isRequired,
    onEnterInfiniteModeByCourse: PropTypes.func.isRequired,
    onEnterInfiniteModeByS12n: PropTypes.func.isRequired,
    onLeaveInfiniteMode: PropTypes.func.isRequired,
    onLoadSubdomainContainer: PropTypes.func.isRequired,
    onToggleCourseSelect: PropTypes.func.isRequired,
    onToggleS12nSelect: PropTypes.func.isRequired,
    searchKeyWord: PropTypes.string,
    selectedCourseIds: PropTypes.array,
    selectedS12nIds: PropTypes.array,
    subdomainIds: PropTypes.array.isRequired,

    onS12nContainerHeightChange: PropTypes.func.isRequired,
    isAutoScroll: PropTypes.bool,
    // HOC
    scrollToTop: PropTypes.func.isRequired,
  }

  static defaultProps = {
    selectedCourseIds: [],
    selectedS12nIds: [],
    subdomainIds: [],
  }

  state = {
    subdomainHeaderHeight: DEFAULT_HEADER_HEIGHT,
  }

  componentDidMount() {
    if (this.domainContainerRef) {
      this.props.onLoadSubdomainContainer({ref: this.domainContainerRef, index: this.props.index});
    }
  }
  onExpandCourse = (index) => {
    this.props.onEnterInfiniteModeByCourse(index, this.state.subdomainHeaderHeight);
  }

  onExpandS12n = (index) => {
    this.props.onEnterInfiniteModeByS12n(index, this.state.subdomainHeaderHeight);
  }

  onSelectSubdomainChange = (data, allSelectedIds) => {
    console.warn('onSelectSubdomainChange', allSelectedIds);
  }

  // onSubDomainCardDimensionChange = (dimensions) => {
  //   this.setState({subDomainCardHeight: dimensions.height});
  // }

  onSubdomainHeaderHeightChange = (subdomainHeaderHeight) => {
    this.setState({subdomainHeaderHeight});
  }

  onS12nContainerHeightChange = ({height}) => {
    const { isInfiniteMode, isCourseExpanded } = this.props;
    if ((isInfiniteMode && isCourseExpanded) || !isInfiniteMode) {
      this.props.onS12nContainerHeightChange(height);
    }
  }

  render() {
    const {
      domainId,
      domainName,
      index,
      isCourseExpanded,
      isInfiniteMode,
      isInfiniteModeLocal,
      isAutoScroll,
      isSelected,
      onLeaveInfiniteMode,
      onToggleCourseSelect,
      onToggleS12nSelect,
      selectedCourseIds,
      selectedS12nIds,
      subdomainIds,
      onS12nContainerHeightChange,
    } = this.props;

    const { subdomainHeaderHeight } = this.state;

    // Render nothing if some other card is in isInfiniteMode
    if (isInfiniteMode && !isInfiniteModeLocal) {
      return null;
    }

    console.warn('--DomainSectionCard-', subdomainHeaderHeight);

    return (
      <div
        {...css(styles.DomainSectionCard, !isSelected && styles.visuallyHide)}
        style={{paddingTop: isInfiniteMode ? subdomainHeaderHeight - 48 : 0 }}
      >
        {isInfiniteMode &&
          <HeaderSmartScroll
            onHeaderHeightChange={this.onSubdomainHeaderHeightChange}
            isAutoScroll={isAutoScroll}
          >
            <div
              {...cssWithClass('w100', styles.cardTransition, styles.subDomainCardInfiniteMode)}
            >
              <div {...cssWithClass('container', styles.subDomainCardInnerContainer)}>
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
          </HeaderSmartScroll>
        }

        {!isInfiniteMode &&
          <div
            {...cssWithClass('container', styles.cardTransition, styles.subDomainCardNotInfiniteMode)}
          >
            <div {...cssWithClass(styles.subDomainCardInnerContainer)}>
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
        }

        <div className="container">
          <Measure onMeasure={this.onS12nContainerHeightChange}>
            <div {...cssWithClass('p-t-2', styles.cardTransition)}>
              <h5 {...css(styles.cardType)}> Specializations</h5>
              <DomainSectionS12nList
                responsiveConfig={{
                  xs: {initialS12nCount: 2},
                  sm: {initialS12nCount: 2},
                  md: {initialS12nCount: 4},
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
          </Measure>
          <div {...cssWithClass('m-b-1', styles.cardTransition)}>
            <h4 {...css(styles.cardType)} id={`${domainId}-course`}>Courses</h4>
            <DomainSectionCourseList
              limit={27}
              responsiveConfig={{
                xs: {initialCourseCount: 2},
                sm: {initialCourseCount: 4},
                md: {initialCourseCount: 6},
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

// module.exports = DomainSectionCard;
module.exports = compose(withScrollTo({duration: 1500}))(DomainSectionCard);


const styles = StyleSheet.create({
  DomainSectionCard: {
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
    // position: 'fixed',
    // zIndex: zIndex.md,
    // top: 0,
    // left: 0,
    // right: 0,
  },
});
