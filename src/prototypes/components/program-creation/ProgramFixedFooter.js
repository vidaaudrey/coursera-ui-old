/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');
import {Avatar, Button, FixedContainer, StepProgress} from 'src';
import {FOOTER_HEIGHT, CREATE_PROGRAM_STEPS} from 'src/constants/ProgramCreationAppConstants';
import ProgramFixedFooterProgramName from 'src/prototypes/components/program-creation/ProgramFixedFooterProgramName';
import ProgramFixedFooterDomainSelection from 'src/prototypes/components/program-creation/ProgramFixedFooterDomainSelection';
import ProgramFixedFooterCourseSelection from 'src/prototypes/components/program-creation/ProgramFixedFooterCourseSelection';
import ProgramFixedFooterPreviewProgram from 'src/prototypes/components/program-creation/ProgramFixedFooterPreviewProgram';
const {
  stepCreateProgramName, stepSelectDomains, stepSelectCourses, stepProgramPreview,
} = CREATE_PROGRAM_STEPS;

class ProgramFixedFooter extends React.Component {

  render() {
    const {
      style, step, onProgramNameNext,
      onDomainSelectionPrev, onDomainSelectionNext,
      seatLimit, currentTotalSelectCount,
      selectedS12nIds, selectedCourseIds,
      onCourseSelectionPrev, onCourseSelectionNext,
      onProgramPreviewPrev, onProgramPreviewNext,
      currentStepNumber, totalSteps,
    } = this.props;

    return (
      <FixedContainer height={FOOTER_HEIGHT} backgroundColor="white">
        <div {...css(styles.ProgramFixedFooter)}>
          <div {...css(styles.progressContainer)}>
            <StepProgress
              currentStep={currentStepNumber}
              totalSteps={totalSteps}
              backgroundColor={color.bgGray}
            />
          </div>

          {step === stepCreateProgramName &&
            <ProgramFixedFooterProgramName onNext={onProgramNameNext} />
          }
          {step === stepSelectDomains &&
            <ProgramFixedFooterDomainSelection
              onPrev={onDomainSelectionPrev}
              onNext={onDomainSelectionNext}
            />
          }
          {step === stepSelectCourses &&
            <ProgramFixedFooterCourseSelection
              selectedCourseIds={selectedCourseIds}
              selectedS12nIds={selectedS12nIds}
              seatLimit={seatLimit}
              currentTotalSelectCount={currentTotalSelectCount}
              onPrev={onCourseSelectionPrev}
              onNext={onCourseSelectionNext}
            />
          }
          {step === stepProgramPreview &&
            <ProgramFixedFooterPreviewProgram
              selectedCourseIds={selectedCourseIds}
              selectedS12nIds={selectedS12nIds}
              seatLimit={seatLimit}
              currentTotalSelectCount={currentTotalSelectCount}
              onPrev={onProgramPreviewPrev}
              onNext={onProgramPreviewNext}
            />
          }
        </div>
      </FixedContainer>
    );
  }
}

module.exports = ProgramFixedFooter;

const styles = StyleSheet.create({
  ProgramFixedFooter: {
    background: color.white,
    height: FOOTER_HEIGHT,
    boxShadow: `0 -2px 4px 0 ${color.shadow}`,
    position: 'relative',
  },
  progressContainer: {
    position: 'absolute',
    top: -4,
    left: -2,
    right: -2,
  },
});
