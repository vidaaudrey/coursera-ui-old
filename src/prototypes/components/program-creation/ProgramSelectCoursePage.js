import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';
import DomainCard from './DomainCard';
import SubDomainSelectCard from './SubDomainSelectCard';

class ProgramSelectCoursePage extends React.Component {

  render() {
    const {
      styles, selectedCourseIds, selectedS12nIds,
      onToggleCourseSelect, onToggleS12nSelect,
      onSelectChange,
    } = this.props;
    return (
      <div {...cssWithClass('bg-gray', styles.ProgramSelectCoursePage)}>
        <SubDomainSelectCard
          onSelectChange={onSelectChange}
          alignCenter={true}
        />
        <DomainCard
          selectedCourseIds={selectedCourseIds}
          selectedS12nIds={selectedS12nIds}
          onToggleCourseSelect={onToggleCourseSelect}
          onToggleS12nSelect={onToggleS12nSelect}
        />
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
  ProgramSelectCoursePage: {
    minHeight: 450,
  },
}))(ProgramSelectCoursePage);
