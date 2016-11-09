import React, { PropTypes } from 'react';
import withApiMockData from 'src/components/hocs/withApiMockData';
import S12nCardWithLayer from 'src/components/rich/S12nCardWithLayer';

const S12nCardListContainer = ({
  onLoadedData, shouldNotRender, ...rest
}) => {
  if (onLoadedData) {
    onLoadedData(rest.s12n);
  }
  if (shouldNotRender) {
    return null;
  }
  return <S12nCardWithLayer {...rest} />;
};

S12nCardListContainer.defaultProps = {
  start: 0,
  limit: 6,
};

S12nCardListContainer.propTypes = {
  onLoadedData: PropTypes.func,
  shouldNotRender: PropTypes.bool,
  start: PropTypes.number,
  limit: PropTypes.number,
};

module.exports = withApiMockData({
  dataType: 'S12NS',
})(S12nCardListContainer);
