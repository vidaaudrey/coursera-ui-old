import React from 'react';
import withApiData from '../components/hocs/withApiData';
import { css, cssWithClass, withStyles, ThemedStyleSheet} from 'src';
const _ = require('underscore');
import Header from './components/program-common/Header';
import ProgramAddNamePage from './components/program-creation/ProgramAddNamePage';
import ProgramSelectDomainPage from './components/program-creation/ProgramSelectDomainPage';
import ProgramSelectCoursePage from './components/program-creation/ProgramSelectCoursePage';
import ProgramFixedFooter from './components/program-creation/ProgramFixedFooter';
import {
  HEADER_HEIGHT, FOOTER_HEIGHT, CREATE_PROGRAM_STEPS
} from '../constants/ProgramCreationAppConstants';
const {
  stepCreateProgramName, stepSelectDomains, stepSelectCourses, stepCreateProgram,
  stepCreateProgramSuccess
} = CREATE_PROGRAM_STEPS;

class ProgramCreationApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // step: stepSelectDomains,
      // step: stepSelectDomains,
      step: stepSelectCourses,
      programName: null,
      domains: [],
      courseIds: [],
      s12nIds: [],
      totalSeats: 6,
    }
  }

  handleSetProgramName = (programName) => {
    this.setState({programName});
  }

  handlSetDomains = (domain) => {
    this.setState({domain});
  }

  handleAddCourse = (id) => {
    const courseIds = [...this.state.courseIds];
    courseIds.push(id);
    _.uniq(courseIds);
    this.setState({courseIds});
  }

  handleRemoveCourse = (id) => {
    const courseIds = _.reject(this.state.courseIds, (item) => item === id);
    this.setState({courseIds});
  }

  handleAddS12n = (id, courseIds) => {
    const s12nIds = [...this.state.s12nIds];
    s12nIds.push(id);
    _.uniq(s12nIds);
    if (courseIds) {
      this.state.courseIds.concat(courseIds);
      _.uniq(this.state.courseIds);
    }
    this.setState({s12nIds});
  }

  handleRemoveS12n = (id, courseIds) => {
    const s12nIds = _.reject(this.state.s12nIds, (item) => item === id);
    if (courseIds) {
      const newCourseIds = _.reject(this.state.courseIds, (item) => item === id);
      this.setState({courseIds: newCourseIds});
    }
    this.setState({s12nIds});
  }

  handleProgramNameNext = () => {
    this.setState({step: stepSelectDomains});
  }

  handleDomainSelectionPrev = () => {
    this.setState({step: stepCreateProgramName});
  }

  handleDomainSelectionNext = () => {
    this.setState({step: stepSelectCourses});
  }

  handleCourseSelectionPrev = () => {
    this.setState({step: stepSelectDomain});
  }

  handleCourseSelectionNext = () => {
    this.setState({step: stepCreateProgram});
  }

  handleCreateProgram = () => {
    this.setState({step: stepCreateProgram});
  }

  render() {
    const {styles} = this.props;
    const {step, programName, courseIds, s12nIds, totalSeats} = this.state;
    console.warn('---', this.state);
    return (
      <div {...cssWithClass('ProgramCreationApp bg-gray w-100 h-100', styles.ProgramCreationApp)}>
        <Header />
        <div {...cssWithClass('container', styles.main)}>
          {step === stepCreateProgramName &&
            <ProgramAddNamePage programName={programName} onSetProgramName={this.handleSetProgramName}/>
          }
          {step === stepSelectDomains &&
            <ProgramSelectDomainPage onSetDomains={this.handlSetDomains} />
          }
          {(step === stepSelectCourses || step === stepCreateProgram || step === stepCreateProgramSuccess) &&
            <ProgramSelectCoursePage
              onCreateProgram={this.handleCreateProgram}
              onAddCourse={this.handleAddCourse}
              onRemoveCourse={this.handleRemoveCourse}
              onAddS12n={this.handleAddS12n}
              onRemoveS12n={this.handleRemoveS12n}
            />
          }
        </div>
        <ProgramFixedFooter
          step={step}
          courseIds={courseIds}
          s12nIds={s12nIds}
          totalSeats={totalSeats}
          onProgramNameNext={this.handleProgramNameNext}
          onDomainSelectionNext={this.handleDomainSelectionNext}
          onDomainSelectionPrev={this.handleDomainSelectionPrev}
          onCourseSelectionPrev={this.handleCourseSelectionPrev}
          onCourseSelectionNext={this.handleCourseSelectionNext}
        />
      </div>
    );
  }
}

const AppWithApiData = withApiData({dataType: 'LEADERBOARD'})(ProgramCreationApp);



export default withStyles(({color, gradient, transition, spacing}) => ({
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
    }
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
          backgroundColor: 'red'
      }
  },

  small: {
      '@media (max-width: 600px)': {
          backgroundColor: 'red',
      }
  }
}))(AppWithApiData);
