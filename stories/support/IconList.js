import React, {PropTypes} from 'react';
import {copyToClipboard} from 'src';
import IconCell from './IconCell';
const _ = require('underscore');

const IconCellWithCopy = copyToClipboard(IconCell);

function IconList({iconList = [], handleCopied, color, size}) {
  return (
    <div className="row">
      <div className="col-xs-12">
        <h3>Coursera Icons</h3>
        <i>Click to copy</i>
      </div>
      {_(iconList).map((item) => {
        const Component = item;
        const displayName = Component.displayName;
        return (
          <IconCellWithCopy
            key={displayName}
            text={`<${displayName} size={${size}} color={"${color}"} />`}
            onCopy={handleCopied}
          >
            <Component
              size={size}
              color={color}
            />
            <small className="font-xs p-t-1">{displayName}</small>
          </IconCellWithCopy>
        );
      })}
    </div>
  );
}

IconList.propTypes = {
  iconList: PropTypes.object.isRequired,
  handleCopied: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default IconList;
