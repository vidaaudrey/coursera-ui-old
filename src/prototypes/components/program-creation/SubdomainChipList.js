/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, font, transition, zIndex, breakPoints,
} = require('src/styles/theme');

import {NavigationArrowBack} from 'src/components/svg/material';
import {Avatar, Button, ChipList} from 'src';
const _ = require('underscore');

const BackArrowOffset = 60;

const mockListData = [
  {
    id: 'leadership-and-management',
    isSelected: false,
    label: 'leadership-and-management',
  }, {
    id: 'finance',
    isSelected: false,
    label: 'finance',
  }, {
    id: 'marketing',
    isSelected: true,
    label: 'marketing',
  }, {
    id: 'entrepreneurship',
    isSelected: false,
    label: 'entrepreneurship',
  }, {
    id: 'business-essentials',
    isSelected: true,
    label: 'business-essentials',
  }, {
    id: 'business-strategy',
    isSelected: true,
    label: 'business-strategy',
  },
];

const ICON_SIZE = 44;
const SubdomainChipList = ({
  listData = mockListData, onSelectChange, isInfiniteMode, onCollapse, domainId, domainName,
}) => {
  return (
    <div {...cssWithClass('vertical-box p-a-1', styles.SubdomainChipList)}>
      <div {...cssWithClass('horizontal-box', styles.navRow)}>
        <div {...css(styles.buttonWrapper, styles.shiftArrowLeftInBigScreens)}>
          {isInfiniteMode &&
            <Button
              isSvgButton
              size={'md'}
              type="noStyle"
              isThemeDark
              htmlAttributes={{
                onClick: onCollapse,
              }}
              style={{minWidth: ICON_SIZE, padding: 0}}
            >
              <NavigationArrowBack
                size={ICON_SIZE}
                color={color.white}
                hoverColor={color.lightPrimary}
              />
            </Button>
          }
        </div>
      </div>
      <div className="horizontal-box align-items-vertical-center wrap">
        <h2 {...css(styles.domainName)}>{domainName}</h2>
        <div {...css(styles.hideMdDown)}>
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
      </div>
      <ChipList
        listData={listData}
        onSelectChange={onSelectChange}
        chipAttributes={{
          isDarkTheme: true,
          height: 28,
          fontSize: 'xs',
        }}
      />
    </div>
  );
};

SubdomainChipList.propTypes = {
  isInfiniteMode: React.PropTypes.bool,
  onSelectChange: React.PropTypes.func.isRequired,
  onCollapse: React.PropTypes.func.isRequired,
};

module.exports = SubdomainChipList;

const styles = StyleSheet.create({
  SubdomainChipList: {
    transition: transition.easeOut(),
    color: color.white,
    width: '100%',
    textAlign: 'left',
    backgroundColor: color.darkPrimary,
    zIndex: zIndex.lg,
  },
  domainName: {
    fontWeight: 'normal',
    marginRight: spacing.lg,
  },
  buttonWrapper: {

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
  navRow: {
    position: 'relative',
  },
  hideMdDown: {
    [`@media (max-width: ${breakPoints.md}px)`]: {
      display: 'none',
    },
  },
  shiftArrowLeftInBigScreens: {
    [`@media (min-width: ${breakPoints.md}px)`]: {
      position: 'absolute',
      left: -BackArrowOffset,
    },
  },
});
