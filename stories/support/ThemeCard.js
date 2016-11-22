/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes} from 'react';
import {
  css, StyleSheet, cssWithClass, font, zIndex, color, spacing, transition, containerMaxWidth,
  iconSize
} from 'src/styles/theme';
import { Paper } from 'src';

import {
  Card, CardTitle, CardSubtitle, CardBlock, CardHeader, CardFooter, CardImage,
} from 'src/components/basic/Card';
import NavigationMoreVert from 'src/components/svg/material/navigation/more-vert';
import NavigationExpandLess from 'src/components/svg/material/navigation/expand-less';
import ActionInfoOutline from 'src/components/svg/material/action/info-outline';
import SvgHamburger from 'src/components/svg/coursera/common/SvgHamburger';
import SvgInvitations from 'src/components/svg/coursera/common/SvgInvitations';
import SvgCurriculum from 'src/components/svg/coursera/common/SvgCurriculum';
import SvgLineChart from 'src/components/svg/coursera/common/SvgLineChart';
import SvgCircleWarning from 'src/components/svg/coursera/common/SvgCircleWarning';
import SvgCheckOutline from 'src/components/svg/coursera/common/SvgCheckOutline';
import SvgPlus from 'src/components/svg/coursera/common/SvgPlus';
import SvgEmail from 'src/components/svg/coursera/common/SvgEmail';

