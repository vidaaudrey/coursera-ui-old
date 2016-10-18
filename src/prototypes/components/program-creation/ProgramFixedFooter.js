import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button, FixedContainer} from 'src';
import {FOOTER_HEIGHT, CREATE_PROGRAM_STEPS} from '../../../constants/ProgramCreationAppConstants';
import ProgramFixedFooterProgramName from './ProgramFixedFooterProgramName';
import ProgramFixedFooterDomainSelection from './ProgramFixedFooterDomainSelection';
const {
  stepCreateProgramName, stepSelectDomain, stepAddCurriculum
} = CREATE_PROGRAM_STEPS;

class ProgramFixedFooter extends React.Component {

  render() {
    const {
      style, styles, step, onProgramNameNext,
      onDomainSelectionPrev, onDomainSelectionNext,
    } = this.props;

    return (
      <FixedContainer height={FOOTER_HEIGHT}>
        <div {...css(styles.ProgramFixedFooter)}>
          {step === stepCreateProgramName &&
            <ProgramFixedFooterProgramName onNext={onProgramNameNext}/>
          }
          {step === stepSelectDomain &&
            <ProgramFixedFooterDomainSelection
              onPrev={onDomainSelectionPrev}
              onNext={onDomainSelectionNext}
            />
          }
        </div>
      </FixedContainer>
    );
  }
}

function getStyles({coursePhotoSize}) {
  return {
    Header: {
    },
    coursePhoto: {
      width: coursePhotoSize,
      height: coursePhotoSize,
    },
  }
}

export default withStyles(({color, gradient}) => ({
  ProgramFixedFooter: {
    background: color.white,
    height: FOOTER_HEIGHT,
    boxShadow: `0 -2px 4px 0 ${color.shadow}`,
  },
}))(ProgramFixedFooter);
