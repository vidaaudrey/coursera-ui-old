const React = require('react');
const _ = require('underscore');
import {copyToClipboard} from 'src';
import IconCell from './IconCell';
const IconCellWithCopy = copyToClipboard(IconCell);

function IconList({iconList, handleCopied, color, size}) {
  return (
    <div className="row">
      <div className="col-xs-12">
        <h3>Coursera Icons</h3>
        <i>Click to copy</i>
      </div>
      {_(iconList).map((item, key) => {
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
        )
      })}
    </div>
  );
}

IconList.propTypes = {
  children: React.PropTypes.node,
}

export default IconList;
