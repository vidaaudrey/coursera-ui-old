/* eslint-disable no-use-before-define, quote-props, react/forbid-prop-types, jsx-a11y/no-static-element-interactions*/
import React, { PropTypes, Component } from 'react';
import {
  css, StyleSheet, color, spacing, transition, font
} from 'src/styles/theme';

import Measure from 'react-measure';
import NavigationExpandLess from 'src/components/svg/material/navigation/expand-less';
import NavigationExpandMore from 'src/components/svg/material/navigation/expand-more';

const CONFIG = {
  duration: 0.3,
};

// TODO[Audrey]: customize duration when needed

/**
 * A highly customizable Expandable container that accepts header node and children
 * Useful for creating simple expandable/collapsible components or accordions
 * If you know the content height, pass the fixedContentHeight to increas performance
 * Otherwise we'll measure the children's content height and use it to animiate
 */
class Expandable extends Component {
  static propTypes = {
    htmlAttributes: PropTypes.object,
    // Override the inline-styles of the root element.
    style: PropTypes.object,
    isThemeDark: PropTypes.bool,
    // A way to differentiate each expandable, will be passed back when onToggle is triggered
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // Click event
    onToggle: PropTypes.func,
    header: PropTypes.node,
    footer: PropTypes.node,
    isOpened: PropTypes.bool,
    hideArrow: PropTypes.bool,
    hideBorder: PropTypes.bool,
    // If provided, we'll not dinamically calculate main content container height
    fixedContentHeight: PropTypes.number,
    // Userful to show a preview of the content
    defaultContentHeight: PropTypes.number,
    // userful for rending accordions
    hideBorderBottom: PropTypes.bool,
    hideHeader: PropTypes.bool,
    children: PropTypes.node,
    // Whether to put padding on header and content body
    isFullBleed: PropTypes.bool,
  }

  static defaultProps = {
    htmlAttributes: {},
    style: {},
    defaultContentHeight: 0,
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
      this.props.onToggle(this.props.id, isOpened);
    }
  }

  render() {
    const {
      children,
      fixedContentHeight,
      header,
      hideHeader,
      footer,
      hideArrow,
      hideBorder,
      hideBorderBottom,
      htmlAttributes,
      isFullBleed,
      isThemeDark,
      style,
      defaultContentHeight,
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
        {!hideHeader &&
          <div {...css(styles.header)} onClick={this.onToggle}>
            {header}
            {!hideArrow &&
              <div {...css(styles.arrowContainer)}>
                {isOpened && <NavigationExpandLess isThemeDark={isThemeDark} />}
                {!isOpened && <NavigationExpandMore isThemeDark={isThemeDark} />}
              </div>
            }
          </div>
        }
        {fixedContentHeight &&
          <div
            {...css(styles.transitionContainer)}
            style={{height: isOpened ? fixedContentHeight : defaultContentHeight }}
          >
            {children}
          </div>
        }
        {!fixedContentHeight &&
          <div
            {...css(
              styles.transitionContainer,
            )}
            style={{height: isOpened ? contentContainerHeight : defaultContentHeight }}
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

        {footer &&
          <div {...css(styles.footer)} onClick={this.onToggle}>
            {footer}
            {!hideArrow &&
              <div {...css(styles.footerArrowContainer)}>
                {isOpened && <NavigationExpandLess isThemeDark={isThemeDark} />}
                {!isOpened && <NavigationExpandMore isThemeDark={isThemeDark} />}
              </div>
            }
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
  footer: {
    cursor: 'pointer',
    minHeight: 24,
    marginTop: spacing.sm,
    width: '100%',
    lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  footerArrowContainer: {
    position: 'absolute',
    bottom: 12,
    right: 16,
  },
  transitionContainer: {
    overflow: 'hidden',
    transition: `height ${CONFIG.duration}s ${transition.easeOutFunction}`,
  },
});
