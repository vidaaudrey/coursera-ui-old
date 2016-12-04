import React, { PropTypes} from 'react';
import {
  css, StyleSheet, cssWithClass, color, spacing, transition, breakPoints, font,
} from 'src/styles/theme';
import classNames from 'classnames';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  arrayMove,
} from 'react-sortable-hoc';

class SortableListWrapper extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
    itemClass: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    onSortStart: PropTypes.func,
    onSortEnd: PropTypes.func,
    component: PropTypes.func
  }

  static defaultProps = {
    width: 400,
    height: 600,
  };

  constructor(props) {
    super(props);
    const {items} = props;
    this.state = {
      items,
      isSorting: false,
    };
  }

  onSortStart = () => {
    const {onSortStart} = this.props;
    this.setState({isSorting: true});

    if (onSortStart) {
      onSortStart(this.componentRef);
    }
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    const {onSortEnd} = this.props;
    const {items} = this.state;

    this.setState({items: arrayMove(items, oldIndex, newIndex), isSorting: false});

    if (onSortEnd) {
      onSortEnd(this.componentRef);
    }
  };

  render() {
    const Component = this.props.component;
    const {items, isSorting} = this.state;
    const props = {
      isSorting,
      items,
      onSortEnd: this.onSortEnd,
      onSortStart: this.onSortStart,
    };

    return <Component ref={r => (this.componentRef = r)} {...this.props} {...props} />;
  }
}

module.exports = SortableListWrapper;


const styles = StyleSheet.create({
  SortableListWrapper: {
    minHeight: 300,
  },
});
