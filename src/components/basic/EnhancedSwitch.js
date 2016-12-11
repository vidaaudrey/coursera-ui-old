/* eslint-disable no-use-before-define, quote-props, react/forbid-prop-types */
import React, { PropTypes, Component } from 'react';
import {css, StyleSheet, color, spacing, transition} from 'src/styles/theme';

import { pure } from 'recompose';
import Paper from 'src/components/basic/Paper';
const _t = c => c;

import EventListener from 'react-event-listener';
import keycode from 'keycode';
// import transitions from '../styles/transitions';
// import FocusRipple from './FocusRipple';
// import TouchRipple from './TouchRipple';
// import Paper from './../Paper';

/**
 * Work in progress
 */
class EnhancedSwitch extends Component {
  static propTypes = {
    // Determine whether toggle is on by default
    checked: PropTypes.bool,
    // Callback when toggle state changes
    onSwitch: PropTypes.func,
    // Will disable the toggle is true
    disabled: PropTypes.bool,
    // Can use to letters inside the avatar.
    children: PropTypes.node,

    htmlAttributes: PropTypes.object,
    // Whether button has dark bg parent element.
    isThemeDark: PropTypes.bool,
    // Override the inline-styles of the root element.
    style: PropTypes.object,

    label: PropTypes.node,
    onLabel: PropTypes.node,
    offLabel: PropTypes.node,
    isLabelOnLeft: PropTypes.bool,

    disableFocusRipple: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    onParentShouldUpdate: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onTouchStart: PropTypes.func,
    // switchElement: PropTypes.element.isRequired,
    value: PropTypes.any,
    inputType: PropTypes.string.isRequired,
  }

