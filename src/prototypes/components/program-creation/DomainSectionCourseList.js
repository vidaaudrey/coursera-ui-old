/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const _ = require('underscore');
import {Button, CourseCard} from 'src';

const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

class DomainSectionCourseList extends React.Component {
  static propTypes = {
    courses: React.PropTypes.array.isRequired,
    onToggleCourseSelect: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    courses: [],
  }

  render() {
    const {
      courses,
      onToggleCourseSelect,
    } = this.props;
    return (
      <div className="row m-b-2">
        {courses.map(item => (
          <div key={`CourseCard~${item.id}`} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <CourseCard
              id={item.id}
              isSelected={item.isSelected}
              onToggleCourseSelect={onToggleCourseSelect}
            />
          </div>
        ))}
        <div className="col-xs-12 text-xs-right">
          <Button type="secondary" label={'See All'} />
        </div>
      </div>
    );
  }
}

module.exports = DomainSectionCourseList;

const styles = StyleSheet.create({
  DomainSectionCourseList: {
    textAlign: 'left',
  },
});
