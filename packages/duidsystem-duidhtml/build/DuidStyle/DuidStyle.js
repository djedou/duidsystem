"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _appendStyle = _interopRequireDefault(require("./appendStyle"));

var _getStyleId = _interopRequireDefault(require("./getStyleId"));

var _removeStyle = _interopRequireDefault(require("./removeStyle"));

var DuidStyle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(DuidStyle, _Component);

  function DuidStyle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DuidStyle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DuidStyle).call(this, props));
    _this.state = {
      styleId: null
    };
    return _this;
  }

  (0, _createClass2["default"])(DuidStyle, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState(function (state, props) {
        return {
          styleId: (0, _getStyleId["default"])(props.children)
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _appendStyle["default"])(this.state.styleId, this.props.children);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _removeStyle["default"])(this.state.styleId);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
  return DuidStyle;
}(_react.Component);

var _default = DuidStyle;
exports["default"] = _default;