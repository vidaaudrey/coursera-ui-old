/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const _ = require('underscore');
import {Button, CourseCard} from 'src';
import {pure} from 'recompose';

const Waypoint = require('react-waypoint');

const expandedCourseIds = [
  'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',
  'c9',
  'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17', 'c18', 'c19',
  'c20', 'c21', 'c22', 'c23', 'c24', 'c25', 'c26', 'c27',
  'c28',
];

const generateItem = (index) => {
  return expandedCourseIds[index];
};

class DomainSectionCourseList extends React.Component {
  static propTypes = {
    // courseIds: React.PropTypes.array.isRequired,
    onToggleCourseSelect: React.PropTypes.func.isRequired,
    isExpanded: React.PropTypes.bool,
    onExpand: React.PropTypes.func.isRequired,
    limit: React.PropTypes.number,
    selectedCourseIds: React.PropTypes.array.isRequired,
    initialCourseCount: React.PropTypes.number,
  }

  static defaultProps = {
    limit: 20,
    courseIds: [],
    selectedCourseIds: [],
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      courseIds: this.getCourseIds(props.initialCourseCount),
    };
  }

  componentWillReceiveProps({initialCourseCount, isExpanded}) {
    if (isExpanded !== this.props.isExpanded || initialCourseCount !== this.props.initialCourseCount) {
      this.setState({
        courseIds: this.getCourseIds(initialCourseCount),
        reachedLimit: false,
      });
    }
  }

  _loadMoreItems = () => {
    this.setState({ isLoading: true });
    // fake an async. ajax call with setTimeout
    window.setTimeout(() => {
      const newIndex = this.state.courseIds.length;
      if (newIndex < this.props.limit) {
        this.setState({
          courseIds: [...this.state.courseIds, generateItem(newIndex)],
          isLoading: false,
        });
      }
    }, 250);
  }

  getCourseIds = (initialCourseCount) => {
    return expandedCourseIds.slice(0, initialCourseCount);
  }

  render() {
    const {
      onToggleCourseSelect, selectedCourseIds, isExpanded, onExpand, limit,
    } = this.props;

    const {courseIds, isLoading} = this.state;
    const reachedLimit = courseIds.length >= limit;
    const courseIdsWithSelect = _.chain(courseIds)
      .map(id => ({
        id,
        isSelected: _(selectedCourseIds).contains(id),
      }))
      .value();

    const renderWayPoint = isExpanded && !reachedLimit && !isLoading;

    return (
      <div className="row m-b-2">
        {courseIdsWithSelect.map(item => (
          <div key={`CourseCard~${item.id}`} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <CourseCard
              id={item.id}
              isSelected={item.isSelected}
              onToggleCourseSelect={onToggleCourseSelect}
            />
          </div>
        ))}
        {renderWayPoint && <Waypoint onEnter={this._loadMoreItems} />}
        {reachedLimit && <span className="text-muted text-sm">You have reached the end. (total: {courseIds.length})</span>}
        <div className="col-xs-12 text-xs-right">
          {!isExpanded &&
            <Button
              type="secondary"
              label={'See All'}
              htmlAttributes={{
                onClick: onExpand,
              }}
            />
          }
        </div>
      </div>
    );
  }
}

module.exports = pure(DomainSectionCourseList);

const styles = StyleSheet.create({
  DomainSectionCourseList: {
    textAlign: 'left',
  },
});
