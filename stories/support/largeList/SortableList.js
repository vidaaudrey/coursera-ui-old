import React, { PropTypes} from 'react';
import {
  css, StyleSheet, cssWithClass, color, spacing, transition, breakPoints, font,
} from 'src/styles/theme';
import SortableListItem  from './SortableListItem';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  arrayMove,
} from 'react-sortable-hoc';

const SortableList = sortableContainer(({className, items, itemClass, sortingIndex, useDragHandle, sortableHandlers}) => {
	return (
		<div {...css(styles.SortableList)} {...sortableHandlers}>
			{items.map(({value, height}, index) =>
				<SortableListItem
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
    height: 600,
    overflow: 'auto',
    webkitOverflowScrolling: 'touch',
    border: `1px solid ${color.divider}`,
  },
});
