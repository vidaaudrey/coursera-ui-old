import React, {PropTypes} from 'react';
import {copyToClipboard} from 'src';
import IconCell from './IconCell';
const _ = require('underscore');

const IconCellWithCopy = copyToClipboard(IconCell);

function IconList({title = 'Coursera Icons', iconList = [], handleCopied, color, size}) {
  return (
    <div className="row m-b-3">
      <div className="col-xs-12">
        <h3>{title}</h3>
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
  title: PropTypes.string.isRequired,
  iconList: PropTypes.object.isRequired,
  handleCopied: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default IconList;
