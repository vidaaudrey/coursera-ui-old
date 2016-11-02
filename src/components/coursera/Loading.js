import React from 'react';

const _t = s => s;

const Loading = ({ loadingMessage = _t('Loading') }) => (
  <div className="Loading">
    <h1>{loadingMessage}</h1>
  </div>
);


Loading.propTypes = {
  loadingMessage: React.PropTypes.string,
};

module.exports = Loading;
