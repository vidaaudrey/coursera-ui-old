import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button, SelectList} from 'src';
const _ = require('underscore');
import withApiData from '../../../components/hocs/withApiData';

const DomainSelectList = ({
  showSelectAll,
  alignCenter, selectedDomainIds = [], domains, onSelectChange
}) => {
  const listDataWithSelect = _(domains).map((item) => ({
    id: item.id,
    label: item.name,
    isSelected: _(selectedDomainIds).contains(item.id),
  }));

  return (
    <SelectList
      listData={listDataWithSelect}
      showSelectAll={showSelectAll}
      selectAllLabel={'All Topics'}
      onSelectChange={onSelectChange}
      alignCenter={alignCenter}
    />
  );
};


export default withApiData({dataType: 'DOMAINS'})(DomainSelectList);
