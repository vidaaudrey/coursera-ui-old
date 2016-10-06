const React = require('react');
const classNames = require('classnames');

require('./__styles__/TextInput.styl');

/**
 * Get the middle value of an array, if sortFn is specified, use sortFn
 * With even number of elements, return the lower index
 * @param  {array} array
 * @param  {function}  sortFn
 * @return {any}
 */
const getMiddleValueFromArray = (array, sortFn = (a, b) => a > b) => {
  if (Array.isArray(array)) {
    if (array.length === 1) return array[0];
    return array.sort(sortFn)[Math.ceil(array.length / 2) - 1];
  }
  return undefined;
};

const TextInput = ({
  fieldName,
  className,
  isTouched = false,
  isDirty = false,
  extendedInfoHeight = 24,
  validationResult = {},
  htmlAttributes = {
    type: 'text',
    placeholder: null,
    size: 32,
    defaultValue: '',
    className: 'form-control'
  },
  labelText,
  hideLabelText,
  helpMsg,
  successMsg,
  minInputSize = 20,
  maxInputSize = 76,
}) => {
  const {size, defaultValue} = htmlAttributes;
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
    'has-success': !errorMsg && isDirty,
  });
  const inputClass = classNames(htmlAttributes.className || 'form-control');
  const labelTextLocal = labelText || fieldName;

  return (
    <div className={containerClass} style={{marginBottom: extendedInfoHeight}}>
      <label htmlFor={labelTextLocal} className={labelClassName}>{labelTextLocal}</label>
      <input
        {...htmlAttributes}
        size={sizeLocal}
        className={inputClass}
      />
      <div className="vertical-box extended-info-container">
        {isTouched && isDirty && feedbackMsg && <div className="form-control-feedback1 label-text">{feedbackMsg}</div>}
        {helpMsg && <small className="form-text text-muted">{helpMsg}</small>}
      </div>
    </div>
  );
}

TextInput.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  // Add htmlAttributes in order to be flexible and explicit on what additional attributes
  // should go to the input element, e.g. aria, tracking tags, selenium attributes. It greatly simplify
  // the final rendering code (as we dont't have to repeat `placeholder={placeholder}, type={type}`...)
  // Don't pass in value, as we are adapting the controlled pattern (defaultValue and value can't be present at the same time)
  htmlAttributes: React.PropTypes.object,
  validationResult: React.PropTypes.object,
  minInputSize: React.PropTypes.number,
  maxInputSize: React.PropTypes.number,
  extendedInfoHeight: React.PropTypes.number,
  helpText: React.PropTypes.string,
  // Sometimes the label only serve accessibility purpose, if hideLabelText is true, we'll use sr-only
  // Default to fieldName if labelText is not provided
  labelText: React.PropTypes.string,
  hideLabelText: React.PropTypes.bool,
  // can still use error if no validator is providated
  errorMsg: React.PropTypes.string,
  isTouched: React.PropTypes.bool,
  isDirty: React.PropTypes.bool,
  className: React.PropTypes.string,
  helpMsg: React.PropTypes.string,
  // A big validation result, up to the component to check if it applies to itself
  // Format: {email: 'Required', name: 'Must be at least 3 characters'}
  // optioanlly show some success indications
  successMsg: React.PropTypes.string,
};

export default TextInput;