const ThemeCard = ({isThemeDark}) => {
  return (
    <Card isThemeDark={isThemeDark}>
      <div {...css(styles.navMenuIconContainer)}>
        <SvgHamburger color={isThemeDark ? color.iconThemeDark : color.icon} size={iconSize.md} hoverColor={color.primary} />
      </div>
      <div {...css(styles.navMoreIconContainer)}>
        <NavigationMoreVert color={isThemeDark ? color.iconThemeDark : color.icon} size={iconSize.md} hoverColor={color.primary} />
      </div>

      <CardBlock isFullBleed>
        <div
          {...cssWithClass('horizontal-box align-items-vertical-center',
            styles.coverHeader,
            styles.boxShadow,
            isThemeDark ? styles.coverHeaderDark : styles.coverHeaderLight,
          )}
        >
          <div className="p-a-2">
            <h1>{isThemeDark ? 'Dark' : 'Light'} Theme Preview</h1>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
        </div>
      </CardBlock>
      <CardBlock isFullBleed>
        <div {...cssWithClass('horizontal-box align-items-vertical-center p-a-1', styles.bodyRow, styles[`divider${isThemeDark ? 'ThemeDark' : ''}`])}>
          <div className="m-t-1 m-b-1">
            <SvgInvitations color={isThemeDark ? color.iconThemeDark : color.icon} size={iconSize.sm} />
          </div>
          <div className="m-l-2">
            <h3 {...cssWithClass('m-a-0', styles[`bodyRowTitle${isThemeDark ? 'ThemeDark' : ''}`])}>Primary Text</h3>
            <p {...cssWithClass('m-a-0', styles[`bodyRowSubtitle${isThemeDark ? 'ThemeDark' : ''}`])}>Secondary Text</p>
          </div>
          <div className="flex-1 m-t-1 m-b-1 text-xs-right">
            <SvgCircleWarning color={color.warning} hoverColor={color.warning} size={iconSize.sm} />
          </div>
        </div>
        <div {...cssWithClass('horizontal-box align-items-vertical-center p-a-1', styles.bodyRow, styles[`divider${isThemeDark ? 'ThemeDark' : ''}`])}>
          <div className="m-t-1 m-b-1">
            <SvgCurriculum color={isThemeDark ? color.iconThemeDark : color.icon} size={iconSize.sm} />
          </div>
          <div className="m-l-2">
            <h3 {...cssWithClass('m-a-0', styles[`bodyRowTitle${isThemeDark ? 'ThemeDark' : ''}`])}>Learning Program</h3>
            <p {...cssWithClass('m-a-0', styles[`bodyRowSubtitle${isThemeDark ? 'ThemeDark' : ''}`])}>Overview of the coursers and specialization</p>
          </div>
          <div className="flex-1 m-t-1 m-b-1 text-xs-right">
            <ActionInfoOutline color={color.info} hoverColor={color.info} size={iconSize.md} />
          </div>
        </div>
        <div {...cssWithClass('horizontal-box align-items-vertical-center p-a-1', styles.bodyRow, styles[`divider${isThemeDark ? 'ThemeDark' : ''}`])}>
          <div className="m-t-1 m-b-1">
            <SvgLineChart color={isThemeDark ? color.iconThemeDark : color.icon} size={iconSize.sm} />
          </div>
          <div className="m-l-2">
            <h3 {...cssWithClass('m-a-0', styles[`bodyRowTitle${isThemeDark ? 'ThemeDark' : ''}`])}>Engagement Analytics</h3>
            <p {...cssWithClass('m-a-0', styles[`bodyRowSubtitle${isThemeDark ? 'ThemeDark' : ''}`])}>Program members, enrollment, and accomplishments</p>
          </div>
          <div className="flex-1 m-t-1 m-b-1 text-xs-right">
            <SvgCheckOutline color={color.success} hoverColor={color.success} size={iconSize.sm} />
          </div>
        </div>
        <div {...cssWithClass('p-a-1', styles.bodyRow, styles[`divider${isThemeDark ? 'ThemeDark' : ''}`])}>
          <div className="horizontal-box align-items-vertical-center">
            <div className="m-t-1 m-b-1">
              <SvgInvitations color={isThemeDark ? color.iconThemeDark : color.icon} size={iconSize.sm} />
            </div>
            <div className="m-l-2">
              <h3 {...cssWithClass('m-a-0', styles[`bodyRowTitle${isThemeDark ? 'ThemeDark' : ''}`])}>Manage Memerbers</h3>
              <p {...cssWithClass('m-a-0', styles[`bodyRowSubtitle${isThemeDark ? 'ThemeDark' : ''}`])}>Invite or delete members</p>
            </div>
            <div className="flex-1 m-t-1 m-b-1 text-xs-right">
              <NavigationExpandLess color={isThemeDark ? color.iconThemeDark : color.icon} size={iconSize.md} hoverColor={color.primary} />
            </div>
          </div>
          <div className="p-l-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolores assumenda distinctio quibusdam, harum iste quasi impedit nihil cumque sed voluptatum animi doloribus tempore quo eum. Dolore temporibus vitae repellat!</p>
          </div>
        </div>
        <div {...css(styles.actionBtnContainer)}>
          <Paper zDepth={2} isCircle style={{background: color.accent}}>
            <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.actionButton)}>
              <SvgPlus color={color.white} hoverColor={color.white} size={iconSize.md} />
            </div>
          </Paper>
        </div>
      </CardBlock>
    </Card>
  );
};

module.exports = ThemeCard;

const styles = StyleSheet.create({
  ThemeCard: {
    minWidth: 200,
  },
  actionBtnContainer: {
    position: 'absolute',
    width: 56,
    height: 56,
    bottom: spacing.md,
    right: spacing.md,
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: '50%',
  },
  bodyRow: {
  },
  divider: {
    borderBottom: `1px solid ${color.divider}`,
  },
  dividerThemeDark: {
    borderBottom: `1px solid ${color.dividerThemeDark}`,
  },
  boxShadow: {
    boxShadow: `0px 2px 6px ${color.shadow}`,
  },
  bodyRowTitle: {
    color: color.primaryText,
  },
  bodyRowSubtitle: {
    color: color.secondaryText,
  },
  bodyRowTitleThemeDark: {
    color: color.primaryTextThemeDark,
  },
  bodyRowSubtitleThemeDark: {
    color: color.secondaryTextThemeDark,
  },
  navMoreIconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: zIndex.md,
  },
  navMenuIconContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: zIndex.md,
  },
  coverHeader: {
    minHeight: 240,
    padding: spacing.lg,
  },
  coverHeaderLight: {
    background: color.lightPrimary,
    color: color.primaryText,
  },
  coverHeaderDark: {
    background: color.primary,
    color: color.primaryTextThemeDark,
  },
});
