import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from 'react';
import appendStyle from "./appendStyle";
import getStyleId from "./getStyleId";
import removeStyle from "./removeStyle";

var DuidStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(DuidStyle, _Component);

  function DuidStyle(props) {
    var _this;

    _classCallCheck(this, DuidStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DuidStyle).call(this, props));
    _this.state = {
      styleId: null
    };
    return _this;
  }

  _createClass(DuidStyle, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState(function (state, props) {
        return {
          styleId: getStyleId(props.children)
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      appendStyle(this.state.styleId, this.props.children);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      removeStyle(this.state.styleId);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null);
    }
  }]);

  return DuidStyle;
}(Component);

export default DuidStyle;