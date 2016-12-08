/* eslint-disable no-use-before-define */
/* eslint-disable no-use-before-define, react/forbid-prop-types */
import React, { PropTypes } from 'react';
import { css, StyleSheet, color } from 'src/styles/theme';

const _t = c => c;
const DEFAULT_ERROR_MSG = _t('Error, please try again later');

/**
 * A generic error message display that accepts optional children
 * Useful for displaying simple api error msg
 * NOTE: It's a work in progress, may be replaced by Notification soon
 */
const ErrorMessage = ({
  style = {},
  htmlAttributes = {},
  children,
  tag: Tag,
  defaultErrorMsg,
  error,
  ...rest,
}) => {
  let errorMsg = null;
  if (error) {
    errorMsg = error || error.msg || error.message || defaultErrorMsg || DEFAULT_ERROR_MSG;
  }
  return (
    <Tag
      {...rest}
      {...htmlAttributes}
      {...css(styles.ErrorMessage)}
      style={style}
    >
      {errorMsg}
      {children}
    </Tag>
  );
};


ErrorMessage.propTypes = {
  // Override the inline-styles of the root element
  style: PropTypes.object,

  // Attributes overwrite.
  htmlAttributes: PropTypes.object,

  // Allow rendering of different tags, e.g. 'a', 'div', 'p', 'h1'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  // The actual error
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      msg: PropTypes.string, // preferred error format
      message: PropTypes.string,
    }),
  ]),
  defaultErrorMsg: PropTypes.string,
  // Option content to display after the error msg.
  children: PropTypes.node,
};

// Explicity declare the default props for documentation purpose,
ErrorMessage.defaultProps = {
  style: {},
  htmlAttributes: {},
  tag: 'p',
};


module.exports = ErrorMessage;

const styles = StyleSheet.create({
  ErrorMessage: {
    color: color.danger,
  },
});
