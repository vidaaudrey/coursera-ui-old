/* eslint-disable no-use-before-define, quote-props, react/forbid-prop-types, jsx-a11y/no-static-element-interactions*/
import React, { PropTypes, Component } from 'react';
import {
  css, StyleSheet, color, spacing, transition, font
} from 'src/styles/theme';

import Measure from 'react-measure';
import NavigationExpandLess from 'src/components/svg/material/navigation/expand-less';
import NavigationExpandMore from 'src/components/svg/material/navigation/expand-more';

const CONFIG = {
  duration: 0.4,
};

 /**
  * A highly customizable Expandable container that accepts header node and children
  * Useful for creating simple expandable/collapsable components or accordions
  * If you know the content height, pass the fixedContentHeight to increas performance
  * Otherwise we'll measure the children's content height and use it to animiate
  */
class Expandable extends Component {
  static propTypes = {
    htmlAttributes: PropTypes.object,
    // Override the inline-styles of the root element.
    style: PropTypes.object,
    isThemeDark: PropTypes.bool,
    // click event
    onToggle: PropTypes.func,
    header: PropTypes.node,
    isOpened: React.PropTypes.bool,
    hideArrow: React.PropTypes.bool,
    hideBorder: React.PropTypes.bool,
    // If provided, we'll not dinamically calculate main content container height
    fixedContentHeight: PropTypes.number,
    // userful for rending accordions
    hideBorderBottom: React.PropTypes.bool,
    children: React.PropTypes.node,
    // Wheter to put padding on header and content body
    isFullBleed: PropTypes.bool,
  }

  static defaultProps = {
    htmlAttributes: {},
    style: {},
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpened: !!props.isOpened,
      contentContainerHeight: -1,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('isOpened' in nextProps && nextProps.isOpened !== this.props.isOpened) {
      this.setState({ isOpened: nextProps.isOpened });
    }
  }

  onToggle = () => {
    const isOpened = !this.state.isOpened;
    this.setState({ isOpened });
    if (this.props.onToggle) {
      this.props.onToggle(isOpened);
    }
  }

  render() {
    const {
      children,
      fixedContentHeight,
      header,
      hideArrow,
      hideBorder,
      hideBorderBottom,
      htmlAttributes,
      isFullBleed,
      isThemeDark,
      style,
    } = this.props;
    const {
      isOpened,
      contentContainerHeight,
    } = this.state;

    return (
      <div
        {...htmlAttributes}
        {...css(
          styles.Expandable,
          styles[`content${isThemeDark ? 'ThemeDark' : ''}`],
          !hideBorder && styles[`borderAll${isThemeDark ? 'ThemeDark' : ''}`],
          hideBorderBottom && styles.hideBorderBottom,
          isFullBleed && styles.fullBleedContainer
        )}
        style={style}
      >
        <div
          {...css(
            styles.header,
          )}
          onClick={this.onToggle}
        >
          {header}
          {!hideArrow &&
            <div {...css(styles.arrowContainer)}>
              {isOpened && <NavigationExpandLess isThemeDark={isThemeDark} />}
              {!isOpened && <NavigationExpandMore isThemeDark={isThemeDark} />}
            </div>
          }
        </div>
        {fixedContentHeight &&
          <div
            {...css(styles.transitionContainer)}
            style={{height: isOpened ? fixedContentHeight : 0 }}
          >
            {children}
          </div>
        }
        {!fixedContentHeight &&
          <div
            {...css(
              styles.transitionContainer,
            )}
            style={{height: isOpened ? contentContainerHeight : 0 }}
          >
            <Measure
              onMeasure={({height}) => this.setState({contentContainerHeight: height})}
            >
              <div>
                {children}
              </div>
            </Measure>
          </div>
        }

      </div>
    );
  }
}


module.exports = Expandable;

const styles = StyleSheet.create({
  Expandable: {
    position: 'relative',
    width: '100%',
    minHeight: 48,
    transition: transition.easeOut(),
    userSelect: 'none',
    padding: '8px 24px',
  },
  fullBleedContainer: {
    padding: 0,
  },
  content: {
    color: color.primaryText,
  },
  contentThemeDark: {
    color: color.primaryTextThemeDark,
  },
  borderAll: {
    border: `1px solid ${color.divider}`,
  },
  borderAllThemeDark: {
    border: `1px solid ${color.dividerThemeDark}`,
  },
  hideBorderBottom: {
    borderBottom: 'none',
  },
  borderBottomThemeDark: {
    borderBottom: `1px solid ${color.dividerThemeDark}`,
  },
  header: {
    cursor: 'pointer',
    minHeight: 24,
    marginBottom: spacing.sm,
    width: '100%',
    lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  arrowContainer: {
    position: 'absolute',
    top: 12,
    right: 16,
  },
  transitionContainer: {
    overflow: 'hidden',
    transition: `height ${CONFIG.duration}s ${transition.easeOutFunction}`,
  },
});
