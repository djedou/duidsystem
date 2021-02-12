import _extends from "@babel/runtime/helpers/esm/extends";
import { makeStyles } from '@material-ui/styles';

const getStyles = (defaulStyle, Customstyles, classes) => {
  if (classes === undefined && Customstyles === undefined) {
    return makeStyles({})();
  }

  if (classes !== undefined && Customstyles === undefined) {
    const style = stylesFilter(defaulStyle, classes);
    return makeStyles(style)();
  }

  const style = stylesFilter(defaulStyle, classes);
  const CustomstyleFilted = stylesFilter(Customstyles, classes);

  for (const [key, value] of Object.entries(CustomstyleFilted)) {
    style[key] = _extends({}, style[key], value);
  }

  return makeStyles(style)();
};

const getClassesNames = classes => {
  const names = Object.values(classes).toString();
  return names.replace(",", " ");
};

const stylesFilter = (stylesToFilter, classes) => {
  const filtered = Object.keys(stylesToFilter).filter(key => classes.includes(key)).reduce((obj, key) => {
    obj[key] = stylesToFilter[key];
    return obj;
  }, {});
  return filtered;
};

export { getStyles, getClassesNames };