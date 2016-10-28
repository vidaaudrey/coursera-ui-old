/* eslint-disable no-param-reassign, no-use-before-define, max-len */

import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const _ = require('underscore');
import withApiMockData from 'src/components/hocs/withApiMockData';
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
const DEFAULT_UNIT_COLLAPSE_DURATION = 600;
const NAVBAR_HEIGHT = 20;

class ProgramCreationApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._subDomainContainerRefs = [];

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

  onSetDomains = (selectedDomainIds) => {
    this.setState({selectedDomainIds});
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

    // console.warn('--onEnterInfiniteModeByS12n-', activeDomainSectionIndex);
    // this.setState({isInfiniteMode: true, isCourseExpanded: false, activeDomainSectionIndex});
  }


  _handleExpand = ({activeDomainSectionIndex, isCourseExpanded}) => {
    const pos = getScreenCordinates(this._subDomainContainerRefs[activeDomainSectionIndex], window.document);
    console.warn('--_handleExpand-', activeDomainSectionIndex);
    const scrollY = pos.y;
    this.setState({
      isInfiniteMode: true,
      isCourseExpanded,
      activeDomainSectionIndex,
      scrollY,
    });
    this._scrollTo(scrollY - NAVBAR_HEIGHT, DEFAULT_EXPAND_DURATION);
  }
  _scrollTo = (scrollY, duration) => {
    scroll.scrollTo(scrollY, {
      smooth: true,
      duration,
    });
  }

  onLeaveInfiniteMode = () => {
    console.warn('-onLeaveInfiniteMode--', this.state);
    this.setState({isInfiniteMode: false, scrollY: 0});
    // this._scrollTo(scrollY - NAVBAR_HEIGHT, DEFAULT_EXPAND_DURATION);
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

  // handleInviteMemberPrev = () => {
  //   this.setState({step: stepSelectCourses});
  // }
  //
  // handleInviteMemberNext = () => {
  //   this.setState({step: stepCreateProgram});
  // }

  render() {
    const {
      step, programName, programSlug, programTagline, searchKeyWord,
      selectedDomainIds, selectedCourseIds, selectedS12nIds,
      seatLimit, currentTotalSelectCount, isInfiniteMode,
      headerHeight, isCourseExpanded, activeDomainSectionIndex,
    } = this.state;
    const showSelectCoursePage = (step === stepSelectCourses || step === stepCreateProgram || step === stepCreateProgramSuccess);
    console.warn('-render--', this.state);

    return (
      <div {...cssWithClass('ProgramCreationApp bg-gray w-100 h-100', styles.ProgramCreationApp)}>
        <HeaderSmartScroll
          isInfiniteMode={isInfiniteMode}
          onHeaderHeightChange={this.onHeaderHeightChange}
          activeDomainSectionIndex={activeDomainSectionIndex}
        >
          {showSelectCoursePage &&
            <SearchAndDomainSelectCard
              onSetSearchKeyword={this.onSetSearchKeyword}
              searchKeyWord={searchKeyWord}
              onSetDomains={this.onSetDomains}
              selectedDomainIds={selectedDomainIds}
            />
          }
        </HeaderSmartScroll>

        <div {...css(styles.main)}>
          {step === stepCreateProgramName &&
            <ProgramAddNamePage
              programName={programName}
              programSlug={programSlug}
              programTagline={programTagline}
              onSetProgramName={this.onSetProgramName}
              onSetProgramSlug={this.onSetProgramSlug}
              onSetProgramTagline={this.onSetProgramTagline}
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
              programName={programName}
              programSlug={programSlug}
              programTagline={programTagline}
              selectedCourseIds={selectedCourseIds}
              selectedS12nIds={selectedS12nIds}
              seatLimit={seatLimit}
              currentTotalSelectCount={currentTotalSelectCount}
              onCreateProgram={this.onCreateProgram}
            />
          }
        </div>
        <ProgramFixedFooter
          step={step}
          currentStepNumber={_(ALL_STEPS).indexOf(step) + 1}
          totalSteps={_(ALL_STEPS).size()}
          selectedCourseIds={selectedCourseIds}
          selectedS12nIds={selectedS12nIds}
          selectedDomainIds={selectedDomainIds}
          seatLimit={seatLimit}
          currentTotalSelectCount={currentTotalSelectCount}
          onProgramNameNext={this.onProgramNameNext}
          onDomainSelectionNext={this.onDomainSelectionNext}
          onDomainSelectionPrev={this.onDomainSelectionPrev}
          onCourseSelectionPrev={this.onCourseSelectionPrev}
          onCourseSelectionNext={this.onCourseSelectionNext}
          onProgramPreviewPrev={this.onProgramPreviewPrev}
          onProgramPreviewNext={this.onProgramPreviewNext}
        />
      </div>
    );
  }
}

const AppwithApiMockData = withApiMockData({dataType: 'LEADERBOARD'})(ProgramCreationApp);

module.exports = AppwithApiMockData;

// export default withStyles(({color, gradient, transition, spacing}) => ({
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
