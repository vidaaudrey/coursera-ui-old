import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button, SelectList} from 'src';
const _ = require('underscore');

const mockListData = [
  {
    'id': 'leadership-and-management',
    'isSelected': false,
    'label': 'leadership-and-management'
  }, {
    'id': 'finance',
    'isSelected': false,
    'label': 'finance'
  }, {
    'id': 'marketing',
    'isSelected': true,
    'label': 'marketing'
  }, {
    'id': 'entrepreneurship',
    'isSelected': false,
    'label': 'entrepreneurship'
  }, {
    'id': 'business-essentials',
    'isSelected': true,
    'label': 'business-essentials'
  }, {
    'id': 'business-strategy',
    'isSelected': true,
    'label': 'business-strategy'
  }
];

const SubDomainSelectCard = ({
  styles,
  listData = mockListData, onSelectChange
}) => {
  return (
    <div {...cssWithClass('vertical-box p-a-1 m-b-2', styles.SubDomainSelectCard)}>
      <div className="horizontal-box align-items-vertical-center wrap">
        <h2 {...css(styles.domainName)}>Data Science</h2>
        <div className="horizontal-box">
          <h3 {...css(styles.number)}>
            183
            <span {...css(styles.typeSpan)}>Courses</span>
          </h3>
          <h3 {...css(styles.number)}>
            25
            <span {...css(styles.typeSpan)}>Specializations</span>
          </h3>
        </div>
      </div>
      <SelectList
        listData={listData}
        onSelectChange={onSelectChange}
        selectListItemAttributes={{
          isDarkTheme: true,
          height: 28,
          fontSize: 'xs',
        }}
      />
    </div>
  );
};

export default withStyles(({color, spacing, font}) => ({
  SubDomainSelectCard: {
    color: color.white,
    textAlign: 'left',
    backgroundColor: color.darkPrimary,
  },
  domainName: {
    fontWeight: 'normal',
    marginRight: spacing.lg,
  },
  number: {
    marginRight: spacing.lg,
  },
  typeSpan: {
    fontSize: font.md,
    paddingLeft: spacing.sm,
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
}))(SubDomainSelectCard);
