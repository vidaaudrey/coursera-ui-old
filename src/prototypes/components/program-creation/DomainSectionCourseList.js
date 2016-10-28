/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const _ = require('underscore');
import {Button, CourseCard} from 'src';
const Waypoint = require('react-waypoint');

const collapsedCourseIds = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
const expandedCourseIds = [
  'c9',
  'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17', 'c18', 'c19',
  'c20', 'c21', 'c22', 'c23', 'c24', 'c25', 'c26', 'c27', 'c28',
];

//Temp
const DELTA = 50;
let currentIndex = 0;
const totalItemCount = 100;
const generateItem = () => {
  if (currentIndex < expandedCourseIds.length - 1) {
    ++currentIndex;
    return expandedCourseIds[currentIndex];
  }
}

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
      reachedLimit: false,
    };
  }

  static defaultProps = {
    courseIds: [],
    selectedCourseIds: [],
  }

  _loadMoreItems = () => {
    this.setState({ isLoading: true });
    // fake an async. ajax call with setTimeout
    window.setTimeout(() => {
      if (!this.state.reachedLimit) {
        this.setState({
          courseIds: [...this.state.courseIds, generateItem()],
          isLoading: false,
          reachedLimit: currentIndex > expandedCourseIds.length,
        });
      }
    }, 200);
  }

  _handleLeave = (data) => {
    console.warn('-handleLeave--', data);
  }

  _handlePositionChange = (data) => {
    console.warn('-handlePositionChange--', data);
  }

  render() {
    const {
      onToggleCourseSelect, selectedCourseIds, isExpanded, onExpand,
    } = this.props;

    const {courseIds, reachedLimit, isLoading} = this.state;
    const courseIdsWithSelect = _.chain(courseIds)
      .map(id => ({
        id,
        isSelected: _(selectedCourseIds).contains(id),
      }))
      .value();

    const renderWayPoint = isExpanded && !reachedLimit && !isLoading;
    console.warn('---', this.state.courseIds, renderWayPoint)
    ;
    return (
      <div className="row m-b-2">
        <div className="col-xs-12">
          <p className="infinite-scroll-example__count">
            Items Loaded: {this.state.courseIds.length}
            isLoading: {isLoading}
          </p>
          {isLoading &&
            <p {...css(styles.loadingMessage)}>
              Loading...
            </p>
          }
        </div>

        {courseIdsWithSelect.map(item => (
          <div key={`CourseCard~${item.id}`} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <CourseCard
              id={item.id}
              isSelected={item.isSelected}
              onToggleCourseSelect={onToggleCourseSelect}
            />
          </div>
        ))}
        {renderWayPoint &&
          <Waypoint
            onEnter={this._loadMoreItems}
            onPositionChange={this._handlePositionChange}
            onLeave={this._handleLeave}
          />
        }
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
