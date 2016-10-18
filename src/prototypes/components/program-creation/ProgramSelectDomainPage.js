import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';
import SelectListItem from '../../../components/extended/filterList/SelectListItem';

class ProgramSelectDomainPage extends React.Component {
  handleSelect = () => {
    console.warn('--handleSelect-');
  }
  render() {
    const {styles} = this.props;
    return (
      <div {...cssWithClass('vertical-box align-items-absolute-center', styles.ProgramSelectDomainPage)}>
        <h2>The skills I am looking for are in </h2>
        <div className="m-b-1">
          <SelectListItem label="light" onClick={this.handleSelect} />
          <SelectListItem label="light selected" isSelected={true} onClick={this.handleSelect} />
        </div>

        <div className="m-b-1 bg-primary p-a-3">
          <SelectListItem label="dark" isDarkTheme={true} onClick={this.handleSelect} />
          <SelectListItem label="dark selected fontsize" isSelected={true} isDarkTheme={true} height={28} fontSize={'xs'} onClick={this.handleSelect} />
        </div>
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
