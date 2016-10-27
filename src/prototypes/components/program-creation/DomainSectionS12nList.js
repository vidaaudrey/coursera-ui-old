/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const _ = require('underscore');
import {Button, CourseCard, LayeredS12nCard} from 'src';

const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const collapsedS12nIds = ['s1', 's2', 's3'];
const expandedS12nIds = ['s1', 's2', 's3', 's4', 's5', 's6'];

class DomainSectionS12nList extends React.Component {
  static propTypes = {
    s12nIds: React.PropTypes.array.isRequired,
    onToggleS12nSelect: React.PropTypes.func.isRequired,
    isExpanded: React.PropTypes.bool,
    onExpand: React.PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      s12nIds: props.s12nIds,
    };
  }

  static defaultProps = {
    s12nIds: [],
    selectedS12nIds: [],
  }

  componentWillReceiveProps({isExpanded, s12nIds}) {
    if (!isExpanded) {
      this.setState({
        s12nIds: collapsedS12nIds,
      })
    } else {
      this.setState({
        s12nIds: expandedS12nIds,
      })
    }
  }


  render() {
    const {
      onToggleS12nSelect, selectedS12nIds,
      isExpanded, onExpand,
    } = this.props;

    const {s12nIds} = this.state;
    const s12nsIdsWithSelect = _.chain(s12nIds)
      .map(id => ({
        id,
        isSelected: _(selectedS12nIds).contains(id),
      }))
      .value();
    return (
      <div className="row m-b-2">

        {s12nsIdsWithSelect.map(item => (
          <div key={`LayeredS12nCard~${item.id}`} className="col-xs-12 col-md-6 col-lg-4">
            <LayeredS12nCard
              id={item.id}
              isSelected={item.isSelected}
              onToggleS12nSelect={onToggleS12nSelect}
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

module.exports = DomainSectionS12nList;

const styles = StyleSheet.create({
  DomainSectionS12nList: {
    textAlign: 'left',
  },
});
