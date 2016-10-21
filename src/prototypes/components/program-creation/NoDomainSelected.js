import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';

const NoDomainSelected = ({styles}) => {
  return (
    <div {...cssWithClass('vertical-box align-items-absolute-center', styles.NoDomainSelected)}>
      <h2 className="m-b-3">
        Please select at least one domain!
      </h2>
    </div>
  );
};

export default withStyles(({color}) => ({
  NoDomainSelected: {
    minHeight: 300,
  },
}))(NoDomainSelected);
