import React, { PropTypes, Component } from 'react';
import { domainPropType } from 'src/constants/propTypes';
import _ from 'underscore';

import {ChipList} from 'src';
const _t = t => t;

class DomainChipList extends Component {
  static propTypes = {
    alignCenter: PropTypes.bool,
    domains: PropTypes.arrayOf(domainPropType).isRequired,
    onSetSelectedDomainIds: PropTypes.func.isRequired,
    selectedDomainIds: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ),
    showSelectAll: PropTypes.bool,
  };

  static defaultProps = {
    selectedDomainIds: [],
    domains: [],
  }

  onSelectChange = (id, allSelectedIds, newIsSelect, newListData) => {
    const selectedDomainIds = _.chain(newListData)
      .filter(item => item.isSelected)
      .pluck('id')
      .value();
    this.props.onSetSelectedDomainIds({selectedDomainIds, id, newIsSelect});
  }

  render() {
    const {alignCenter,
      domains,
      selectedDomainIds,
      showSelectAll,
    } = this.props;

    const listDataWithSelect = _(domains).map(item => ({
      id: item.id,
      label: item.name,
      isSelected: _(selectedDomainIds).contains(item.id),
    }));

    return (
      <ChipList
        listData={listDataWithSelect}
        showSelectAll={showSelectAll}
        selectAllLabel={_t('All Topics')}
        onSelectChange={this.onSelectChange}
        alignCenter={alignCenter}
      />
    );
  }
}

module.exports = DomainChipList;
