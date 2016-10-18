import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Button} from 'src';


const ProgramFixedFooterProgramName = ({
  onNext
}) => {
  return (
    <div className="container horizontal-box align-items-right align-items-vertical-center h-100">
      <Button
        type="primary"
        size="xs"
        label={'Find Courses'}
        htmlAttributes={{onClick: onNext}}
      />
    </div>
    );
};

export default ProgramFixedFooterProgramName;
