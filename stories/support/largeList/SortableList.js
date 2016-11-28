import React, { PropTypes} from 'react';
import {
  css, StyleSheet, cssWithClass, color, spacing, transition, breakPoints, font,
} from 'src/styles/theme';
import SortableListItem  from './SortableListItem';
import SortableListItemVertical  from './SortableListItemVertical';
import SortableListItemGrid  from './SortableListItemGrid';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  arrayMove,
} from 'react-sortable-hoc';

import TextTruncate from 'src/components/extended/TextTruncate';

const text = 'Leadership Communication for Maximum Impact: Storytelling Storytelling Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, minima.';


const SortableList = sortableContainer(({
  items, itemClass, sortingIndex, useDragHandle, sortableHandlers,
  axis,
}) => {
  const isHorizontal = axis === 'x';
  const isGrid = axis === 'xy';
  let ItemComponent = SortableListItem;

  if (isHorizontal) {
    ItemComponent = SortableListItemVertical;
  } else if (isGrid) {
    ItemComponent = SortableListItemGrid;
  }
  if (!items) {
    return <span>No items found</span>;
  }
  return (
    <div
      {...cssWithClass(isHorizontal ? 'horizontal-box' : '',
        isGrid ? styles.SortableListGrid : styles.SortableList,
        !isGrid && isHorizontal && styles.heightHorizontal,
        !isGrid && !isHorizontal && styles.heightVertical,
      )}
      {...sortableHandlers}
    >
      {items.map(({value, height}, index) =>
        <ItemComponent
          key={`item-${value}`}
          className={itemClass}
          sortingIndex={sortingIndex}
          index={index}
          value={value}
          height={height}
          useDragHandle={useDragHandle}
        />
      )}
    </div>
  );
});

module.exports = SortableList;


const styles = StyleSheet.create({
  SortableList: {
    minHeight: 300,
    margin: 0,
    padding: 0,
    width: '100%',
    overflow: 'auto',
    webkitOverflowScrolling: 'touch',
    border: `1px solid ${color.divider}`,
  },
  heightVertical: {
    height: 600,
  },
  heightHorizontal: {
    height: 480,
  },
  SortableListGrid: {
    overflow: 'auto',
    minHeight: 300,
    margin: 0,
    padding: 0,
    width: '100%',
    webkitOverflowScrolling: 'touch',
    border: `1px solid ${color.divider}`,
  },
});
