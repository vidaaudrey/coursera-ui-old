/* eslint-disable no-use-before-define, max-len */
import React, {PropTypes} from 'react';
import withBreakPoint from 'src/components/hocs/withBreakPoint';
import {css, StyleSheet, cssWithClass,  color, spacing, transition, containerMaxWidth} from 'src/styles/theme';
import _ from 'underscore';

const Grid = ({ breakPoint, breakPointNumber, showSmallGrid = true}) => {
  return (
    <div {...cssWithClass('w-100', styles.Grid)}>
      <div {...css(styles.gridBg, styles.zIndexLow)}>
        <div {...cssWithClass('container border-a', styles.gridBgInner)}>
          <div className="row h-100">
            {_.range(12).map(item =>
              <div key={item} {...cssWithClass('col-xs-1', styles.verticalStrip)}>
                <div {...css(styles.verticalStripInner, styles.zIndexLow)} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div {...css(styles.content, styles.zIndexHigh, showSmallGrid && styles.smallGrid)}>
        <div {...cssWithClass('container', styles.contentInner)}>
          <div className="row m-b-1">
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
          <div className="row m-b-1">
            <div className="col-xs-12">
              <h3>Basic Grid</h3>
            </div>
            {_.range(12).map(item =>
              <div key={`col1~${item}`} {...cssWithClass('col-xs-1', styles.contentBlock)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  col 1
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-1">
            {_.range(6).map(item =>
              <div key={`col2~${item}`} {...cssWithClass('col-xs-2', styles.contentBlock)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  col 2
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-1">
            {_.range(4).map(item =>
              <div key={`col3~${item}`} {...cssWithClass('col-xs-3', styles.contentBlock)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  col 3
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-1">
            {_.range(3).map(item =>
              <div key={`col4~${item}`} {...cssWithClass('col-xs-4', styles.contentBlock)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  col 4
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-1">
            {_.range(2).map(item =>
              <div key={`col6~${item}`} {...cssWithClass('col-xs-6', styles.contentBlock)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                  col 6
                </div>
              </div>
            )}
          </div>
          <div className="row m-b-1">
            <div {...cssWithClass('col-xs-5', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 5
              </div>
            </div>
            <div {...cssWithClass('col-xs-7', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 7
              </div>
            </div>
          </div>
          <div className="row m-b-1">
            <div {...cssWithClass('col-xs-5', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 5
              </div>
            </div>
            <div {...cssWithClass('col-xs-7', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 7
              </div>
            </div>
          </div>
          <div className="row m-b-1">
            <div {...cssWithClass('col-xs-4', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 4
              </div>
            </div>
            <div {...cssWithClass('col-xs-8', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 8
              </div>
            </div>
          </div>
          <div className="row m-b-1">
            <div {...cssWithClass('col-xs-3', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 3
              </div>
            </div>
            <div {...cssWithClass('col-xs-9', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 9
              </div>
            </div>
          </div>
          <div className="row m-b-1">
            <div {...cssWithClass('col-xs-2', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 2
              </div>
            </div>
            <div {...cssWithClass('col-xs-10', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 10
              </div>
            </div>
          </div>
          <div className="row m-b-1">
            <div {...cssWithClass('col-xs-1', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 1
              </div>
            </div>
            <div {...cssWithClass('col-xs-11', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 11
              </div>
            </div>
          </div>
          <div className="row m-b-1">
            <div {...cssWithClass('col-xs-12', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col 12
              </div>
            </div>
          </div>
          <div className="row m-b-1">
            <div className="col-xs-12">
              <h3>Bootstrap Grid</h3>
              <a className="font-italic font-sm" href="http://v4-alpha.getbootstrap.com/layout/grid/">Official Doc</a>
            </div>
          </div>
          <div className="row m-b-1">
            <div className="col-xs-12 col-md-8">
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col-xs-12 col-md-8
              </div>
            </div>
            <div className="col-xs-6 col-md-4">
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col-xs-6 col-md-4
              </div>
            </div>
          </div>

          <div className="row m-b-1 ">
            <div {...cssWithClass('col-xs-6 col-md-4', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col-xs-6 col-md-4
              </div>
            </div>
            <div {...cssWithClass('col-xs-6 col-md-4', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col-xs-6 col-md-4
              </div>
            </div>
            <div {...cssWithClass('col-xs-6 col-md-4', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col-xs-6 col-md-4
              </div>
            </div>
          </div>

          <div className="row m-b-1">
            <div {...cssWithClass('col-xs-6', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col-xs-6
              </div>
            </div>
            <div {...cssWithClass('col-xs-6', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                col-xs-6
              </div>
            </div>
          </div>

          <div className="row m-b-1">
            <div className="col-xs-12">
              <h3>Bootstrap Flex Grid</h3>
              <a className="font-italic font-sm" href="http://v4-alpha.getbootstrap.com/layout/flexbox-grid/">Official Doc</a>
            </div>
          </div>
          <div className="row">
            <div {...cssWithClass('col-xs', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                1 of 2
              </div>
            </div>
            <div {...cssWithClass('col-xs', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                1 of 2
              </div>
            </div>
          </div>
          <div className="row">
            <div {...cssWithClass('col-xs', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                1 of 3
              </div>
            </div>
            <div {...cssWithClass('col-xs', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                1 of 3
              </div>
            </div>
            <div {...cssWithClass('col-xs', styles.contentBlock)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                1 of 3
              </div>
            </div>
          </div>

          <div className="row p-t-2">
            <div className="col-xs-12">
              <h3>Auto-layout columns</h3>
              <p className="text-muted font-italic">
                {'Use .col-{breakpoint}'}
              </p>
            </div>
          </div>
          <div {...cssWithClass('row m-b-1', styles.horizontalAlignRow)}>
            <div {...cssWithClass('col-xs', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 col-xs, 1 of 3
              </div>
            </div>
            <div {...cssWithClass('col-xs-5', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 col-xs-5, 2 of 3
              </div>
            </div>
            <div {...cssWithClass('col-xs', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 col-xs, 3 of 3
              </div>
            </div>
          </div>
          <div {...cssWithClass('row m-b-1', styles.horizontalAlignRow)}>
            <div {...cssWithClass('col-xs-12 col-sm', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 col-xs-12 col-sm
              </div>
            </div>
            <div {...cssWithClass('col-xs-12 col-sm-6', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 col-xs-12 col-sm-6
              </div>
            </div>
            <div {...cssWithClass('col-xs-12 col-sm', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 col-xs-12 col-sm
              </div>
            </div>
          </div>

          <div className="row p-t-2">
            <div className="col-xs-12">
              <h3>Vertical alignment</h3>
              <p className="text-muted font-italic">
                flex-items-xs-top,  flex-items-xs-middle,  flex-items-xs-bottom
              </p>
            </div>
          </div>
          <div {...cssWithClass('row m-b-1 flex-items-xs-top', styles.verticalAlignRow)}>
            {_.range(3).map(item =>
              <div key={`vertical-flex-box-top~${item}`} {...cssWithClass('col-xs', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                   flex-items-xs-top
                </div>
              </div>
            )}
          </div>
          <div {...cssWithClass('row m-b-1 flex-items-xs-middle', styles.verticalAlignRow)}>
            {_.range(3).map(item =>
              <div key={`vertical-flex-box-middle~${item}`} {...cssWithClass('col-xs', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                   flex-items-xs-middle
                </div>
              </div>
            )}
          </div>
          <div {...cssWithClass('row m-b-1 flex-items-xs-bottom', styles.verticalAlignRow)}>
            {_.range(3).map(item =>
              <div key={`vertical-flex-box-bottom~${item}`} {...cssWithClass('col-xs', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                   flex-items-xs-bottom
                </div>
              </div>
            )}
          </div>

          <div className="row p-t-2">
            <div className="col-xs-12">
              <h3>Horizontal alignment</h3>
              <p className="text-muted font-italic">
                flex-items-xs-left,  flex-items-xs-center,  flex-items-xs-right, flex-items-xs-around, flex-items-xs-between
              </p>
            </div>
          </div>
          <div {...cssWithClass('row m-b-1 flex-items-xs-left', styles.horizontalAlignRow)}>
            {_.range(2).map(item =>
              <div key={`horizontal-flex-box-left~${item}`} {...cssWithClass('col-xs-4', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                   flex-items-xs-left
                </div>
              </div>
            )}
          </div>
          <div {...cssWithClass('row m-b-1 flex-items-xs-center', styles.horizontalAlignRow)}>
            {_.range(2).map(item =>
              <div key={`horizontal-flex-box-center~${item}`} {...cssWithClass('col-xs-4', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                   flex-items-xs-center
                </div>
              </div>
            )}
          </div>
          <div {...cssWithClass('row m-b-1 flex-items-xs-right', styles.horizontalAlignRow)}>
            {_.range(2).map(item =>
              <div key={`horizontal-flex-box-right~${item}`} {...cssWithClass('col-xs-4', styles.blockHeight)}>
                <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                   flex-items-xs-right
                </div>
              </div>
            )}
          </div>
          <div {...cssWithClass('row m-b-1 flex-items-xs-around', styles.horizontalAlignRow)}>
            <div {...cssWithClass('col-xs-4', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 flex-items-xs-around
              </div>
            </div>
            <div {...cssWithClass('col-xs-4', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 flex-items-xs-around
              </div>
            </div>
          </div>
          <div {...cssWithClass('row m-b-1 flex-items-xs-between', styles.horizontalAlignRow)}>
            <div {...cssWithClass('col-xs-4', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 flex-items-xs-between
              </div>
            </div>
            <div {...cssWithClass('col-xs-4', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 flex-items-xs-between
              </div>
            </div>
          </div>

          <div className="row p-t-2">
            <div className="col-xs-12">
              <h3>Reordering</h3>
              <p className="text-muted font-italic">
                flex-xs-unordered, flex-xs-first, flex-xs-last
              </p>
            </div>
          </div>
          <div {...cssWithClass('row m-b-1 flex-items-xs-left', styles.horizontalAlignRow)}>
            <div {...cssWithClass('col-xs flex-xs-unordered', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 flex-xs-unordered
              </div>
            </div>
            <div {...cssWithClass('col-xs flex-xs-last', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 flex-xs-last
              </div>
            </div>
            <div {...cssWithClass('col-xs flex-xs-first', styles.blockHeight)}>
              <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.blockInner)}>
                 flex-xs-first
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
    background: 'rgba(242, 218, 228, 0.25)',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'scroll',
  },
  contentInner: {
    height: '100%',
  },
  contentBlock: {
    minHeight: 48,
    marginBottom: spacing.sm,
  },
  blockHeight: {
    minHeight: 48,
  },
  blockInner: {
    background: '#f2dae4',
    borderRadius: 2,
    minHeight: 48,
    color: color.secondaryText,
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
