const React = require('react');
const Uri = require('jsuri');
const _t = require('i18n!nls/admin-dashboard-programs');
const {FormattedMessage} = require('react-intl');
const _ = require('underscore');

/* eslint-disable max-len, consistent-return */
const isEmpty = value => value === undefined || value === null || value === '';
const join = rules =>
  (value, data) =>
    rules.map(rule =>
        rule(value, data)).filter(error => !!error)[0/* first error */];

const isEmail = (value) => {
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return _t('Invalid email address');
  }
};

const isUrl = (value) => {
  if (!isEmpty(value) && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i.test(value)) {
    return _t('Invalid url');
  }
};

// Validate if a url starts with top level coursera domain
const isCourseraUrl = (value) => {
  if (!isEmpty(value) && !/^https?:\/\/(www.)?coursera.org\/[a-z0-9-\/]+$/i.test(value)) {
    return _t('Invalid url, valid example: https://www.coursera.org/your-slug-here');
  }
};

const isSlug = (value) => {
  if (!isEmpty(value) && !/^[a-z0-9-]+$/i.test(value)) {
    return _t('Invalid slug');
  }
};

// Input: http://www.abc.com/slug-name[/more-slug-names]
// If input is not url or only have top level, will return error
const isValidCourseraUrlWithValidSlug = (value) => {
  if (isCourseraUrl(value)) {
    return isCourseraUrl(value);
  }
  const uri = new Uri(value);
  if (uri.path() === '' || uri.path() === '/') {
    return _t('No url path provided');
  }
  const slugs = uri.path().substr(1).split('/');
  // check if each slug is valid
  slugs.forEach((item) => {
    if (isSlug(item)) {
      return isSlug(item);
    }
  });
};

const isRequired = (value) => {
  if (isEmpty(value)) {
    return _t('Required');
  }
};

const minLength = (min) => {
  return (value) => {
    if (!isEmpty(value) && value.length < min) {
      return (
        <FormattedMessage
          message={_t('Must be at least {min} characters')}
          min={min}
        />
      );
    }
  };
};

const maxLength = (max) => {
  return (value) => {
    if (!isEmpty(value) && value.length > max) {
      return (
        <FormattedMessage
          message={_t('Must be no more than {max} characters')}
          max={max}
        />
      );
    }
  };
};

const isInteger = (value) => {
  if (!Number.isInteger(Number(value))) {
    return _t('Must be an integer');
  }
};

const isOneOf = (enumeration) => {
  return (value) => {
    if (_(enumeration).contains(value)) {
      const options = enumeration.join(', ');
      return (
        <FormattedMessage
          message={_t('Must be one of: {options}')}
          options={options}
        />
      );
    }
  };
};

const isMatch = (field) => {
  return (value, data) => {
    if (data && value !== data[field]) {
      return _t('Do not match');
    }
  };
};

const createValidator = (rules) => {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
};

module.exports = {
  isEmail,
  isUrl,
  isCourseraUrl,
  isSlug,
  isValidCourseraUrlWithValidSlug,
  isRequired,
  minLength,
  maxLength,
  isInteger,
  isOneOf,
  isMatch,
  createValidator,
};
