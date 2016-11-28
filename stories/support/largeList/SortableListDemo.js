import React, {Component} from 'react';
import {
  css, StyleSheet, cssWithClass, color, spacing, transition, breakPoints, font,
} from 'src/styles/theme';

import TextTruncate from 'src/components/extended/TextTruncate';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  arrayMove,
} from 'react-sortable-hoc';
import NavigationMenu from 'src/components/svg/material/navigation/menu';

const DragHandle = sortableHandle(() =>
  <NavigationMenu color={color.divider} hoverColor={color.divider} />);

const SortableItem = sortableElement(({ value, index }) => {
  return (
    <li {...cssWithClass('horizontal-box align-items-vertical-center', styles.item)}>
      <div {...cssWithClass('horizontal-box align-items-absolute-center', styles.dragHandleContainer)}>
        <DragHandle />
      </div>
      <span {...css(styles.indexNum)}>{index + 1}</span>
      <div {...cssWithClass('horizontal-box align-items-vertical-center flex-1', styles.itemMain)}>
        <img {...css(styles.image)} src="//placehold.it/100x100/A66506/FFFFFF" alt="CourseraAlt" />
        <div {...cssWithClass('flex-1', styles.titleContainer)}>
          <TextTruncate
            text="Leadership Communication for Maximum Impact: Storytelling Storytelling Lorem ipsum dolor Lorem ipsum dolor"
            line={3}
            truncateText={'...'}
          />

        </div>
        <span {...cssWithClass('text-muted font-sm', styles.courseNumberSpan)}>1 Course</span>
      </div>
    </li>
  );
});

const SortableList = sortableContainer(({items}) => {
  return (
    <ul {...css(styles.list)}>
      {items.map((value, index) =>
        <SortableItem key={`item-${index}`} index={index} value={value} />
      )}
    </ul>
  );
});

class SortableComponent extends Component {
  state = {
    items: [
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
    ],
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  }

  render() {
    return (
      <SortableList
        items={this.state.items}
        onSortEnd={this.onSortEnd}
      />
    );
  }
}

module.exports = SortableComponent;


const styles = StyleSheet.create({
  SortableComponent: {
    minHeight: 300,
  },
  list: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: 600,
    overflow: 'auto',
    webkitOverflowScrolling: 'touch',
    border: `1px solid ${color.divider}`,
  },
  item: {
    padding: spacing.md,
    position: 'relative',
    backgroundColor: color.white,
    outline: `1px solid ${color.divider}`,
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
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
  },
  image: {
    width: 64,
    height: 64,
  },
  courseNumberSpan: {
    minWidth: 56,
    textAlign: 'right',
  },
});
