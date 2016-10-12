var React = require('react');
var Uri = require('jsuri');
var _t = require('i18n!nls/admin-dashboard-programs');

var _require = require('react-intl');

var FormattedMessage = _require.FormattedMessage;

var _ = require('underscore');

/* eslint-disable max-len, consistent-return */
var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0 /* first error */];
  };
};

var isEmail = function isEmail(value) {
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return _t('Invalid email address');
  }
};

var isUrl = function isUrl(value) {
  if (!isEmpty(value) && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i.test(value)) {
    return _t('Invalid url');
  }
};

// Validate if a url starts with top level coursera domain
var isCourseraUrl = function isCourseraUrl(value) {
  if (!isEmpty(value) && !/^https?:\/\/(www.)?coursera.org\/[a-z0-9-\/]+$/i.test(value)) {
    return _t('Invalid url, valid example: https://www.coursera.org/your-slug-here');
  }
};

var isSlug = function isSlug(value) {
  if (!isEmpty(value) && !/^[a-z0-9-]+$/i.test(value)) {
    return _t('Invalid slug');
  }
};

// Input: http://www.abc.com/slug-name[/more-slug-names]
// If input is not url or only have top level, will return error
var isValidCourseraUrlWithValidSlug = function isValidCourseraUrlWithValidSlug(value) {
  if (isCourseraUrl(value)) {
    return isCourseraUrl(value);
  }
  var uri = new Uri(value);
  if (uri.path() === '' || uri.path() === '/') {
    return _t('No url path provided');
  }
  var slugs = uri.path().substr(1).split('/');
  // check if each slug is valid
  slugs.forEach(function (item) {
    if (isSlug(item)) {
      return isSlug(item);
    }
  });
};

var isRequired = function isRequired(value) {
  if (isEmpty(value)) {
    return _t('Required');
  }
};

var minLength = function minLength(min) {
  return function (value) {
    if (!isEmpty(value) && value.length < min) {
      return React.createElement(FormattedMessage, {
        message: _t('Must be at least {min} characters'),
        min: min
      });
    }
  };
};

var maxLength = function maxLength(max) {
  return function (value) {
    if (!isEmpty(value) && value.length > max) {
      return React.createElement(FormattedMessage, {
        message: _t('Must be no more than {max} characters'),
        max: max
      });
    }
  };
};

var isInteger = function isInteger(value) {
  if (!Number.isInteger(Number(value))) {
    return _t('Must be an integer');
  }
};

var isOneOf = function isOneOf(enumeration) {
  return function (value) {
    if (_(enumeration).contains(value)) {
      var options = enumeration.join(', ');
      return React.createElement(FormattedMessage, {
        message: _t('Must be one of: {options}'),
        options: options
      });
    }
  };
};

var isMatch = function isMatch(field) {
  return function (value, data) {
    if (data && value !== data[field]) {
      return _t('Do not match');
    }
  };
};

var createValidator = function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    Object.keys(rules).forEach(function (key) {
      var rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      var error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
};

module.exports = {
  isEmail: isEmail,
  isUrl: isUrl,
  isCourseraUrl: isCourseraUrl,
  isSlug: isSlug,
  isValidCourseraUrlWithValidSlug: isValidCourseraUrlWithValidSlug,
  isRequired: isRequired,
  minLength: minLength,
  maxLength: maxLength,
  isInteger: isInteger,
  isOneOf: isOneOf,
  isMatch: isMatch,
  createValidator: createValidator
};