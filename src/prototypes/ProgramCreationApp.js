import React from 'react';
import withApiData from '../components/hocs/withApiData';
import { css, cssWithClass, withStyles, ThemedStyleSheet} from 'src';
const _ = require('underscore');
import Header from './components/program-common/Header';
import ProgramAddNamePage from './components/program-creation/ProgramAddNamePage';
import ProgramSelectDomainPage from './components/program-creation/ProgramSelectDomainPage';
import ProgramFixedFooter from './components/program-creation/ProgramFixedFooter';
import {
  HEADER_HEIGHT, FOOTER_HEIGHT, CREATE_PROGRAM_STEPS
} from '../constants/ProgramCreationAppConstants';
const {
  stepCreateProgramName, stepSelectDomain, stepAddCurriculum
} = CREATE_PROGRAM_STEPS;

class ProgramCreationApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // step: stepCreateProgramName,
      step: stepSelectDomain,
      programName: null,
    }
  }

  handleSetProgramName = (programName) => {
    this.setState({programName});
  }

  handleProgramNameNext = () => {
    this.setState({step: stepSelectDomain});
  }

  handleDomainSelectionPrev = () => {
    this.setState({step: stepCreateProgramName});
  }

  handleDomainSelectionNext = () => {
    this.setState({step: stepAddCurriculum});
  }




  render() {
    const {styles} = this.props;
    const {step, programName} = this.state;

    return (
      <div {...cssWithClass('ProgramCreationApp bg-gray w-100 h-100', styles.ProgramCreationApp)}>
        <Header />
        <div {...cssWithClass('container', styles.main)}>
          {step === stepCreateProgramName &&
            <ProgramAddNamePage programName={programName} onSetProgramName={this.handleSetProgramName}/>
          }
          {step === stepSelectDomain &&
            <ProgramSelectDomainPage />
          }
        </div>
        <ProgramFixedFooter
          step={step}
          onProgramNameNext={this.handleProgramNameNext}
          onDomainSelectionNext={this.handleDomainSelectionNext}
          onDomainSelectionPrev={this.handleDomainSelectionPrev}
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
