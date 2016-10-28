/* eslint-disable no-param-reassign, no-use-before-define, max-len */

import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const _ = require('underscore');
import withApiMockData from 'src/components/hocs/withApiMockData';
import withScrollInfo from 'src/components/hocs/withScrollInfo';
import HeaderSmartScroll from 'src/prototypes/components/program-common/HeaderSmartScroll';
import ProgramAddNamePage from 'src/prototypes/components/program-creation/ProgramAddNamePage';
import ProgramSelectDomainPage from 'src/prototypes/components/program-creation/ProgramSelectDomainPage';
import ProgramSelectCoursePage from 'src/prototypes/components/program-creation/ProgramSelectCoursePage';
import ProgramPreviewPage from 'src/prototypes/components/program-creation/ProgramPreviewPage';
import ProgramFixedFooter from 'src/prototypes/components/program-creation/ProgramFixedFooter';
import SearchAndDomainSelectCard from 'src/prototypes/components/program-creation/SearchAndDomainSelectCard';
const Scroll  = require('react-scroll');
const scroll = Scroll.animateScroll;

const { getScreenCordinates } = require('src/utils/common');

import {
  HEADER_HEIGHT, FOOTER_HEIGHT, CREATE_PROGRAM_STEPS,
} from 'src/constants/ProgramCreationAppConstants';

const {
  stepCreateProgramName, stepSelectDomains, stepSelectCourses, stepProgramPreview,
  stepCreateProgram, stepCreateProgramSuccess, stepInviteMembers,
} = CREATE_PROGRAM_STEPS;

const ALL_STEPS = [
  stepCreateProgramName,
  stepSelectDomains,
  stepSelectCourses,
  stepProgramPreview,
  stepCreateProgramSuccess,
];

const DEFAULT_HEADER_HEIGHT = 264;
const DEFAULT_EXPAND_DURATION = 400;
const NAVBAR_HEIGHT = 16;

class ProgramCreationApp extends React.Component {
  static propTypes = {
    domains: React.PropTypes.array.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._subDomainContainerRefs = [];
    this._allDomainIds = _(props.domains).pluck('id');
    // Keep a record of all courseIds in a s12n
    this._selectedS12nRecord = {};
    this.state = {
      step: stepSelectCourses,
      programName: null,
      programSlug: null,
      programTagline: null,
      searchKeyWord: null,
      selectedDomainIds: ['data-science', 'computer-science', 'business'],
      selectedCourseIds: [],
      selectedS12nIds: [],
      seatLimit: 6,
      currentTotalSelectCount: 0,
      headerHeight: DEFAULT_HEADER_HEIGHT,

      // For Course Selection Page
      isInfiniteMode: false,
      activeDomainSectionIndex: 0,
      isCourseExpanded: false,
    };
  }

  onSetProgramName = (programName) => {
    this.setState({programName});
  }

  onSetProgramSlug = (programSlug) => {
    this.setState({programSlug});
  }

  onSetProgramTagline = (programTagline) => {
    this.setState({programTagline});
  }

  onSetSearchKeyword = (searchKeyWord) => {
    this.setState({searchKeyWord});
  }

  onSetDomains = ({selectedDomainIds, id, newIsSelect}) => {
    this.setState({selectedDomainIds, isInfiniteMode: false, activeDomainSectionIndex: -1});
    // If newly selected, scroll to that section, otherwise, scroll to top
    // Only scroll if it's beyong the first section
    if (newIsSelect && _(this.state.selectedDomainIds).size() > 1) {
      this._scrollToDomainSection(id);
    } else {
      this._scrollTo(50);
    }
  }

  onCreateProgram = () => {
    this.setState({step: stepCreateProgram});
  }

  onToggleCourseSelect = (courseId, isSelected) => {
    if (isSelected) {
      this.handleAddCourse(courseId);
    } else {
      this.handleRemoveCourse(courseId);
    }
  }

  onToggleS12nSelect = (s12nId, isSelected, s12nCourseIds = []) => {
    if (isSelected) {
      this.handleAddS12n(s12nId, s12nCourseIds);
    } else {
      this.handleRemoveS12n(s12nId, s12nCourseIds);
    }
  }

  onEnterInfiniteModeByCourse = (activeDomainSectionIndex) => {
    this._handleExpand({activeDomainSectionIndex, isCourseExpanded: true});
  }

  onEnterInfiniteModeByS12n = (activeDomainSectionIndex) => {
    this._handleExpand({activeDomainSectionIndex, isCourseExpanded: false});
  }

  onLeaveInfiniteMode = () => {
    this.setState({isInfiniteMode: false, scrollY: 0});
  }