  static defaultProps = {
    htmlAttributes: {},
    style: {},
    onLabel: _t('On'),
    offLabel: _t('Off'),
    inputType: 'check-box',
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      checked: props.checked || false,
      isKeyboardFocused: false,
    };
  }

  componentWillReceiveProps({ checked }) {
    if (typeof checked !== 'undefined' && checked !== this.props.checked) {
      this.setState({ checked });
    }
  }

  onClick = () => {
    const checked = !this.state.checked;
    this.setState({ checked });
    if (this.props.onSwitch) {
      this.props.onSwitch(checked);
    }
  }
  handleChange = (event) => {
    this.tabPressed = false;
    this.setState({
      isKeyboardFocused: false,
    });

    const isInputChecked = this.checkRef.checked;

    if (!this.props.hasOwnProperty('checked') && this.props.onParentShouldUpdate) {
      this.props.onParentShouldUpdate(isInputChecked);
    }

    if (this.props.onSwitch) {
      this.props.onSwitch(event, isInputChecked);
    }
  };

  // Checkbox inputs only use SPACE to change their state. Using ENTER will
  // update the ui but not the input.
  handleKeyDown = (event) => {
    const code = keycode(event);

    if (code === 'tab') {
      this.tabPressed = true;
    }
    if (this.state.isKeyboardFocused && code === 'space') {
      this.handleChange(event);
    }
  };

  handleKeyUp = (event) => {
    if (this.state.isKeyboardFocused && keycode(event) === 'space') {
      this.handleChange(event);
    }
  };

  /**
   * Because both the ripples and the checkbox input cannot share pointer
   * events, the checkbox input takes control of pointer events and calls
   * ripple animations manually.
   */
  handleMouseDown = (event) => {
    // only listen to left clicks
    if (event.button === 0) {
      this.touchRippleRef.start(event);
    }
  };

  handleMouseUp = () => {
    this.touchRippleRef.end();
  };

  handleMouseLeave = () => {
    this.touchRippleRef.end();
  };

  handleTouchStart = (event) => {
    this.touchRippleRef.start(event);
  };

  handleTouchEnd = () => {
    this.touchRippleRef.end();
  };

  handleBlur = (event) => {
    this.setState({
      isKeyboardFocused: false,
    });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocus = (event) => {
    // setTimeout is needed becuase the focus event fires first
    // Wait so that we can capture if this was a keyboard focus
    // or touch focus
    setTimeout(() => {
      if (this.tabPressed) {
        this.setState({
          isKeyboardFocused: true,
        });
      }
    }, 150);

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };


  render() {
    const { onLabel, offLabel, label, children, style, isLabelOnLeft,
      inputType, value, disabled, thumbStyle, disableTouchRipple, disableFocusRipple,
      switchElement,
      ...rest,
    } = this.props;
    const { checked } = this.state;
    const labelElement = label && (
     <label style={prepareStyles(Object.assign(styles.label, labelStyle))}>
       {label}
     </label>
   );

    const showTouchRipple = !disabled && !disableTouchRipple;
    const showFocusRipple = !disabled && !disableFocusRipple;

    const touchRipple = (
      <TouchRipple
        ref={r => (this.touchRippleRef = r)}
        key="touchRipple"
        {...css(styles.ripple)}
        color={mergedRippleStyle.color}
        centerRipple
      />
    );

    const focusRipple = (
      <FocusRipple
        key="focusRipple"
        {...css(styles.ripple)}
        show={this.state.isKeyboardFocused}
      />
    );

    const ripples = [
      showTouchRipple ? touchRipple : null,
      showFocusRipple ? focusRipple : null,
    ];

    // If toggle component (indicated by whether the style includes thumb) manually lay out
    // elements in order to nest ripple elements
    const switchOrThumbElement = !thumbStyle ? (
      <div {...css(styles.wrap)}>
        {switchElement}
        {ripples}
      </div>
    ) : (
      <div {...css(styles.wrap)}>
        <div {...css(styles.track)} />
        <Paper zDepth={1} isCircle> {ripples} </Paper>
      </div>
    );


    const elementsInOrder = isLabelOnLeft ? (
       <div style={styles.controls}>
         {labelElement}
         {switchOrThumbElement}
       </div>
     ): (
     <div style={styles.controls}>
       {switchOrThumbElement}
       {labelElement}
     </div>
   );

    return (
      <div {...css(styles.EnhancedSwitch)}>
        <input
          {...rest}
          {...css(styles.input)}
          ref={r => (this.checkRef = r)}
          type={inputType}
          name={name}
          value={value}
          disabled={disabled}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onMouseUp={showTouchRipple && this.handleMouseUp}
          onMouseDown={showTouchRipple && this.handleMouseDown}
          onMouseLeave={showTouchRipple && this.handleMouseLeave}
          onTouchStart={showTouchRipple && this.handleTouchStart}
          onTouchEnd={showTouchRipple && this.handleTouchEnd}
        />
      </div>
    );
    // return (
    //   <Button
    //     type="noStyle"
    //     size="sm"
    //     onClick={this.onClick}
    //     style={style}
    //     label={label || (checked ? onLabel : offLabel)}
    //   >
    //     {children}
    //   </Button>
    // );
  }
}


module.exports = pure(EnhancedSwitch);

const styles = StyleSheet.create({
  EnhancedSwitch: {
    // cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: transition.easeOut(),
    position: 'relative',
    overflow: 'visible',
    display: 'table',
    height: 'auto',
    width: '100%',
  },
  input: {
    position: 'absolute',
    cursor: 'inherit',
    pointerEvents: 'all',
    opacity: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    left: 0,
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  controls: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  label: {
    float: 'left',
    position: 'relative',
    display: 'block',
    width: 'calc(100% - 60px)',
    lineHeight: '24px',
    // color: baseTheme.palette.textColor,
    // fontFamily: baseTheme.fontFamily,
  },
  wrap: {
    transition: transition.easeOut(),
    float: 'left',
    position: 'relative',
    display: 'block',
    flexShrink: 0,

    width: 50,
    marginRight: 0,
    marginLeft: 10,
    // width: 60 - baseTheme.spacing.desktopGutterLess,
    // marginRight: (props.labelPosition === 'right') ?
    //   baseTheme.spacing.desktopGutterLess : 0,
    // marginLeft: (props.labelPosition === 'left') ?
    //   baseTheme.spacing.desktopGutterLess : 0,
  },
  ripple: {
    // color: props.rippleColor || baseTheme.palette.primary1Color,
    color: color.primary,
    height: '200%',
    width: '200%',
    top: -12,
    left: -12,
  },
});
