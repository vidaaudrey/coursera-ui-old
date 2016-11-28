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

const SortableListItemVertical = sortableElement(({
  value, index, useDragHandle, isHorizontal
}) => {
  return (
    <li {...cssWithClass('vertical-box', styles.SortableListItemVertical)}>
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
    </li>
  );
});

module.exports = SortableListItemVertical;


const styles = StyleSheet.create({
  SortableListItemVertical: {
    padding: spacing.md,
    position: 'relative',
    backgroundColor: color.white,
    outline: `1px solid ${color.divider}`,
    userSelect: 'none',
    minWidth: 300,
  },
  dragHandleContainer: {
    [`@media (max-width: ${breakPoints.sm}px)`]: {
      paddingRight: spacing.md,
    },
  },
  indexNum: {
    display: 'inline-block',
    marginLeft: spacing.md,
    marginRight: spacing.md,
    [`@media (max-width: ${breakPoints.sm}px)`]: {
      display: 'none',
    },
  },
  titleContainer: {
    maxHeight: '4.5rem',
    lineHeight: '1.5rem',
    fontSize: font.md,
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '150',
  },
  courseNumberSpan: {
    minWidth: 56,
    textAlign: 'right',
  },
  itemMain: {
    minHeight: 100,
  },
});
