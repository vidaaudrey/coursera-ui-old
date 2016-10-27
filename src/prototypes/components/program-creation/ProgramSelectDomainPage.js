/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import {Avatar, Button} from 'src';
import ChipList from 'src/components/extended/chipList/ChipList';
import DomainChipList from 'src/prototypes/components/program-creation/DomainChipList';
const _ = require('underscore');

class ProgramSelectDomainPage extends React.Component {

  static propTypes = {
    onSetDomains: React.PropTypes.func.isRequired,
  }

  onSelectChange = (id, newIsSelect, newListData) => {
    const selectedDomainIds = _.chain(newListData)
      .filter(item => item.isSelected)
      .pluck('id')
      .value();

    this.props.onSetDomains(selectedDomainIds);
  }

  render() {
    const {selectedDomainIds} = this.props;
    return (
      <div {...cssWithClass('container vertical-box align-items-absolute-center', styles.ProgramSelectDomainPage)}>
        <h2>The skills I am looking for are in </h2>
        <div className="p-t-3 p-b-3 m-b-3">
          <DomainChipList
            showSelectAll
            onSelectChange={this.onSelectChange}
            alignCenter
            selectedDomainIds={selectedDomainIds}
          />
        </div>
      </div>
    );
  }
}

module.exports = ProgramSelectDomainPage;

const styles = StyleSheet.create({
  ProgramSelectDomainPage: {
    minHeight: '100vh',
  },
});
