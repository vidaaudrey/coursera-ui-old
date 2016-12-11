/* eslint-disable no-use-before-define, quote-props, react/forbid-prop-types, jsx-a11y/no-static-element-interactions*/
import React, { PropTypes, Component } from 'react';
import {css, StyleSheet, color, spacing, transition} from 'src/styles/theme';
import { darken } from 'src/utils/colorUtils';
import { pointerCoord } from 'src/utils/domUtils';
import { pure } from 'recompose';

const _t = c => c;

const X = () =>
  <svg width="10" height="10" viewBox="0 0 10 10">
    <title>
      switch-x
    </title>
    <path d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12" fill="#fff" fillRule="evenodd" />
  </svg>;

const Check = () =>
  <svg width="14" height="11" viewBox="0 0 14 11">
    <title>
      switch-check
    </title>
    <path d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0" fill="#fff" fillRule="evenodd" />
  </svg>;

/**
 * Work in progress
 */
class Toggle extends Component {
  static propTypes = {
    // Determine whether toggle is on by default
    checked: PropTypes.bool,
    // Callback when toggle state changes
    onToggle: PropTypes.func,

    // Can render label or other elements as children
    children: PropTypes.node,

    htmlAttributes: PropTypes.object,
    inputHtmlAttributes: PropTypes.object,
    // Whether button has dark bg parent element.
    isThemeDark: PropTypes.bool,
    // Override the inline-styles of the root element.
    style: PropTypes.object,

    label: PropTypes.string,
    onLabel: PropTypes.string,
    offLabel: PropTypes.string,
    isLabelOnLeft: PropTypes.bool,

    defaultChecked: PropTypes.bool,
    icons: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        checked: PropTypes.node,
        unchecked: PropTypes.node,
      }),
    ]),
    // Will disable the toggle is true
    disabled: PropTypes.bool,
    // The value of the name attribute of the wrapped <input> element
    name: PropTypes.string,
    // The value of the value attribute of the wrapped <input> element
    value: PropTypes.string,
    //The value of the aria-labelledby attribute of the wrapped <input> element
    'aria-labelledby': PropTypes.string,
    'aria-label': PropTypes.string,
  }

  static defaultProps = {
    htmlAttributes: {},
    style: {},
    onLabel: _t('On'),
    offLabel: _t('Off'),
    icons: {
      checked: <Check />,
      unchecked: <X />,
    },
  }

  constructor(props, context) {
    super(props, context);
    this.previouslyChecked = props.checked || false;
    this.state = {
      checked: this.previouslyChecked,
      hasFocus: false,
    };
  }

  componentWillReceiveProps({ checked }) {
    if (typeof checked !== 'undefined' && checked !== this.props.checked) {
      this.setState({ checked });
    }
  }

  onFocus = () => {
    this.setState({ hasFocus: true });
  }

  onBlur = () => {
    this.setState({ hasFocus: false });
  }

  onClick = (e) => {
    const checkbox = this.input;
    if (e.target !== checkbox && !this.moved) {
      this.previouslyChecked = checkbox.checked;
      e.preventDefault();
      checkbox.focus();
      checkbox.click();
      return;
    }
    const checked = checkbox.checked;
    this.setState({ checked });
    if (this.props.onToggle) {
      this.props.onToggle(checked);
    }
  }

  onTouchStart = (e) => {
    this.startX = pointerCoord(e).x;
    this.activated = true;
  }

  onTouchMove = (e) => {
    if (!this.activated) return;
    this.moved = true;

    if (this.startX) {
      const currentX = pointerCoord(e).x;
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({ checked: false });
        this.startX = currentX;
        this.activated = true;
      } else if (currentX - 15 > this.startX) {
        this.setState({ checked: true });
        this.startX = currentX;
        this.activated = (currentX < this.startX + 5);
      }
    }
  }

  onTouchEnd = (e) => {
    if (!this.moved) return;
    const checkbox = this.input;
    e.preventDefault();

    if (this.startX) {
      const endX = pointerCoord(e).x;
      if (this.previouslyChecked === true && this.startX + 4 > endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: false });
          this.previouslyChecked = this.state.checked;
          checkbox.click();
        }
      } else if (this.startX - 4 < endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: true });
          this.previouslyChecked = this.state.checked;
          checkbox.click();
        }
      }

      this.activated = false;
      this.startX = null;
      this.moved = false;
    }
  }

  getIcon = (type) => {
    const { icons } = this.props;
    if (!icons) {
      return null;
    }
    return icons[type] === undefined
      ? Toggle.defaultProps.icons[type]
      : icons[type];
  }

  render() {
    const {
      onLabel, disabled, offLabel, label,
      children, style, icons, htmlAttributes, inputHtmlAttributes,
    } = this.props;
    const { checked, hasFocus } = this.state;

    return (
      <div
        {...htmlAttributes}
        {...css(
          styles.Toggle,
          checked && styles.checked,
          hasFocus && styles.hasFocus,
          disabled && styles.disabled,
        )}
        style={style}
        onClick={this.onClick}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        <div
          {...css(
            styles.track,
            checked && !disabled && styles.trackChecked,
            !checked && !disabled && styles.trackUnchecked,
          )}
        >
          <div
            {...css(
              styles.trackCheck,
              checked && !disabled && styles.checkedTrackCheck,
            )}
          >
            {this.getIcon('checked')}
          </div>
          <div
            {...css(
              styles.trackX,
              checked && !disabled && styles.checkedTrackX,
            )}
          >
            {this.getIcon('unchecked')}
          </div>
        </div>
        <div
          {...css(
            styles.thumb,
            checked && styles.checkedThumb,
            hasFocus && !disabled && styles.focusedThumb,
            !disabled && styles.activeThumb,
          )}
        />
        <input
          {...inputHtmlAttributes}
          ref={ref => (this.input = ref)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...css(styles.srOnly)}
          type="checkbox"
        />
      </div>
    );
  }
}


