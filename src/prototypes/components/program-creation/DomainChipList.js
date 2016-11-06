import React, {PropTypes} from 'react';
import { domainPropType } from 'src/constants/propTypes';
import {ChipList} from 'src';
import _ from 'underscore';
const _t = t => t;

const DomainChipList = ({
  alignCenter,
  domains,
  onSelectChange,
  selectedDomainIds = [],
  showSelectAll,
}) => {
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
      onSelectChange={onSelectChange}
      alignCenter={alignCenter}
    />
  );
};

DomainChipList.propTypes = {
  alignCenter: PropTypes.bool,
  domains: PropTypes.arrayOf(domainPropType).isRequired,
  onSelectChange: PropTypes.func.isRequired,
  selectedDomainIds: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  showSelectAll: PropTypes.bool,
};

module.exports = DomainChipList;
