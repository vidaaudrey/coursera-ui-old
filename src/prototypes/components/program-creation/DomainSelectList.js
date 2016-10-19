import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button, SelectList} from 'src';
const _ = require('underscore');

const mockListData = [
  {
    id: 'computer-science',
    label: 'Computer Science',
    isSelected: true
  }, {
    id: 'arts-and-humanities',
    label: 'Arts & Humanities',
    isSelected: false
  }, {
    id: 'data-science',
    label: 'Data Science',
    isSelected: true
  }, {
    id: 'social-sciences',
    label: 'Social Science',
    isSelected: false
  }, {
    id: 'life-sciences',
    label: 'Life Science',
    isSelected: true
  }, {
    id: 'business',
    label: 'Business',
    isSelected: true
  }, {
    id: 'personal-development',
    label: 'Personal Development',
    isSelected: true
  }, {
    id: 'math-and-logic',
    label: 'Math & Logic',
    isSelected: true
  }, {
    id: 'physical-science-and-engineering',
    label: 'Physical Science & Engineering',
    isSelected: true
  }
];

const DomainSelectList = ({
  alignCenter, selectedDomainIds = [], listData = mockListData, onSelectChange
}) => {
  const listDataWithSelect = _(listData).map((item) => ({
    id: item.id,
    label: item.label,
    isSelected: _(selectedDomainIds).contains(item.id),
  }));
  return (
    <SelectList
      listData={listDataWithSelect}
      showSelectAll={true}
      selectAllLabel={'All Topics'}
      onSelectChange={onSelectChange}
      alignCenter={alignCenter}
    />
  );
};


export default DomainSelectList;
