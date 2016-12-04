import React, {PropTypes} from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');
import {getMiddleValueFromArray} from 'src/utils/common';

const CONFIG = {
  inputBorderWidth: 2,
  inputPaddingLeft: 4,
};

// TODO[Audrey]: still work in progress
const TextField = ({
  style,
  htmlAttributes = {
    type: 'text',
    size: 32,
    defaultValue: '',
  },
  fieldName,
  isTouched = false,
  isDirty = false,
  extendedInfoHeight = 24,
  validationResult = {},
  labelText,
  hideLabelText,
  helpMsg,
  successMsg,
  minInputSize = 10,
  maxInputSize = 76,
  isFullWidth,
}) => {
  let sizeLocal = size;
  const {defaultValue, size} = htmlAttributes;
  if (!size) {
    const fieldValueLen = (defaultValue && defaultValue.length) || 100;
    sizeLocal = getMiddleValueFromArray([fieldValueLen, minInputSize, maxInputSize]);
  }
  const errorMsg = validationResult && validationResult[fieldName];
  const feedbackMsg = errorMsg || (!errorMsg && successMsg);
  const hasDanger = !!errorMsg && isTouched;
  const hasSuccess = (!errorMsg && isTouched) || (!errorMsg && isDirty);
  const labelTextLocal = labelText || fieldName;

  return (
    <div
      {...css(styles.formGroup)}
      style={{...style, marginBottom: extendedInfoHeight}}
    >
      <label
        htmlFor={labelTextLocal}
        {...css(
          styles.labelText, hideLabelText && styles.srOnly,
          hideLabelText ? styles.displayNone : styles.displayBlock
        )}
      >
        {labelTextLocal}
      </label>
      <input
        {...htmlAttributes}
        size={sizeLocal}
        {...css(
          styles.formControl,
          hasDanger && styles.formControlHasDanger,
          hasSuccess && styles.formControlHasSuccess,
          isFullWidth && styles.w100,
        )}
      />
      <div {...cssWithClass('vertical-box', styles.extendedInfoContainer)}>
        {isTouched && isDirty && feedbackMsg &&
          <div
            {...css(
              styles.formControlFeedback,
              hasDanger && styles.dangerTextColor,
              hasSuccess && styles.successTextColor,
            )}
          >
            {feedbackMsg}
          </div>
        }
        {helpMsg &&
          <small {...css('text-muted', styles.helpText)}>{helpMsg}</small>
        }
      </div>
    </div>
  );
};

// Explicity declare the default props for documentation purpose,
// as we only hoist a limit set of statics
TextField.defaultProps = {
  style: {},
  extendedInfoHeight: 24,
  validationResult: {},
  minInputSize: 10,
  maxInputSize: 76,
  htmlAttributes: {
    type: 'text',
    size: 32,
    defaultValue: '',
  },
};

TextField.propTypes = {
  // Override the inline-styles of the root element
  style: PropTypes.object,
  fieldName: PropTypes.string.isRequired,
  htmlAttributes: PropTypes.object,
  validationResult: PropTypes.object,
  minInputSize: PropTypes.number,
  maxInputSize: PropTypes.number,
  extendedInfoHeight: PropTypes.number,
  // Sometimes the label only serve accessibility purpose, if hideLabelText is true, we'll use sr-only
  // Default to fieldName if labelText is not provided
  labelText: PropTypes.string,
  hideLabelText: PropTypes.bool,
  isTouched: PropTypes.bool,
  isDirty: PropTypes.bool,
  className: PropTypes.string,
  helpMsg: PropTypes.string,
  // A big validation result, up to the component to check if it applies to itself
  // Format: {email: 'Required', name: 'Must be at least 3 characters'}
  // optioanlly show some success indications
  successMsg: PropTypes.string,
  // whether the input box is full width
  isFullWidth: PropTypes.bool,
};


module.exports = TextField;

const styles = StyleSheet.create({
  TextField: {
    transition: transition.easeOut(),
    userSelect: 'none',
    position: 'relative',
  },
  extendedInfoContainer: {
    position: 'absolute',
    width: '100%',
    paddingRight: 16,
    minHeight: 32,
  },
  formGroup: {
    display: 'inline-block',
    margin: 0,
    padding: 0,
  },
  labelText: {
    display: 'inline-block',
    padding: 0,
    paddingLeft: CONFIG.inputBorderWidth + CONFIG.inputPaddingLeft,
  },
  formControl: {
    borderRadius: 0,
    lineHeight: '1.2rem',
    minHeight: 36,
    paddingLeft: CONFIG.inputPaddingLeft,
    border: `${CONFIG.inputBorderWidth}px solid ${color.divider}`,
    ':focus': {
      outline: 'none',
    },
  },
  formControlFeedback: {
    lineHeight: '1.1em',
    width: '100%',
    pointerEvents: 'none',
    display: 'block',
  },
  helpText: {
    display: 'block',
  },
  formControlHasDanger: {
    borderColor: color.danger,
    ':focus': {
      borderColor: color.danger,
    },
  },
  formControlHasSuccess: {
    borderColor: color.success,
    ':focus': {
      borderColor: color.success,
    },
  },
  dangerTextColor: {
    color: color.danger,
  },
  successTextColor: {
    color: color.success,
  },

  displayNone: {
    display: 'none',
  },
  displayInlineBlock: {
    display: 'inline-block',
  },
  displayBlock: {
    display: 'block',
    color: color.secondaryText,
  },
  srOnly: {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0,
    ':active': {
      position: 'static',
      width: 'auto',
      height: 'auto',
      margin: 0,
      overflow: 'visible',
      clip: 'auto',
    },
    ':focus': {
      position: 'static',
      width: 'auto',
      height: 'auto',
      margin: 0,
      overflow: 'visible',
      clip: 'auto',
    },
  },
  w100: {
    width: '100%',
  },
});
