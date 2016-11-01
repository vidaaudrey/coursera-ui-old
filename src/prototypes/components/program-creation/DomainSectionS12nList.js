/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const _ = require('underscore');
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import {Button, LayeredS12nCard} from 'src';
const Waypoint = require('react-waypoint');
import {pure} from 'recompose';

const expandedS12nIds = [
  's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10',
  's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 's19', 's20',
];

const DELTA = 50;

const generateItem = (index) => {
  return expandedS12nIds[index];
};

class DomainSectionS12nList extends React.Component {
  static propTypes = {
    // s12nIds: React.PropTypes.array.isRequired,
    selectedS12nIds: React.PropTypes.array,
    onToggleS12nSelect: React.PropTypes.func.isRequired,
    isExpanded: React.PropTypes.bool,
    onExpand: React.PropTypes.func.isRequired,
    limit: React.PropTypes.number,
    initialS12nCount: React.PropTypes.number,
  }

  static defaultProps = {
    s12nIds: [],
    selectedS12nIds: [],
    limit: 20,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      s12nIds: this.getCourseIds(props.initialS12nCount),
    };
  }

  componentWillReceiveProps({initialS12nCount, isExpanded}) {
    if (isExpanded !== this.props.isExpanded || initialS12nCount !== this.props.initialS12nCount) {
      this.setState({
        s12nIds: this.getCourseIds(initialS12nCount),
        reachedLimit: false,
      });
    }
  }

  _loadMoreItems = () => {
    this.setState({ isLoading: true });
    // fake an async. ajax call with setTimeout
    window.setTimeout(() => {
      const newIndex = this.state.s12nIds.length;
      if (newIndex < this.props.limit) {
        this.setState({
          s12nIds: [...this.state.s12nIds, generateItem(newIndex)],
          isLoading: false,
        });
      }
    }, 250);
  }

  getCourseIds = (initialS12nCount) => {
    return expandedS12nIds.slice(0, initialS12nCount);
  }


  render() {
    const {
      onToggleS12nSelect, selectedS12nIds,
      isExpanded, onExpand, limit,
    } = this.props;

    const {s12nIds, isLoading} = this.state;
    const reachedLimit = s12nIds.length >= limit;

    const s12nsIdsWithSelect = _.chain(s12nIds)
      .map(id => ({
        id,
        isSelected: _(selectedS12nIds).contains(id),
      }))
      .value();

    const renderWayPoint = isExpanded && !reachedLimit && !isLoading;

    return (
      <div {...cssWithClass('row m-b-2', styles.DomainSectionS12nList)}>
        {s12nsIdsWithSelect.map(item => (
          <div key={`LayeredS12nCard~${item.id}`} className="col-xs-12 col-md-6 col-lg-4 col-xl-3">
            <LayeredS12nCard
              id={item.id}
              isSelected={item.isSelected}
              onToggleS12nSelect={onToggleS12nSelect}
            />
          </div>
        ))}
        {renderWayPoint && <Waypoint onEnter={this._loadMoreItems} />}
        {reachedLimit && <span className="text-muted text-sm">You have reached the end. (total: {s12nIds.length})</span>}
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


module.exports = pure(DomainSectionS12nList);

const styles = StyleSheet.create({
  DomainSectionS12nList: {
    textAlign: 'left',
  },
});
