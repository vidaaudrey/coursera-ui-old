const React = require('react');

function IconCell({children, htmlAttributes = {}}) {
  return (
    <div className="col-xs-6 col-sm-3 vertical-box align-items-absolute-center p-a-1" {...htmlAttributes}>
      {children}
    </div>
  );
}

IconCell.propTypes = {
  children: React.PropTypes.node,
}

export default IconCell;
