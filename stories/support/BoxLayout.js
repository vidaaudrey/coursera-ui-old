/* eslint-disable no-use-before-define, max-len */
import React, {PropTypes} from 'react';
import withBreakPoint from 'src/components/hocs/withBreakPoint';
import {css, StyleSheet, cssWithClass,  color, spacing, transition, containerMaxWidth} from 'src/styles/theme';
import _ from 'underscore';
const BoxLayout = () => {
  return (
    <div {...cssWithClass('container', styles.BoxLayout)}>
      <div className="row m-b-2">
        <div className="col-xs-12">
          <h1>BoxLayout</h1>
          <p className="text-muted font-italic">
            This is a collection of box layouts based on our
            <a href="https://styleguide.dkandu.me/learnerApp/section-6.html"> previous style guide</a>
          </p>
        </div>
      </div>
      <div className="row m-b-2">
        <div className="col-xs-12">
          <h3>Horizontal Box</h3>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic"> .horizontal-box.align-items-left (default)</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box ', styles.blockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic"> .horizontal-box.align-items-right </p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box align-items-right', styles.blockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic"> .horizontal-box.align-items-absolute-center </p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box align-items-absolute-center', styles.blockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic"> .horizontal-box.align-items-spacebetween </p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box align-items-spacebetween', styles.blockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic"> .horizontal-box.align-items-spacearound </p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box align-items-spacearound', styles.blockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>

        <div className="col-xs-12">
          <p className="text-muted font-italic"> .horizontal-box.align-items-top </p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box align-items-top', styles.blockContainer, styles.verticalBlockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic"> .horizontal-box.align-items-vertical-center </p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box align-items-vertical-center', styles.blockContainer, styles.verticalBlockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic"> .horizontal-box.align-items-bottom </p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box align-items-bottom', styles.blockContainer, styles.verticalBlockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>

        <div className="col-xs-12">
          <p className="text-muted font-italic"> .horizontal-box.align-items-bottom-right </p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box align-items-bottom-right', styles.blockContainer, styles.verticalBlockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
      </div>

      <div className="row m-b-2">
        <div className="col-xs-12">
          <h3>Vertical Box</h3>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic"> .vertical-box</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 vertical-box ', styles.blockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>

        <div className="col-xs-12">
          <p className="text-muted font-italic"> .vertical-box.align-items-vertical-center</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 vertical-box align-items-vertical-center ', styles.blockContainer, styles.extraHeight)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>

        <div className="col-xs-12">
          <p className="text-muted font-italic"> .vertical-box.align-items-absolute-center</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 vertical-box align-items-absolute-center ', styles.blockContainer,styles.extraHeight)}>
          <div {...css(styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
      </div>

      <div className="row m-b-2">
        <div className="col-xs-12">
          <h3>Flexing Columns</h3>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic">Flexing first Item</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box ', styles.blockContainer)}>
          <div {...cssWithClass('flex-1', styles.block)}> First </div>
          <div {...css(styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic">Flexing middle item</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box ', styles.blockContainer)}>
          <div {...css(styles.block)}> First </div>
          <div {...cssWithClass('flex-1', styles.block)}> Second </div>
          <div {...css(styles.block)}> Third </div>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic">Flexing all items</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box ', styles.blockContainer)}>
          <div {...cssWithClass('flex-3', styles.block)}> First, flex-3 </div>
          <div {...cssWithClass('flex-2', styles.block)}> Second, flex-2 </div>
          <div {...cssWithClass('flex-1', styles.block)}> Third, flex-1 </div>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic">Flexing certain items</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box ', styles.blockContainer)}>
          <div {...cssWithClass('flex-1', styles.block)}> First, flex-1 </div>
          <div {...css(styles.block)}> Second </div>
          <div {...cssWithClass('flex-2', styles.block)}> Third, flex-2 </div>
          <div {...css(styles.block)}> Fourth </div>
        </div>
      </div>

      <div className="row m-b-2">
        <div className="col-xs-12">
          <h3>Self Alignment</h3>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic">align-self-</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box ', styles.blockContainer, styles.verticalBlockContainer)}>
          <div {...cssWithClass('flex-1 align-self-start', styles.block)}> align-self-start </div>
          <div {...cssWithClass('flex-1 align-self-center', styles.block)}> align-self-center </div>
          <div {...cssWithClass('flex-1 align-self-stretch', styles.block)}> align-self-stretch </div>
          <div {...cssWithClass('flex-1 align-self-end', styles.block)}> align-self-end </div>
        </div>
      </div>

      <div className="row m-b-2">
        <div className="col-xs-12">
          <h3>Wrapping</h3>
        </div>
        <div className="col-xs-12">
          <p className="text-muted font-italic">.horizontal-box.wrap</p>
        </div>
        <div {...cssWithClass('col-xs-12 m-b-2 horizontal-box wrap ', styles.blockContainer)}>
          <div {...css(styles.block, styles.wrapContainer)}> First </div>
          <div {...css(styles.block, styles.wrapContainer)}> Second </div>
          <div {...css(styles.block, styles.wrapContainer)}> Third </div>
          <div {...css(styles.block, styles.wrapContainer)}> Fourth </div>
        </div>
      </div>
    </div>
  );
};

module.exports = BoxLayout;


const styles = StyleSheet.create({
  BoxLayout: {
    minHeight: 300,
    height: '100vh',
    position: 'relative',
  },
  contentInner: {
    height: '100%',
  },
  contentBlock: {
    minHeight: 64,
    marginBottom: spacing.sm,
  },
  blockHeight: {
    minHeight: 48,
  },
  blockContainer: {
    background: color.bgGray,
    borderRadius: 2,
    minHeight: 48,
    color: color.secondaryText,
    border: `1px solid ${color.divider}`,
  },
  verticalBlockContainer: {
    minHeight: 96,
  },
  wrapContainer: {
    minWidth: 400,
  },
  extraHeight: {
    height: 320,
  },
  block: {
    minHeight: 32,
    margin: 8,
    padding: '4px 8px',
    lineHeight: '32px',
    background: color.white,
  },
  verticalAlignRow: {
    minHeight: 96,
    background: 'rgba(198, 66, 85, 0.4)',
    border: '1px solid #c64255',
  },
  horizontalAlignRow: {
    minHeight: 50,
    background: 'rgba(198, 66, 85, 0.4)',
    border: '1px solid #c64255',
  },
});