  onSetInfiniteScrollSection = ({index: activeDomainSectionIndex, isCourseExpanded}) => {
    this.setState({activeDomainSectionIndex, isCourseExpanded});
  }

  onHeaderHeightChange = (headerHeight) => {
    this.setState({headerHeight});
  }

  onLoadSubdomainContainer = ({ref, index}) => {
    // Keep a copy of all the containerRefs so we can query at runtime
    this._subDomainContainerRefs[index] = ref;
  }

  onProgramNameNext = () => {
    this.setState({step: stepSelectDomains});
  }

  onDomainSelectionPrev = () => {
    this.setState({step: stepCreateProgramName});
  }

  onDomainSelectionNext = () => {
    this.setState({step: stepSelectCourses});
  }

  onCourseSelectionPrev = () => {
    this.setState({step: stepSelectDomains});
  }

  onCourseSelectionNext = () => {
    this.setState({step: stepProgramPreview});
  }

  onProgramPreviewPrev = () => {
    this.setState({step: stepSelectCourses});
  }

  onProgramPreviewNext = () => {
    this.setState({step: stepInviteMembers});
  }

  handleAddCourse = (id) => {
    let selectedCourseIds = [...this.state.selectedCourseIds, id];
    selectedCourseIds = _.uniq(selectedCourseIds);
    this.setState({
      selectedCourseIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount + 1,
    });
  }

  handleRemoveCourse = (id) => {
    const selectedCourseIds = _.reject(this.state.selectedCourseIds, item => item === id);
    this.setState({
      selectedCourseIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount - 1,
    });
  }

  handleAddS12n = (id, s12nCourseIds = []) => {
    let selectedS12nIds = [...this.state.selectedS12nIds, id];
    selectedS12nIds = _.uniq(selectedS12nIds);
    this.setState({
      selectedS12nIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount + _(s12nCourseIds).size(),
    });

    this._selectedS12nRecord[id] = s12nCourseIds;
  }

  handleRemoveS12n = (id, s12nCourseIds = []) => {
    const selectedS12nIds = _.reject(this.state.selectedS12nIds, item => item === id);
    this.setState({
      selectedS12nIds,
      currentTotalSelectCount: this.state.currentTotalSelectCount - _(s12nCourseIds).size(),
    });
  }

  _handleExpand = ({activeDomainSectionIndex, isCourseExpanded}) => {
    const pos = getScreenCordinates(this._subDomainContainerRefs[activeDomainSectionIndex], window.document);
    const scrollY = pos.y;
    this.setState({
      isInfiniteMode: true,
      isCourseExpanded,
      activeDomainSectionIndex,
      scrollY,
    });
    this._scrollTo(scrollY - NAVBAR_HEIGHT, DEFAULT_EXPAND_DURATION);
  }

  _scrollToDomainSection = (domainId) => {
    // Get the domain index and scroll to the corresponding section
    const domainIndex = _(this._allDomainIds).indexOf(domainId);
    if (this._subDomainContainerRefs[domainIndex]) {
      const pos = getScreenCordinates(this._subDomainContainerRefs[domainIndex], window.document);
      this._scrollTo(pos.y, DEFAULT_EXPAND_DURATION * 3);
    }
  }

  _scrollTo = (scrollY, duration) => {
    scroll.scrollTo(scrollY, {
      smooth: true,
      duration: duration || DEFAULT_EXPAND_DURATION,
    });
  }

  // handleInviteMemberPrev = () => {
  //   this.setState({step: stepSelectCourses});
  // }
  //
  // handleInviteMemberNext = () => {
  //   this.setState({step: stepCreateProgram});
  // }

