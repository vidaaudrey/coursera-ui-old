/**
 * A simple wrapper around react-virtualized-select to offer consistent UI
 * Check https://github.com/bvaughn/react-virtualized-select for more details
 * Update this component if more features needs to be introduced
 */
import React, {PropTypes} from 'react';
import VirtualizedSelect from 'react-virtualized-select';

// import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

const Select = ({ options, onChange, value, ...rest}) => {
  return (
    <VirtualizedSelect
      options={options}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

Select.propTypes = {
  options: React.PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    // can be any other options as well
  }).isRequired),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,

  async: PropTypes.bool,
  listProps: PropTypes.object,
  maxHeight: PropTypes.number.isRequired,
  optionHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
  optionRenderer: PropTypes.func,
  selectComponent: PropTypes.func
};

Select.defaultProps = {
  async: false,
  maxHeight: 200,
  optionHeight: 35,
};


module.exports = Select;
// module.exports = { Select, ReactSelect };
