import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Button} from 'src';


const ProgramFixedFooterDomainSelection = ({
  onPrev, onNext,
}) => {
  return (
    <div className="container horizontal-box align-items-spacebetween align-items-vertical-center h-100">
      <Button
        type="primary"
        size="sm"
        label={'Back'}
        htmlAttributes={{onClick: onPrev}}
      />
      <Button
        type="primary"
        size="sm"
        label={'Next'}
        htmlAttributes={{onClick: onNext}}
      />
    </div>
    );
};

export default ProgramFixedFooterDomainSelection;