  render() {
    const {domains} = this.props;
    const {
      step, programName, programSlug, programTagline, searchKeyWord,
      selectedDomainIds, selectedCourseIds, selectedS12nIds,
      seatLimit, currentTotalSelectCount, isInfiniteMode,
      headerHeight, isCourseExpanded, activeDomainSectionIndex,
    } = this.state;
    const showSelectCoursePage = (step === stepSelectCourses || step === stepCreateProgram || step === stepCreateProgramSuccess);
    // console.warn('-render--', this.props, this.state);

    return (
      <div {...cssWithClass('ProgramCreationApp bg-gray w-100 h-100', styles.ProgramCreationApp)}>

        <HeaderSmartScroll
          isInfiniteMode={isInfiniteMode}
          onHeaderHeightChange={this.onHeaderHeightChange}
          activeDomainSectionIndex={activeDomainSectionIndex}
        >
          {showSelectCoursePage &&
            <SearchAndDomainSelectCard
              domains={domains}
              onSetDomains={this.onSetDomains}
              onSetSearchKeyword={this.onSetSearchKeyword}
              searchKeyWord={searchKeyWord}
              selectedDomainIds={selectedDomainIds}
            />
          }
        </HeaderSmartScroll>

        <div {...css(styles.main)}>
          {step === stepCreateProgramName &&
            <ProgramAddNamePage
              onSetProgramName={this.onSetProgramName}
              onSetProgramSlug={this.onSetProgramSlug}
              onSetProgramTagline={this.onSetProgramTagline}
              programName={programName}
              programSlug={programSlug}
              programTagline={programTagline}
            />
          }
          {step === stepSelectDomains &&
            <ProgramSelectDomainPage
              onSetDomains={this.onSetDomains}
              selectedDomainIds={selectedDomainIds}
            />
          }
          {showSelectCoursePage &&
            <ProgramSelectCoursePage
              headerHeight={headerHeight}
              searchKeyWord={searchKeyWord}
              selectedCourseIds={selectedCourseIds}
              selectedS12nIds={selectedS12nIds}
              selectedDomainIds={selectedDomainIds}
              onToggleCourseSelect={this.onToggleCourseSelect}
              onToggleS12nSelect={this.onToggleS12nSelect}
              onEnterInfiniteModeByCourse={this.onEnterInfiniteModeByCourse}
              onEnterInfiniteModeByS12n={this.onEnterInfiniteModeByS12n}
              onLeaveInfiniteMode={this.onLeaveInfiniteMode}
              isInfiniteMode={isInfiniteMode}
              isCourseExpanded={isCourseExpanded}
              activeDomainSectionIndex={activeDomainSectionIndex}
              onLoadSubdomainContainer={this.onLoadSubdomainContainer}
            />
          }
          {step === stepProgramPreview &&
            <ProgramPreviewPage
              currentTotalSelectCount={currentTotalSelectCount}
              onCreateProgram={this.onCreateProgram}
              programName={programName}
              programSlug={programSlug}
              programTagline={programTagline}
              seatLimit={seatLimit}
              selectedCourseIds={selectedCourseIds}
              selectedS12nIds={selectedS12nIds}
            />
          }
        </div>
        <ProgramFixedFooter
          currentStepNumber={_(ALL_STEPS).indexOf(step) + 1}
          currentTotalSelectCount={currentTotalSelectCount}
          onCourseSelectionNext={this.onCourseSelectionNext}
          onCourseSelectionPrev={this.onCourseSelectionPrev}
          onDomainSelectionNext={this.onDomainSelectionNext}
          onDomainSelectionPrev={this.onDomainSelectionPrev}
          onProgramNameNext={this.onProgramNameNext}
          onProgramPreviewNext={this.onProgramPreviewNext}
          onProgramPreviewPrev={this.onProgramPreviewPrev}
          seatLimit={seatLimit}
          selectedCourseIds={selectedCourseIds}
          selectedDomainIds={selectedDomainIds}
          selectedS12nIds={selectedS12nIds}
          step={step}
          totalSteps={_(ALL_STEPS).size()}
        />
      </div>
    );
  }
}

const AppwithApiMockData = withApiMockData({dataType: 'DOMAINS'})(ProgramCreationApp);

module.exports = AppwithApiMockData;

const styles = StyleSheet.create({
  ProgramCreationApp: {
    background: color.bgGray,
    minHeight: '100vh',
    paddingTop: HEADER_HEIGHT,
    paddingBottom: FOOTER_HEIGHT,
    minWidth: spacing.minWidth,
  },
  header: {
  },
  NavBar: {
    minHeight: 56,

  },
  Jumbotron: {
    minHeight: 360,
    background: `linear-gradient(90deg, ${gradient.primary.start}, ${gradient.primary.end})`,
    color: color.textIcon,
  },
  TabMenu: {
    padding: 0,
    textAlign: 'left',
  },
  tabMenuLi: {
    display: 'inline-block',
  },
  tabMenuA: {
    diplay: 'inline-block',
    padding: '8px 0',
    margin: '0 32px 0 0',
    fontWeight: 'normal',
    color: color.textIcon,
    textDecoration: 'none',
  },
  tabMenuAActive: {
    fontWeight: 'bold',
    borderBottom: `2px solid ${color.textIcon}`,
  },
  tabMenuAHover: {
    ':hover': {
      textDecoration: 'none',
    },
  },
  sideBar: {
    transition: transition.easeOut(),
  },

  pageTitle: {
    fontSize: 64,
    fontWeight: 'normal',
  },
  main: {
    minHeight: 500,
    // marginTop: -96,
    transition: transition.easeOut(),
  },

  hover: {
    ':hover': {
      backgroundColor: 'red',
    },
  },

  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red',
    },
  },
});
