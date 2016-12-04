/* eslint-disable no-use-before-define, quote-props, react/forbid-prop-types */
import React, { PropTypes, Component } from 'react';
import {css, StyleSheet, color, spacing, transition} from 'src/styles/theme';

import Button from 'src/components/basic/Button';
import { pure } from 'recompose';

const _t = c => c;
/**
 * Work in progress
 */
class Toggle extends Component {
  static propTypes = {
    isOn: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    // Can use to letters inside the avatar.
    children: PropTypes.node,

    htmlAttributes: PropTypes.object,
    // Whether button has dark bg parent element.
    isThemeDark: PropTypes.bool,
    // Override the inline-styles of the root element.
    style: PropTypes.object,

    label: PropTypes.string,
    onLabel: PropTypes.string,
    offLabel: PropTypes.string,

    disabled: PropTypes.bool,
  }

  static defaultProps = {
    htmlAttributes: {},
    style: {},
    onLabel: _t('On'),
    offLabel: _t('Off'),
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOn: props.isOn || false,
    };
  }

  componentWillReceiveProps({ isOn }) {
    if (typeof isOn !== 'undefined' && isOn !== this.props.isOn) {
      this.setState({ isOn });
    }
  }

  onClick = () => {
    const isOn = !this.state.isOn;
    this.setState({ isOn });
    this.props.onToggle(isOn);
  }

  render() {
    const { onLabel, offLabel, label, children, style } = this.props;
    const { isOn } = this.state;

    return (
      <Button
        type="noStyle"
        size="sm"
        onClick={this.onClick}
        style={style}
        label={label || (isOn ? onLabel : offLabel)}
      >
        {children}
      </Button>
    );
  }
}


module.exports = pure(Toggle);

const styles = StyleSheet.create({
  Toggle: {
    transition: transition.easeOut(),
    userSelect: 'none',
    position: 'relative',
    textAlign: 'center',
  }
});
