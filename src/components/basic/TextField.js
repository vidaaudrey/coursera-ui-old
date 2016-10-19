import React, {PropTypes} from 'react';
import { css, cssWithClass, withStyles} from 'src';
import {getMiddleValueFromArray} from '../../utils/common';

const TextField = ({
  styles,
  style,
  htmlAttributes = {},
  fieldName,
  className,
  isTouched = false,
  isDirty = false,
  extendedInfoHeight = 24,
  validationResult = {},
  defaultValue = '',
  type = 'text',
  placeholder = 'null',
  size = 32,
  labelText,
  hideLabelText,
  helpMsg,
  successMsg,
  minInputSize = 10,
  maxInputSize = 76,
  ...props
}) => {
  const dynamicStyles = getStyles({size});
  const mergedStyles = {...dynamicStyles.TextField, ...style};

  let sizeLocal = size;
  if (!size) {
    const fieldValueLen = (defaultValue && defaultValue.length) || 100;
    sizeLocal = getMiddleValueFromArray([fieldValueLen, minInputSize, maxInputSize]);
  }
  const errorMsg = validationResult && validationResult[fieldName];
  const feedbackMsg = errorMsg || (!errorMsg && successMsg);
  const labelClassName = classNames({'label-text': !hideLabelText, 'sr-only': hideLabelText});
  const containerClass = classNames('rc-TextInput form-group', className, {
    'has-danger': !!errorMsg && isTouched,
    'has-success': (!errorMsg && isTouched) || (!errorMsg && isDirty),
  });
  const inputClass = classNames(htmlAttributes.className || 'form-control');
  const labelTextLocal = labelText || fieldName;

  return (
    <div
      {...htmlAttributes}

      className={containerClass} style={{...style, marginBottom: extendedInfoHeight}} >
      <label
        htmlFor={labelTextLocal}
        className={labelClassName}
        style={{display: hideLabelText ? 'none' : 'block'}}
      >
        {labelTextLocal}
      </label>
      <input
        {...htmlAttributes}
        size={sizeLocal}
        className={inputClass}
      />
      <div className="vertical-box extended-info-container">
        {isTouched && isDirty && feedbackMsg && <div className="form-control-feedback1">{feedbackMsg}</div>}
        {helpMsg && <small className="form-text text-muted">{helpMsg}</small>}
      </div>
    </div>
  );

};

// Explicity declare the default props for documentation purpose,
// as we only hoist a limit set of statics
TextField.defaultProps = {
  style: {},
  htmlAttributes: {},
};

TextField.propTypes = {
  // Static styles
  styles: PropTypes.object,

  // Override the inline-styles of the root element
  style: PropTypes.object,

  htmlAttributes: PropTypes.object,
  // TODO:

};

// Dynamic styles
function getStyles({size}) {
  return {
    TextField: {
    }
  }
}

export default withStyles(({color, transition, button}) => ({
  TextField: {
    transition: transition.easeOut(),
    userSelect: 'none',
    position: 'relative',
  },
  input: {
    display: 'inline-block',
  },
}))(TextField);
