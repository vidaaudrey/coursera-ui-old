/* eslint-disable no-use-before-define */
import React, {PropTypes} from 'react';
import withBreakPoint from 'src/components/hocs/withBreakPoint';
import {css, StyleSheet, cssWithClass,  color, spacing, transition, containerMaxWidth} from 'src/styles/theme';
import _ from 'underscore';
const Grid = ({ breakPoint, breakPointNumber, showSmallGrid = true}) => {
  console.warn('---', breakPoint, breakPointNumber);
  const range12 = _.range(12);
  return (
    <div {...cssWithClass('w-100', styles.Grid, showSmallGrid && styles.smallGrid)}>
      <div {...css(styles.gridBg, styles.zIndexLow)}>
        <div {...cssWithClass('container border-a', styles.gridBgInner)}>
          <div className="row h-100">
            {_.range(12).map(item =>
              <div key={item} {...cssWithClass('col-xs-1', styles.verticalStrip)}>
                <div {...css(styles.verticalStripInner, styles.zIndexLow)}>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div {...css(styles.content, styles.zIndexHigh)}>
        <div {...cssWithClass('container', styles.contentInner)}>
          <div className="row m-b-2">
            <div className="col-xs-12">
              <h1>Grid</h1>
              <p className="text-muted font-italic">
                Resize the window to see the grid change
              </p>
              <h4>
                Device Size: {breakPoint} /
                BreakPoint: {breakPointNumber} /
                MaxContainerWidth: {containerMaxWidth[breakPoint]}
              </h4>
            </div>
          </div>
          <div className="row m-b-2">
            <div className="col-xs-12">
              <h3>Basic Grid</h3>
            </div>
            {_.range(12).map(item =>
              <div key={`span1~${item}`} {...cssWithClass('col-xs-1', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  span 1
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-2">
            {_.range(6).map(item =>
              <div key={`span2~${item}`} {...cssWithClass('col-xs-2', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  span 2
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-2">
            {_.range(4).map(item =>
              <div key={`span3~${item}`} {...cssWithClass('col-xs-3', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  span 3
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-2">
            {_.range(3).map(item =>
              <div key={`span4~${item}`} {...cssWithClass('col-xs-4', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  span 4
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-2">
            {_.range(2).map(item =>
              <div key={`span6~${item}`} {...cssWithClass('col-xs-6', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  span 6
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-2">
            <div {...cssWithClass('col-xs-5', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 5
              </div>
            </div>
            <div {...cssWithClass('col-xs-7', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 7
              </div>
            </div>
          </div>
          <div className="row m-b-2">
            <div {...cssWithClass('col-xs-5', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 5
              </div>
            </div>
            <div {...cssWithClass('col-xs-7', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 7
              </div>
            </div>
          </div>
          <div className="row m-b-2">
            <div {...cssWithClass('col-xs-4', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 4
              </div>
            </div>
            <div {...cssWithClass('col-xs-8', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 8
              </div>
            </div>
          </div>
          <div className="row m-b-2">
            <div {...cssWithClass('col-xs-3', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 3
              </div>
            </div>
            <div {...cssWithClass('col-xs-9', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 9
              </div>
            </div>
          </div>
          <div className="row m-b-2">
            <div {...cssWithClass('col-xs-2', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 2
              </div>
            </div>
            <div {...cssWithClass('col-xs-10', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 10
              </div>
            </div>
          </div>
          <div className="row m-b-2">
            <div {...cssWithClass('col-xs-1', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 1
              </div>
            </div>
            <div {...cssWithClass('col-xs-11', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 11
              </div>
            </div>
          </div>
          <div className="row m-b-2">
            <div {...cssWithClass('col-xs-12', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                span 12
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = withBreakPoint(Grid);


const styles = StyleSheet.create({
  Grid: {
    minHeight: 300,
    height: '100vh',
    position: 'relative',
  },
  smallGrid: {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0, 0, 0, 0.1) 1px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0, 0, 0, 0.1) 1px, transparent 8px)',
    backgroundSize: '8px 8px',
  },
  zIndexLow: {
    zIndex: 1,
  },
  zIndexHigh: {
    zIndex: 2,
  },
  gridBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  gridBgInner: {
    height: '100%',
  },

  verticalStrip: {
    height: '100%',
  },
  verticalStripInner: {
    height: '100%',
    // background: '#f2dae4',
    background: 'rgba(242, 218, 228, 0.18)',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  contentInner: {
    height: '100%',
  },
  blockHeight: {
    height: 48,
  },
  blockInner: {
    background: '#f2dae4',
    borderRadius: 2,
    minHeight: 48,
    color: color.white,
  },

});
