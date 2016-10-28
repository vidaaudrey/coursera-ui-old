/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const _ = require('underscore');
import {Button, CourseCard} from 'src';
const Waypoint = require('react-waypoint');

const collapsedCourseIds = ['c1', 'c2', 'c3', 'c4'];
const expandedCourseIds = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17', 'c18', 'c19'];

class DomainSectionCourseList extends React.Component {
  static propTypes = {
    courseIds: React.PropTypes.array.isRequired,
    onToggleCourseSelect: React.PropTypes.func.isRequired,
    isExpanded: React.PropTypes.bool,
    onExpand: React.PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      courseIds: props.courseIds,
    };
  }

  static defaultProps = {
    courseIds: [],
    selectedCourseIds: [],
  }

  componentWillReceiveProps({isExpanded, courseIds}) {
    if (!isExpanded) {
      this.setState({
        courseIds: collapsedCourseIds,
      })
    } else {
      this.setState({
        courseIds: expandedCourseIds,
      })
    }
  }
  render() {
    const {
      onToggleCourseSelect, selectedCourseIds, isExpanded, onExpand,
    } = this.props;

    const {courseIds} = this.state;
    const courseIdsWithSelect = _.chain(courseIds)
      .map(id => ({
        id,
        isSelected: _(selectedCourseIds).contains(id),
      }))
      .value();

    return (
      <div className="row m-b-2">
        {courseIdsWithSelect.map(item => (
          <div key={`CourseCard~${item.id}`} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <CourseCard
              id={item.id}
              isSelected={item.isSelected}
              onToggleCourseSelect={onToggleCourseSelect}
            />
          </div>
        ))}
        <div className="col-xs-12 text-xs-right">
          {!isExpanded &&
            <Button
              type="secondary"
              label={'See All'}
              htmlAttributes={{
                onClick: onExpand
              }}
            />
          }
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
