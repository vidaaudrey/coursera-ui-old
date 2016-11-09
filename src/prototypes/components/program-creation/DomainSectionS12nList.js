/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes, Component} from 'react';
import {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} from 'src/styles/theme';
import _ from 'underscore';

import {Button, S12nCardWithLayer} from 'src';
import Waypoint from 'react-waypoint';
import {pure} from 'recompose';
import S12nCardListContainer from 'src/containers/S12nCardListContainer';

const expandedS12nIds = [
  's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10',
  's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 's19', 's20',
];

const generateItem = (index) => {
  return expandedS12nIds[index];
};

const FETCH_LIMIT = 6;
const DEFAULT_TOTAL = 6;
/**
 * A S12nList that supports infinite scroll
 * When the Waypoint is reached, we'll load more data by setting the loading state to true
 * and render the naptime data container.
 * When data container loaded the data, we'll use the onLoadedS12n callback to add the new data batch
 * to current s12nIds list.
 * By doing this, we can leverage the naptime store for data caching
 */

class DomainSectionS12nList extends Component {
  static propTypes = {
    // s12nIds: PropTypes.array.isRequired,
    selectedS12nIds: PropTypes.array,
    onToggleS12nSelect: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool,
    onExpand: PropTypes.func.isRequired,
    limit: PropTypes.number,
    initialS12nCount: PropTypes.number,
    searchKeyWord: PropTypes.string,
    selectedSubdomainIds: PropTypes.arrayOf(PropTypes.string.isRequired),
  }

  static defaultProps = {
    s12nIds: [],
    selectedS12nIds: [],
    searchKeyWord: '',
    selectedSubdomainIds: [],
  }

  constructor(props, context) {
    super(props, context);

    // Set defaults
    this._limit = FETCH_LIMIT;
    this._total = 0;

    this.state = {
      s12nIds: this.getS12nIds(props.initialS12nCount),

      // Keep track on next data batch
      start: 0,
      // total: DEFAULT_TOTAL,
    };
  }

  getDefaultState = (props) => {
    return {
      s12nIds: [],
      start: 0,
    }
  }

  componentWillReceiveProps({initialS12nCount, isExpanded}) {
    if (isExpanded !== this.props.isExpanded || initialS12nCount !== this.props.initialS12nCount) {
      this.setState({
        s12nIds: this.getS12nIds(initialS12nCount),
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

  getS12nIds = (initialS12nCount) => {
    return expandedS12nIds.slice(0, initialS12nCount);
  }

  onLoadedNextS12nBatch = (s12n) => {

  }


  render() {
    const {
      onToggleS12nSelect, selectedS12nIds,
      isExpanded, onExpand, limit,
    } = this.props;

    const {s12nIds, isLoading, start} = this.state;
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
          <div key={`S12nCardWithLayer~${item.id}`} className="col-xs-12 col-md-6 col-lg-4 col-xl-3">
            <S12nCardWithLayer
              id={item.id}
              isSelected={item.isSelected}
              onToggleS12nSelect={onToggleS12nSelect}
            />
          </div>
        ))}
        {renderWayPoint && <Waypoint onEnter={this._loadMoreItems} />}
        {isLoading &&
          <S12nCardListContainer
            onLoadedData={this.onLoadedNextS12nBatch}
            shouldNotRender={true}
            start={start}
            limit={limit}
          />
        }
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
