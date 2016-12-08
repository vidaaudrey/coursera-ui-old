import React from 'react';
const {
  number, string, shape, objectOf, bool, arrayOf,
} = React.PropTypes;

/**
 * Commonly used Proptypes
 */

export const domainPropType = shape({
  id: string.isRequired,
  name: string.isRequired,
  subdomainIds: arrayOf(string.isRequired),
});

export const subdomainPropType = shape({
  id: string.isRequired,
  name: string.isRequired,
  domainId: string,
});
