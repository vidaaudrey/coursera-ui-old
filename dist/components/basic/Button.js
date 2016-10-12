Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10
};

var Button = function Button(_ref) {
  var children = _ref.children;
  var onClick = _ref.onClick;
  return _react2['default'].createElement(
    'button',
    {
      style: buttonStyles,
      onClick: onClick
    },
    children
  );
};

Button.propTypes = {
  children: _react2['default'].PropTypes.string.isRequired,
  onClick: _react2['default'].PropTypes.func
};

exports['default'] = Button;