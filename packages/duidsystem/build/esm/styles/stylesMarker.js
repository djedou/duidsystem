import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { makeStyles } from '@material-ui/styles';

var getStyles = function getStyles(defaulStyle, Customstyles, classes) {
  if (classes === undefined && Customstyles === undefined) {
    return makeStyles({})();
  }

  if (classes !== undefined && Customstyles === undefined) {
    var _style = stylesFilter(defaulStyle, classes);

    return makeStyles(_style)();
  }

  var style = stylesFilter(defaulStyle, classes);
  var CustomstyleFilted = stylesFilter(Customstyles, classes);

  for (var _i = 0, _Object$entries = Object.entries(CustomstyleFilted); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    style[key] = _extends({}, style[key], value);
  }

  return makeStyles(style)();
};

var getClassesNames = function getClassesNames(classes) {
  var names = Object.values(classes).toString();
  return names.replace(",", " ");
};

var stylesFilter = function stylesFilter(stylesToFilter, classes) {
  var filtered = Object.keys(stylesToFilter).filter(function (key) {
    return classes.includes(key);
  }).reduce(function (obj, key) {
    obj[key] = stylesToFilter[key];
    return obj;
  }, {});
  return filtered;
};

export { getStyles, getClassesNames };