/* eslint-disable no-use-before-define, quote-props, react/forbid-prop-types, jsx-a11y/no-static-element-interactions*/
import React, { PropTypes, Component, Children } from 'react';
import {
  css, StyleSheet, transition
} from 'src/styles/theme';

import _ from 'underscore';

const expandablePropTypes = PropTypes.shape({
  children: React.PropTypes.node,
  fixedContentHeight: PropTypes.number,
  header: PropTypes.node,
  hideArrow: React.PropTypes.bool,
  hideBorder: React.PropTypes.bool,
  hideBorderBottom: React.PropTypes.bool,
  isFullBleed: PropTypes.bool,
  isOpened: React.PropTypes.bool,
  isThemeDark: PropTypes.bool,
  // Should omit onToggle as it will be overwritten
});

 /**
  * A highly customizable Accordion container that accepts header node and children
  * Useful for creating simple expandable/collapsable components or accordions
  * If you know the content height, pass the fixedContentHeight to increas performance
  * Otherwise we'll measure the children's content height and use it to animiate
  */
class Accordion extends Component {
  static propTypes = {
    htmlAttributes: PropTypes.object,
    // Override the inline-styles of the root element.
    style: PropTypes.object,
    isThemeDark: PropTypes.bool,
    // Callback when toggle state change, new activeIndex will be pass back
    onChange: PropTypes.func,
    children: React.PropTypes.node,
    activeIndex: PropTypes.number,
    // If we want multiple Expandables to be open by default
    // allowMultipleActive should be true to allow this feature
    activeIndexes: PropTypes.arrayOf(PropTypes.number),
    // If enabled, we will not close the panels until user click it again
    allowMultipleActive: PropTypes.bool,
    // If you don't need any special handling (e.g. set activeIndex)
    // This is the most performant way, it won't clone children
    // activeIndex and propsForExpandable will also get ignored
    noClone: PropTypes.bool,
    // If we want to avoid putting props on every Expandable, can use this props
    propsForExpandable: expandablePropTypes,
    propsForActiveExpandable: expandablePropTypes,

  }

  static defaultProps = {
    htmlAttributes: {},
    style: {},
    activeIndex: 0,
    children: [],
    propsForExpandable: {},
    activeIndexes: [],
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      activeIndex: props.activeIndex,
      activeIndexes: props.activeIndexes,
    };
  }

  componentWillReceiveProps(nextProps) {
    // if ('isOpened' in nextProps && nextProps.isOpened !== this.props.isOpened) {
    //   this.setState({ isOpened: nextProps.isOpened });
    // }
  }

  onExpandableToggle = (activeIndex) => {
    if (!this.props.allowMultipleActive) {
      this.setState({ activeIndex });
    } else {
      // Remove activeIndex if already exist, otherwise add new
      const activeIndexes = [...this.state.activeIndexes];
      if (_(activeIndexes).contains(activeIndex)) {
        _(activeIndexes).without(activeIndex);
      } else {
        activeIndexes.push(activeIndex);
      }
      this.setState({ activeIndexes });
    }
  }

  getItems = () => {
    const {
      children, propsForExpandable, propsForActiveExpandable, allowMultipleActive,
    } = this.props;
    const { activeIndex, activeIndexes } = this.state;
    const newChildren = [];
    Children.forEach(children, (child, index) => {
      if (!child) return;
      const isOpened = allowMultipleActive ?
        _(activeIndexes).contains(index) :
        index === activeIndex;
      let props = {
        ...propsForExpandable,
        // If no key is provided, use index as default key
        key: child.key || String(index),
        isOpened,
        onToggle: () => (this.onExpandableToggle(index)),
      };
      if (isOpened && propsForActiveExpandable) {
        _(props).extend(propsForActiveExpandable);
      }
      newChildren.push(React.cloneElement(child, props));
    });
    return newChildren;
  }

  render() {
    const {
      htmlAttributes,
      style,
      noClone,
      children,
    } = this.props;

    return (
      <div
        {...htmlAttributes}
        {...css(
          styles.Accordion,
        )}
        style={style}
      >
        {noClone && children}
        {!noClone && this.getItems()}
      </div>
    );
  }
}

module.exports = Accordion;

const styles = StyleSheet.create({
  Accordion: {
    transition: transition.easeOut(),
    position: 'relative',
    width: '100%',
    minHeight: 48,
    userSelect: 'none',
  },
});
