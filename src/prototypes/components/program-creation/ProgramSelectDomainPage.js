import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';

class ProgramSelectDomainPage extends React.Component {

  render() {
    const {styles} = this.props;
    return (
      <div {...cssWithClass('vertical-box align-items-absolute-center', styles.ProgramSelectDomainPage)}>
        <h2>The skills I am looking for are in </h2>
      </div>
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
  ProgramSelectDomainPage: {
    minHeight: 450,
  }
}))(ProgramSelectDomainPage);
