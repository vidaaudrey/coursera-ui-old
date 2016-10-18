import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';
const _ = require('underscore');
import CourseCard  from '../program-common/CourseCard';
import S12nCard  from '../program-common/S12nCard';

class DomainCard extends React.Component {

  render() {
    const {
      style, styles,
    } = this.props;
    const s12ns = _.range(3);
    const courses = _.range(20);
    console.warn('---', s12ns, courses);
    return (
      <div {...css(styles.DomainCard)}>
        <h4 className="text-uppercase"> Specializations</h4>
        <div className="row">
            {s12ns.map((item, index) => (
              <div className="col-xs-12 col-md-6 col-lg-4">
                <S12nCard key={`S12nCard~${index}`}/>
              </div>
            ))}
        </div>
        <h4 className="text-uppercase"> Courses</h4>
        <div className="row">
            {courses.map((item, index) => (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <CourseCard key={`CourseCard~${index}`}/>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

function getStyles({coursePhotoSize}) {
  return {
    DomainCard: {
    }
  }
}

export default withStyles(({color, gradient}) => ({
  DomainCard: {
    textAlign: 'left',
  }
}))(DomainCard);
