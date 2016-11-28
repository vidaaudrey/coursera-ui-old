/* eslint-disable no-use-before-define */
import React, { PropTypes} from 'react';
import {
  css, StyleSheet, cssWithClass, color, spacing, transition, breakPoints, font,
} from 'src/styles/theme';

import NavigationMenu from 'src/components/svg/material/navigation/menu';
import TextTruncate from 'src/components/extended/TextTruncate';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  arrayMove,
} from 'react-sortable-hoc';

const DragHandle = sortableHandle(() =>
  <NavigationMenu color={color.divider} hoverColor={color.divider} />);

const SortableListItemGrid = sortableElement(({
  value, index, useDragHandle, isHorizontal
}) => {
  return (
    <li {...cssWithClass('col-xs-6 col-sm-4 col-md-3', styles.SortableListItemGrid)}>
      <div {...cssWithClass('vertical-box border-a m-b-1 p-a-1', styles.itemInnerContainer)}>
        <img {...css(styles.image)} src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
        <div {...cssWithClass('flex-1', styles.titleContainer)}>
          <TextTruncate
            text="Leadership Communication for Maximum Impact: Storytelling Storytelling Lorem ipsum dolor Lorem ipsum dolor"
            line={3}
            truncateText={'...'}
          />
        </div>
        <div {...cssWithClass('horizontal-box align-items-bottom-right flex-1', styles.itemMain)}>
          <span {...cssWithClass('text-muted font-sm', styles.courseNumberSpan)}>1 Course</span>
          <span {...css(styles.indexNum)}>{index + 1} ({value})</span>
        </div>
      </div>
    </li>
  );
});

module.exports = SortableListItemGrid;


const styles = StyleSheet.create({
  SortableListItemGrid: {
    minHeight: 300,
    display: 'flex',
    float: 'left',
  },
  itemInnerContainer: {
    backgroundColor: color.white,
  },
});
