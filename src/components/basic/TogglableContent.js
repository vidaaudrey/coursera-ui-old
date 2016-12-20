/* eslint-disable react/no-unused-prop-types */
import React, { Component, PropTypes } from 'react';
import {
  css, cssWithClass, StyleSheet, color, spacing, transition, fontFamily, font,
} from 'src/styles/theme';
import { pure } from 'recompose';
import Measure from 'react-measure';
import Expandable from 'src/components/basic/Expandable';
import NavigationExpandLess from 'src/components/svg/material/navigation/expand-less';
import NavigationExpandMore from 'src/components/svg/material/navigation/expand-more';

const styles = StyleSheet.create({
  TogglableContent: {
  },
  expandableFooter: {
    width: '100%',
    minHeight: 40,
  },
});

// TODO[Audrey]: figure out a way to locate the component
/**
 * A Togglable container that is based on expandable
 * Pass expandableProps to further customize the look and behavior
 */
class TogglableContent extends Component {
  static propTypes = {
    children: PropTypes.node,
    expandableProps: PropTypes.object,
  }

  static defaultProps = {
    expandableProps: {},
  }

  constructor(props, context) {
    super(props, context);
    // Make sure to overwrite below setting through expandableProps
    // if you wish to customize the component more
    this._defaultExpandableProps = {
      hideBorder: true,
      hideArrow: true,
      hideHeader: true,
      name: 'TogglableContent',
      isOpened: false,
      isThemeDark: false,
      isFullBleed: true,
    };

    this._defaultContentHeight = props.expandableProps.defaultContentHeight || 64;

    this.state = {
      isOpened: !!props.expandableProps.isOpened,
      // Initialize contentContainerHeight with defaultContentHeight
      contentContainerHeight: this._defaultContentHeight,
    };
  }

  onToggle = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const {
      children, expandableProps,
    } = this.props;
    const { isOpened, contentContainerHeight } = this.state;
    const isThemeDark = expandableProps.isThemeDark;
    // Only show footer when there is more content to display
    const showFooter = contentContainerHeight > this._defaultContentHeight;

    return (
      <Expandable
        {...this._defaultExpandableProps}
        {...expandableProps}
        defaultContentHeight={this._defaultContentHeight}
        onToggle={this.onToggle}
        footer={showFooter && (
          <div {...cssWithClass('horizontal-box align-items-vertical-center', styles.expandableFooter)}>
            <span>{isOpened ? 'Less' : 'More'}</span>
            {isOpened && <NavigationExpandLess isThemeDark={isThemeDark} />}
            {!isOpened && <NavigationExpandMore isThemeDark={isThemeDark} />}
          </div>
        )}
      >
        <Measure onMeasure={({height}) => this.setState({contentContainerHeight: height})}>
          <div>
            {children}
          </div>
        </Measure>
      </Expandable>
    );
  }
}

module.exports = pure(TogglableContent);