module.exports = pure(Toggle);

const styles = StyleSheet.create({
  Toggle: {
    transition: transition.easeOut(),
    userSelect: 'none',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    margin: 0,
    padding: 0,
    tapHighlightColor: 'transparent',
  },
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
    transition: 'opacity 0.25s',
  },
  track: {
    width: 50,
    height: 24,
    padding: 0,
    borderRadius: 30,
    backgroundColor: color.divider,
    transition: 'all 0.2s ease',
  },
  trackChecked: {
    backgroundColor: color.success,
    ':hover': {
      backgroundColor: darken(color.success, 0.2),
    },
  },
  trackUnchecked: {
    backgroundColor: color.gray,
    ':hover': {
      backgroundColor: darken(color.gray, 0.2),
    },
  },
  trackCheck: {
    position: 'absolute',
    width: 14,
    height: 10,
    top: 0,
    bottom: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    lineHeight: 0,
    left: 8,
    opacity: 0,
    transition: 'opacity 0.25s ease',
  },
  checkedTrackCheck: {
    opacity: 1,
    transition: 'opacity 0.25s ease',
  },
  trackX: {
    position: 'absolute',
    width: 10,
    height: 10,
    top: 0,
    bottom: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    lineHeight: 0,
    right: 10,
    opacity: 1,
    transition: 'opacity 0.25s ease',
  },
  checkedTrackX: {
    opacity: 0,
  },
  thumb: {
    position: 'absolute',
    top: 1,
    left: 1,
    width: 22,
    height: 22,
    border: `1px solid ${color.divider}`,
    borderRadius: '50%',
    backgroundColor: color.bgGray,
    boxSizing: 'border-box',
    transition: 'all 0.25s ease',
  },
  checkedThumb: {
    left: 27,
    borderColor: color.success,
  },
  focusedThumb: {
    boxShadow: `0px 0px 2px 3px ${color.primary}`,
  },
  activeThumb: {
    ':active': {
      boxShadow: `0px 0px 5px 5px ${color.primary}`,
    },
  },
  srOnly: {
    border: 0,
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    clip: 'rect(0 0 0 0)',
    overflow: 'hidden',
    position: 'absolute',
  },
});
