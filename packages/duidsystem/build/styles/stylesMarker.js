"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassesNames = exports.getStyles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _styles = require("@material-ui/styles");

var getStyles = function getStyles(defaulStyle, Customstyles, classes) {
  if (classes === undefined && Customstyles === undefined) {
    return (0, _styles.makeStyles)({})();
  }

  if (classes !== undefined && Customstyles === undefined) {
    var _style = stylesFilter(defaulStyle, classes);

    return (0, _styles.makeStyles)(_style)();
  }

  var style = stylesFilter(defaulStyle, classes);
  var CustomstyleFilted = stylesFilter(Customstyles, classes);

  for (var _i = 0, _Object$entries = Object.entries(CustomstyleFilted); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    style[key] = (0, _extends2["default"])({}, style[key], value);
  }

  return (0, _styles.makeStyles)(style)();
};

exports.getStyles = getStyles;

var getClassesNames = function getClassesNames(classes) {
  var names = Object.values(classes).toString();
  return names.replace(",", " ");
};

exports.getClassesNames = getClassesNames;

var stylesFilter = function stylesFilter(stylesToFilter, classes) {
  var filtered = Object.keys(stylesToFilter).filter(function (key) {
    return classes.includes(key);
  }).reduce(function (obj, key) {
    obj[key] = stylesToFilter[key];
    return obj;
  }, {});
  return filtered;
};