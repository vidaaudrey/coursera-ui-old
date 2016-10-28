import React from 'react';
import {ChipList} from 'src';
const _ = require('underscore');
import withApiMockData from 'src/components/hocs/withApiMockData';

const DomainChipList = ({
  showSelectAll,
  alignCenter, selectedDomainIds = [], domains, onSelectChange,
}) => {
  const listDataWithSelect = _(domains).map(item=> ({
    id: item.id,
    label: item.name,
    isSelected: _(selectedDomainIds).contains(item.id),
  }));

  return (
    <ChipList
      listData={listDataWithSelect}
      showSelectAll={showSelectAll}
      selectAllLabel={'All Topics'}
      onSelectChange={onSelectChange}

      alignCenter={alignCenter}
    />
  );
};

export default DomainChipList;
