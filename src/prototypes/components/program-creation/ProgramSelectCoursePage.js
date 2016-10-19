import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';
import DomainCard from './DomainCard';
import SubDomainSelectCard from './SubDomainSelectCard';

class ProgramSelectCoursePage extends React.Component {

  render() {
    const {
      styles, onAddCourse, onRemoveCourse, onAddS12n, onRemoveS12n,
    } = this.props;
    return (
      <div {...cssWithClass('bg-gray', styles.ProgramSelectCoursePage)}>
        <SubDomainSelectCard />
        <DomainCard />
        <h2>Course Selection page</h2>
          <Button
            type="primary"
            size="xs"
            label={'Add Course'}
            htmlAttributes={{onClick: () => onAddCourse(1)}}
          />
          <Button
            type="primary"
            size="xs"
            label={'Remove Course'}
            htmlAttributes={{onClick: () => onRemoveCourse(1)}}
          />
          <Button
            type="primary"
            size="xs"
            label={'Add S12n'}
            htmlAttributes={{onClick: () => onAddS12n(1)}}
          />
          <Button
            type="primary"
            size="xs"
            label={'Remove S12n'}
            htmlAttributes={{onClick: () => onRemoveS12n(1)}}
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
