import React, { PropTypes } from 'react';

const PartnerName = ({ partner }) => {
  if (!partner || !partner.name) {
    return null;
  }
  return (
    <span className="PartnerName text-muted font-sm">
      {partner.name}
    </span>
  );
};

PartnerName.propTypes = {
  partner: PropTypes.shape({
    name: PropTypes.string,
  }),
};

module.exports = PartnerName;
