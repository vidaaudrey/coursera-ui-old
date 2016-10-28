/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, font, transition, zIndex,
} = require('src/styles/theme');

import {NavigationArrowBack} from 'src/components/svg/material';
import {Avatar, Button, ChipList} from 'src';
const _ = require('underscore');
const classNames = require('classnames');

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
const DomainSectionSubDomainCard = ({
  listData = mockListData, onSelectChange, isInfiniteMode, onCollapse, domainId,
}) => {
  console.warn('-DomainSectionSubDomainCard--', isInfiniteMode, domainId);
  const toggleableContentClassName = classNames({'hidden-md-down': isInfiniteMode});
  return (
    <div {...cssWithClass('vertical-box p-a-1 m-b-2', styles.DomainSectionSubDomainCard)}>
      <div {...cssWithClass('horizontal-box', styles.navRow)}>
        <div {...css(styles.buttonWrapper, styles.shiftArrowLeftInBigScreens)}>
          {isInfiniteMode &&
            <Button
              isSvgButton
              size={'sm'}
              htmlAttributes={{
                onClick: onCollapse,
              }}
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
        <div className={toggleableContentClassName}>
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
      </div>
      <ChipList
        listData={listData}
        onSelectChange={onSelectChange}
        ChipAttributes={{
          isDarkTheme: true,
          height: 28,
          fontSize: 'xs',
        }}
      />
    </div>
  );
};

DomainSectionSubDomainCard.propTypes = {
  isInfiniteMode: React.PropTypes.bool,
  onSelectChange: React.PropTypes.func.isRequired,
  onCollapse: React.PropTypes.func.isRequired,
};

module.exports = DomainSectionSubDomainCard;

const styles = StyleSheet.create({
  DomainSectionSubDomainCard: {
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
  shiftArrowLeftInBigScreens: {
    '@media (min-width: 576px)': {
      position: 'absolute',
      left: -80,
    },
  }
});
