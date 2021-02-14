/** @license DuidSystem v1.0.9
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@material-ui/styles'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@material-ui/styles', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.duidsystem = {}, global.React, global['@material-ui/styles'], global.PropTypes));
}(this, (function (exports, React, styles, propTypes$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var defaultstyle = {
    width: '100%',
    paddingRight: '0.75rem',
    paddingLeft: '0.75rem',
    marginRight: 'auto',
    marginLeft: 'auto'
  };
  var containerStyles = {
    sm: _extends({}, defaultstyle, {
      '@media (min-width: 576px)': {
        maxWidth: '540px'
      },
      '@media (min-width: 768px)': {
        maxWidth: '720px'
      },
      '@media (min-width: 992px)': {
        maxWidth: '960px'
      },
      '@media (min-width: 1200px)': {
        maxWidth: '1140px'
      },
      '@media (min-width: 1400px)': {
        maxWidth: '1320px'
      }
    }),
    md: _extends({}, defaultstyle, {
      '@media (min-width: 768px)': {
        maxWidth: '720px'
      },
      '@media (min-width: 992px)': {
        maxWidth: '960px'
      },
      '@media (min-width: 1200px)': {
        maxWidth: '1140px'
      },
      '@media (min-width: 1400px)': {
        maxWidth: '1320px'
      }
    }),
    lg: _extends({}, defaultstyle, {
      '@media (min-width: 992px)': {
        maxWidth: '960px'
      },
      '@media (min-width: 1200px)': {
        maxWidth: '1140px'
      },
      '@media (min-width: 1400px)': {
        maxWidth: '1320px'
      }
    }),
    xl: _extends({}, defaultstyle, {
      '@media (min-width: 1200px)': {
        maxWidth: '1140px'
      },
      '@media (min-width: 1400px)': {
        maxWidth: '1320px'
      }
    }),
    xxl: _extends({}, defaultstyle, {
      '@media (min-width: 1400px)': {
        maxWidth: '1320px'
      }
    }),
    fluid: _extends({}, defaultstyle)
  };

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  var getStyles = function getStyles(defaulStyle, Customstyles, classes) {
    if (classes === undefined && Customstyles === undefined) {
      return styles.makeStyles({})();
    }

    if (classes !== undefined && Customstyles === undefined) {
      var _style = stylesFilter(defaulStyle, classes);

      return styles.makeStyles(_style)();
    }

    var style = stylesFilter(defaulStyle, classes);
    var CustomstyleFilted = stylesFilter(Customstyles, classes);

    for (var _i = 0, _Object$entries = Object.entries(CustomstyleFilted); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      style[key] = _extends({}, style[key], value);
    }

    return styles.makeStyles(style)();
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

  var Container = function Container(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(containerStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var rowStyles = {
    row: {
      '--bs-gutter-x': '1.5rem',
      '--bs-gutter-y': 0,
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 'calc(var(--bs-gutter-y) * -1)',
      marginRight: 'calc(var(--bs-gutter-x) / -2)',
      marginLeft: 'calc(var(--bs-gutter-x) / -2)',
      '& > *': {
        '--bs-gutter-x': '1.5rem',
        '--bs-gutter-y': 0,
        boxSizing: 'border-box',
        flexShrink: 0,
        width: '100%',
        maxWidth: '100%',
        paddingRight: 'calc(var(--bs-gutter-x) / 2)',
        paddingLeft: 'calc(var(--bs-gutter-x) / 2)',
        marginTop: 'var(--bs-gutter-y)'
      }
    },
    row_cols_auto: {
      '& > *': {
        flex: '0 0 auto',
        width: 'auto'
      }
    },
    row_cols_1: {
      '& > *': {
        flex: '0 0 auto',
        width: '100%'
      }
    },
    row_cols_2: {
      '& > *': {
        flex: '0 0 auto',
        width: '50%'
      }
    },
    row_cols_3: {
      '& > *': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    },
    row_cols_4: {
      '& > *': {
        flex: '0 0 auto',
        width: '25%'
      }
    },
    row_cols_5: {
      '& > *': {
        flex: '0 0 auto',
        width: '20%'
      }
    },
    row_cols_6: {
      '& > *': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    },
    row_cols_sm_auto: {
      '& > *': {
        '@media (min-width: 576px)': {
          flex: '0 0 auto',
          width: 'auto'
        }
      }
    },
    row_cols_sm_1: {
      '& > *': {
        '@media (min-width: 576px)': {
          flex: '0 0 auto',
          width: '100%'
        }
      }
    },
    row_cols_sm_2: {
      '& > *': {
        '@media (min-width: 576px)': {
          flex: '0 0 auto',
          width: '50%'
        }
      }
    },
    row_cols_sm_3: {
      '& > *': {
        '@media (min-width: 576px)': {
          flex: '0 0 auto',
          width: '33.3333333333%'
        }
      }
    },
    row_cols_sm_4: {
      '& > *': {
        '@media (min-width: 576px)': {
          flex: '0 0 auto',
          width: '25%'
        }
      }
    },
    row_cols_sm_5: {
      '& > *': {
        '@media (min-width: 576px)': {
          flex: '0 0 auto',
          width: '20%'
        }
      }
    },
    row_cols_sm_6: {
      '& > *': {
        '@media (min-width: 576px)': {
          flex: '0 0 auto',
          width: '16.6666666667%'
        }
      }
    },
    row_cols_md_auto: {
      '& > *': {
        '@media (min-width: 768px)': {
          flex: '0 0 auto',
          width: 'auto'
        }
      }
    },
    row_cols_md_1: {
      '& > *': {
        '@media (min-width: 768px)': {
          flex: '0 0 auto',
          width: '100%'
        }
      }
    },
    row_cols_md_2: {
      '& > *': {
        '@media (min-width: 768px)': {
          flex: '0 0 auto',
          width: '50%'
        }
      }
    },
    row_cols_md_3: {
      '& > *': {
        '@media (min-width: 768px)': {
          flex: '0 0 auto',
          width: '33.3333333333%'
        }
      }
    },
    row_cols_md_4: {
      '& > *': {
        '@media (min-width: 768px)': {
          flex: '0 0 auto',
          width: '25%'
        }
      }
    },
    row_cols_md_5: {
      '& > *': {
        '@media (min-width: 768px)': {
          flex: '0 0 auto',
          width: '20%'
        }
      }
    },
    row_cols_md_6: {
      '& > *': {
        '@media (min-width: 768px)': {
          flex: '0 0 auto',
          width: '16.6666666667%'
        }
      }
    },
    row_cols_lg_auto: {
      '& > *': {
        '@media (min-width: 992px)': {
          flex: '0 0 auto',
          width: 'auto'
        }
      }
    },
    row_cols_lg_1: {
      '& > *': {
        '@media (min-width: 992px)': {
          flex: '0 0 auto',
          width: '100%'
        }
      }
    },
    row_cols_lg_2: {
      '& > *': {
        '@media (min-width: 992px)': {
          flex: '0 0 auto',
          width: '50%'
        }
      }
    },
    row_cols_lg_3: {
      '& > *': {
        '@media (min-width: 992px)': {
          flex: '0 0 auto',
          width: '33.3333333333%'
        }
      }
    },
    row_cols_lg_4: {
      '& > *': {
        '@media (min-width: 992px)': {
          flex: '0 0 auto',
          width: '25%'
        }
      }
    },
    row_cols_lg_5: {
      '& > *': {
        '@media (min-width: 992px)': {
          flex: '0 0 auto',
          width: '20%'
        }
      }
    },
    row_cols_lg_6: {
      '& > *': {
        '@media (min-width: 992px)': {
          flex: '0 0 auto',
          width: '16.6666666667%'
        }
      }
    },
    row_cols_xl_auto: {
      '& > *': {
        '@media (min-width: 1200px)': {
          flex: '0 0 auto',
          width: 'auto'
        }
      }
    },
    row_cols_xl_1: {
      '& > *': {
        '@media (min-width: 1200px)': {
          flex: '0 0 auto',
          width: '100%'
        }
      }
    },
    row_cols_xl_2: {
      '& > *': {
        '@media (min-width: 1200px)': {
          flex: '0 0 auto',
          width: '50%'
        }
      }
    },
    row_cols_xl_3: {
      '& > *': {
        '@media (min-width: 1200px)': {
          flex: '0 0 auto',
          width: '33.3333333333%'
        }
      }
    },
    row_cols_xl_4: {
      '& > *': {
        '@media (min-width: 1200px)': {
          flex: '0 0 auto',
          width: '25%'
        }
      }
    },
    row_cols_xl_5: {
      '& > *': {
        '@media (min-width: 1200px)': {
          flex: '0 0 auto',
          width: '20%'
        }
      }
    },
    row_cols_xl_6: {
      '& > *': {
        '@media (min-width: 1200px)': {
          flex: '0 0 auto',
          width: '16.6666666667%'
        }
      }
    },
    row_cols_xxl_auto: {
      '& > *': {
        '@media (min-width: 1400px)': {
          flex: '0 0 auto',
          width: 'auto'
        }
      }
    },
    row_cols_xxl_1: {
      '& > *': {
        '@media (min-width: 1400px)': {
          flex: '0 0 auto',
          width: '100%'
        }
      }
    },
    row_cols_xxl_2: {
      '& > *': {
        '@media (min-width: 1400px)': {
          flex: '0 0 auto',
          width: '50%'
        }
      }
    },
    row_cols_xxl_3: {
      '& > *': {
        '@media (min-width: 1400px)': {
          flex: '0 0 auto',
          width: '33.3333333333%'
        }
      }
    },
    row_cols_xxl_4: {
      '& > *': {
        '@media (min-width: 1400px)': {
          flex: '0 0 auto',
          width: '25%'
        }
      }
    },
    row_cols_xxl_5: {
      '& > *': {
        '@media (min-width: 1400px)': {
          flex: '0 0 auto',
          width: '20%'
        }
      }
    },
    row_cols_xxl_6: {
      '& > *': {
        '@media (min-width: 1400px)': {
          flex: '0 0 auto',
          width: '16.6666666667%'
        }
      }
    }
  };

  var classesProps = ["row", "lg", "md", "sm", "xl", "xxl", "xs"];

  var Row = function Row(props) {
    var _useState = React.useState(),
        _useState2 = _slicedToArray(_useState, 2),
        classesState = _useState2[0],
        setClasses = _useState2[1];

    var _useState3 = React.useState(),
        _useState4 = _slicedToArray(_useState3, 2),
        stylesValue = _useState4[0],
        setStylesValue = _useState4[1];

    var _useState5 = React.useState(),
        _useState6 = _slicedToArray(_useState5, 2),
        childrenObj = _useState6[0],
        setChildrenObj = _useState6[1];

    var _useState7 = React.useState(),
        _useState8 = _slicedToArray(_useState7, 2),
        resProps = _useState8[0],
        setResProps = _useState8[1];

    React.useEffect(function () {
      var styles = props.styles,
          classes = props.classes,
          children = props.children,
          resProps = _objectWithoutProperties(props, ["styles", "classes", "children"]);

      setStylesValue(styles);
      setChildrenObj(children);
      setResProps(resProps);
      var sizePrefix = 'row_cols';
      var classesValue = ["row"];
      classesProps.forEach(function (brkPoint) {
        var propValue = resProps[brkPoint];
        delete resProps[brkPoint];
        var cols;

        if (propValue != null) {
          cols = propValue;
        }

        var infix = brkPoint !== 'xs' ? "_".concat(brkPoint) : '';
        if (cols != null) classesValue.push("".concat(sizePrefix).concat(infix, "_").concat(cols));
      });

      if (classes !== undefined && Array.isArray(classes)) {
        classes.forEach(function (cl) {
          if (!classesValue.includes(cl)) classesValue.push(cl);
        });
      }

      setClasses(classesValue);
    }, [props]);
    var classesList = getStyles(rowStyles, stylesValue, classesState);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), childrenObj);
  };

  var global$1 = (typeof global !== "undefined" ? global :
              typeof self !== "undefined" ? self :
              typeof window !== "undefined" ? window : {});

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global$1.performance || {};
  performance.now        ||
    performance.mozNow     ||
    performance.msNow      ||
    performance.oNow       ||
    performance.webkitNow  ||
    function(){ return (new Date()).getTime() };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var colStyles = {
    col: {
      flex: '1 0 0%'
    },
    col_auto: {
      flex: '0 0 auto',
      width: 'auto'
    },
    col_1: {
      flex: '0 0 auto',
      width: '8.3333333333%'
    },
    col_2: {
      flex: '0 0 auto',
      width: '16.6666666667%'
    },
    col_3: {
      flex: '0 0 auto',
      width: '25%'
    },
    col_4: {
      flex: '0 0 auto',
      width: '33.3333333333%'
    },
    col_5: {
      flex: '0 0 auto',
      width: '41.6666666667%'
    },
    col_6: {
      flex: '0 0 auto',
      width: '50%'
    },
    col_7: {
      flex: '0 0 auto',
      width: '58.3333333333%'
    },
    col_8: {
      flex: '0 0 auto',
      width: '66.6666666667%'
    },
    col_9: {
      flex: '0 0 auto',
      width: '75%'
    },
    col_10: {
      flex: '0 0 auto',
      width: '83.3333333333%'
    },
    col_11: {
      flex: '0 0 auto',
      width: '91.6666666667%'
    },
    col_12: {
      flex: '0 0 auto',
      width: '100%'
    },
    offset_1: {
      marginLeft: '8.3333333333%'
    },
    offset_2: {
      marginLeft: '16.6666666667%'
    },
    offset_3: {
      marginLeft: '25%'
    },
    offset_4: {
      marginLeft: '33.3333333333%'
    },
    offset_5: {
      marginLeft: '41.6666666667%'
    },
    offset_6: {
      marginLeft: '50%'
    },
    offset_7: {
      marginLeft: '58.3333333333%'
    },
    offset_8: {
      marginLeft: '66.6666666667%'
    },
    offset_9: {
      marginLeft: '75%'
    },
    offset_10: {
      marginLeft: '83.3333333333%'
    },
    offset_11: {
      marginLeft: '91.6666666667%'
    },
    col_sm: {
      '@media (min-width: 576px)': {
        flex: '1 0 0%'
      }
    },
    col_sm_auto: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    },
    col_sm_1: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '8.3333333333%'
      }
    },
    col_sm_2: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    },
    col_sm_3: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    },
    col_sm_4: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    },
    col_sm_5: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '41.6666666667%'
      }
    },
    col_sm_6: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    },
    col_sm_7: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '58.3333333333%'
      }
    },
    col_sm_8: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '66.6666666667%'
      }
    },
    col_sm_9: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '75%'
      }
    },
    col_sm_10: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '83.3333333333%'
      }
    },
    col_sm_11: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '91.6666666667%'
      }
    },
    col_sm_12: {
      '@media (min-width: 576px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    },
    offset_sm_0: {
      '@media (min-width: 576px)': {
        marginLeft: 0
      }
    },
    offset_sm_1: {
      '@media (min-width: 576px)': {
        marginLeft: '8.3333333333%'
      }
    },
    offset_sm_2: {
      '@media (min-width: 576px)': {
        marginLeft: '16.6666666667%'
      }
    },
    offset_sm_3: {
      '@media (min-width: 576px)': {
        marginLeft: '25%'
      }
    },
    offset_sm_4: {
      '@media (min-width: 576px)': {
        marginLeft: '33.3333333333%'
      }
    },
    offset_sm_5: {
      '@media (min-width: 576px)': {
        marginLeft: '41.6666666667%'
      }
    },
    offset_sm_6: {
      '@media (min-width: 576px)': {
        marginLeft: '50%'
      }
    },
    offset_sm_7: {
      '@media (min-width: 576px)': {
        marginLeft: '58.3333333333%'
      }
    },
    offset_sm_8: {
      '@media (min-width: 576px)': {
        marginLeft: '66.6666666667%'
      }
    },
    offset_sm_9: {
      '@media (min-width: 576px)': {
        marginLeft: '75%'
      }
    },
    offset_sm_10: {
      '@media (min-width: 576px)': {
        marginLeft: '83.3333333333%'
      }
    },
    offset_sm_11: {
      '@media (min-width: 576px)': {
        marginLeft: '91.6666666667%'
      }
    },
    col_md: {
      '@media (min-width: 768px)': {
        flex: '1 0 0%'
      }
    },
    col_md_auto: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    },
    col_md_1: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '8.3333333333%'
      }
    },
    col_md_2: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    },
    col_md_3: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    },
    col_md_4: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    },
    col_md_5: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '41.6666666667%'
      }
    },
    col_md_6: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    },
    col_md_7: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '58.3333333333%'
      }
    },
    col_md_8: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '66.6666666667%'
      }
    },
    col_md_9: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '75%'
      }
    },
    col_md_10: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '83.3333333333%'
      }
    },
    col_md_11: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '91.6666666667%'
      }
    },
    col_md_12: {
      '@media (min-width: 768px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    },
    offset_md_0: {
      '@media (min-width: 768px)': {
        maLinLeft: '0'
      }
    },
    offset_md_1: {
      '@media (min-width: 768px)': {
        marginLeft: '8.3333333333%'
      }
    },
    offset_md_2: {
      '@media (min-width: 768px)': {
        marginLeft: '16.6666666667%'
      }
    },
    offset_md_3: {
      '@media (min-width: 768px)': {
        marginLeft: '25%'
      }
    },
    offset_md_4: {
      '@media (min-width: 768px)': {
        marginLeft: '33.3333333333%'
      }
    },
    offset_md_5: {
      '@media (min-width: 768px)': {
        marginLeft: '41.6666666667%'
      }
    },
    offset_md_6: {
      '@media (min-width: 768px)': {
        marginLeft: '50%'
      }
    },
    offset_md_7: {
      '@media (min-width: 768px)': {
        marginLeft: '58.3333333333%'
      }
    },
    offset_md_8: {
      '@media (min-width: 768px)': {
        marginLeft: '66.6666666667%'
      }
    },
    offset_md_9: {
      '@media (min-width: 768px)': {
        marginLeft: '75%'
      }
    },
    offset_md_10: {
      '@media (min-width: 768px)': {
        marginLeft: '83.3333333333%'
      }
    },
    offset_md_11: {
      '@media (min-width: 768px)': {
        marginLeft: '91.6666666667%'
      }
    },
    col_lg: {
      '@media (min-width: 992px)': {
        flex: '1 0 0%'
      }
    },
    col_lg_auto: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    },
    col_lg_1: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '8.3333333333%'
      }
    },
    col_lg_2: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    },
    col_lg_3: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    },
    col_lg_4: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    },
    col_lg_5: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '41.6666666667%'
      }
    },
    col_lg_6: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    },
    col_lg_7: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '58.3333333333%'
      }
    },
    col_lg_8: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '66.6666666667%'
      }
    },
    col_lg_9: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '75%'
      }
    },
    col_lg_10: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '83.3333333333%'
      }
    },
    col_lg_11: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '91.6666666667%'
      }
    },
    col_lg_12: {
      '@media (min-width: 992px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    },
    offset_lg_0: {
      '@media (min-width: 992px)': {
        marginLeft: '0'
      }
    },
    offset_lg_1: {
      '@media (min-width: 992px)': {
        marginLeft: '8.3333333333%'
      }
    },
    offset_lg_2: {
      '@media (min-width: 992px)': {
        marginLeft: '16.6666666667%'
      }
    },
    offset_lg_3: {
      '@media (min-width: 992px)': {
        marginLeft: '25%'
      }
    },
    offset_lg_4: {
      '@media (min-width: 992px)': {
        marginLeft: '33.3333333333%'
      }
    },
    offset_lg_5: {
      '@media (min-width: 992px)': {
        marginLeft: '41.6666666667%'
      }
    },
    offset_lg_6: {
      '@media (min-width: 992px)': {
        marginLeft: '50%'
      }
    },
    offset_lg_7: {
      '@media (min-width: 992px)': {
        marginLeft: '58.3333333333%'
      }
    },
    offset_lg_8: {
      '@media (min-width: 992px)': {
        marginLeft: '66.6666666667%'
      }
    },
    offset_lg_9: {
      '@media (min-width: 992px)': {
        marginLeft: '75%'
      }
    },
    offset_lg_10: {
      '@media (min-width: 992px)': {
        marginLeft: '83.3333333333%'
      }
    },
    offset_lg_11: {
      '@media (min-width: 992px)': {
        marginLeft: '91.6666666667%'
      }
    },
    col_xl: {
      '@media (min-width: 1200px)': {
        flex: '1 0 0%'
      }
    },
    col_xl_auto: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    },
    col_xl_1: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '8.3333333333%'
      }
    },
    col_xl_2: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    },
    col_xl_3: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    },
    col_xl_4: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    },
    col_xl_5: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '41.6666666667%'
      }
    },
    col_xl_6: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    },
    col_xl_7: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '58.3333333333%'
      }
    },
    col_xl_8: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '66.6666666667%'
      }
    },
    col_xl_9: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '75%'
      }
    },
    col_xl_10: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '83.3333333333%'
      }
    },
    col_xl_11: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '91.6666666667%'
      }
    },
    col_xl_12: {
      '@media (min-width: 1200px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    },
    offset_xl_0: {
      '@media (min-width: 1200px)': {
        marginLeft: 0
      }
    },
    offset_xl_1: {
      '@media (min-width: 1200px)': {
        marginLeft: '8.3333333333%'
      }
    },
    offset_xl_2: {
      '@media (min-width: 1200px)': {
        marginLeft: '16.6666666667%'
      }
    },
    offset_xl_3: {
      '@media (min-width: 1200px)': {
        marginLeft: '25%'
      }
    },
    offset_xl_4: {
      '@media (min-width: 1200px)': {
        marginLeft: '33.3333333333%'
      }
    },
    offset_xl_5: {
      '@media (min-width: 1200px)': {
        marginLeft: '41.6666666667%'
      }
    },
    offset_xl_6: {
      '@media (min-width: 1200px)': {
        marginLeft: '50%'
      }
    },
    offset_xl_7: {
      '@media (min-width: 1200px)': {
        marginLeft: '58.3333333333%'
      }
    },
    offset_xl_8: {
      '@media (min-width: 1200px)': {
        marginLeft: '66.6666666667%'
      }
    },
    offset_xl_9: {
      '@media (min-width: 1200px)': {
        marginLeft: '75%'
      }
    },
    offset_xl_10: {
      '@media (min-width: 1200px)': {
        marginLeft: '83.3333333333%'
      }
    },
    offset_xl_11: {
      '@media (min-width: 1200px)': {
        marginLeft: '91.6666666667%'
      }
    },
    col_xxl: {
      '@media (min-width: 1400px)': {
        flex: '1 0 0%'
      }
    },
    col_xxl_auto: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: 'auto'
      }
    },
    col_xxl_1: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '8.3333333333%'
      }
    },
    col_xxl_2: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '16.6666666667%'
      }
    },
    col_xxl_3: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '25%'
      }
    },
    col_xxl_4: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '33.3333333333%'
      }
    },
    col_xxl_5: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '41.6666666667%'
      }
    },
    col_xxl_6: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '50%'
      }
    },
    col_xxl_7: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '58.3333333333%'
      }
    },
    col_xxl_8: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '66.6666666667%'
      }
    },
    col_xxl_9: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '75%'
      }
    },
    col_xxl_10: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '83.3333333333%'
      }
    },
    col_xxl_11: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '91.6666666667%'
      }
    },
    col_xxl_12: {
      '@media (min-width: 1400px)': {
        flex: '0 0 auto',
        width: '100%'
      }
    },
    offset_xxl_0: {
      '@media (min-width: 1400px)': {
        marginLeft: 0
      }
    },
    offset_xxl_1: {
      '@media (min-width: 1400px)': {
        marginLeft: '8.3333333333%'
      }
    },
    offset_xxl_2: {
      '@media (min-width: 1400px)': {
        marginLeft: '16.6666666667%'
      }
    },
    offset_xxl_3: {
      '@media (min-width: 1400px)': {
        marginLeft: '25%'
      }
    },
    offset_xxl_4: {
      '@media (min-width: 1400px)': {
        marginLeft: '33.3333333333%'
      }
    },
    offset_xxl_5: {
      '@media (min-width: 1400px)': {
        marginLeft: '41.6666666667%'
      }
    },
    offset_xxl_6: {
      '@media (min-width: 1400px)': {
        marginLeft: '50%'
      }
    },
    offset_xxl_7: {
      '@media (min-width: 1400px)': {
        marginLeft: '58.3333333333%'
      }
    },
    offset_xxl_8: {
      '@media (min-width: 1400px)': {
        marginLeft: '66.6666666667%'
      }
    },
    offset_xxl_9: {
      '@media (min-width: 1400px)': {
        marginLeft: '75%'
      }
    },
    offset_xxl_10: {
      '@media (min-width: 1400px)': {
        marginLeft: '83.3333333333%'
      }
    },
    offset_xxl_11: {
      '@media (min-width: 1400px)': {
        marginLeft: '91.6666666667%'
      }
    },
    order_first: {
      order: '-1 !important'
    },
    order_0: {
      order: '0 !important'
    },
    order_1: {
      order: '1 !important'
    },
    order_2: {
      order: '2 !important'
    },
    order_3: {
      order: '3 !important'
    },
    order_4: {
      order: '4 !important'
    },
    order_5: {
      order: '5 !important'
    },
    order_last: {
      order: '6 !important'
    },
    order_sm_first: {
      '@media (min-width: 576px)': {
        order: '-1 !important'
      }
    },
    order_sm_0: {
      '@media (min-width: 576px)': {
        order: '0 !important'
      }
    },
    order_sm_1: {
      '@media (min-width: 576px)': {
        order: '1 !important'
      }
    },
    order_sm_2: {
      '@media (min-width: 576px)': {
        order: '2 !important'
      }
    },
    order_sm_3: {
      '@media (min-width: 576px)': {
        order: '3 !important'
      }
    },
    order_sm_4: {
      '@media (min-width: 576px)': {
        order: '4 !important'
      }
    },
    order_sm_5: {
      '@media (min-width: 576px)': {
        order: '5 !important'
      }
    },
    order_sm_last: {
      '@media (min-width: 576px)': {
        order: '6 !important'
      }
    },
    order_md_first: {
      '@media (min-width: 768px)': {
        order: '-1 !important'
      }
    },
    order_md_0: {
      '@media (min-width: 768px)': {
        order: '0 !important'
      }
    },
    order_md_1: {
      '@media (min-width: 768px)': {
        order: '1 !important'
      }
    },
    order_md_2: {
      '@media (min-width: 768px)': {
        order: '2 !important'
      }
    },
    order_md_3: {
      '@media (min-width: 768px)': {
        order: '3 !important'
      }
    },
    order_md_4: {
      '@media (min-width: 768px)': {
        order: '4 !important'
      }
    },
    order_md_5: {
      '@media (min-width: 768px)': {
        order: '5 !important'
      }
    },
    order_md_last: {
      '@media (min-width: 768px)': {
        order: '6 !important'
      }
    },
    order_lg_first: {
      '@media (min-width: 992px)': {
        order: '-1 !important'
      }
    },
    order_lg_0: {
      '@media (min-width: 992px)': {
        order: '0 !important'
      }
    },
    order_lg_1: {
      '@media (min-width: 992px)': {
        order: '1 !important'
      }
    },
    order_lg_2: {
      '@media (min-width: 992px)': {
        order: '2 !important'
      }
    },
    order_lg_3: {
      '@media (min-width: 992px)': {
        order: '3 !important'
      }
    },
    order_lg_4: {
      '@media (min-width: 992px)': {
        order: '4 !important'
      }
    },
    order_lg_5: {
      '@media (min-width: 992px)': {
        order: '5 !important'
      }
    },
    order_lg_last: {
      '@media (min-width: 992px)': {
        order: '6 !important'
      }
    },
    order_xl_first: {
      '@media (min-width: 1200px)': {
        order: '-1 !important'
      }
    },
    order_xl_0: {
      '@media (min-width: 1200px)': {
        order: '0 !important'
      }
    },
    order_xl_1: {
      '@media (min-width: 1200px)': {
        order: '1 !important'
      }
    },
    order_xl_2: {
      '@media (min-width: 1200px)': {
        order: '2 !important'
      }
    },
    order_xl_3: {
      '@media (min-width: 1200px)': {
        order: '3 !important'
      }
    },
    order_xl_4: {
      '@media (min-width: 1200px)': {
        order: '4 !important'
      }
    },
    order_xl_5: {
      '@media (min-width: 1200px)': {
        order: '5 !important'
      }
    },
    order_xl_last: {
      '@media (min-width: 1200px)': {
        order: '6 !important'
      }
    },
    order_xxl_first: {
      '@media (min-width: 1400px)': {
        order: '-1 !important'
      }
    },
    order_xxl_0: {
      '@media (min-width: 1400px)': {
        order: '0 !important'
      }
    },
    order_xxl_1: {
      '@media (min-width: 1400px)': {
        order: '1 !important'
      }
    },
    order_xxl_2: {
      '@media (min-width: 1400px)': {
        order: '2 !important'
      }
    },
    order_xxl_3: {
      '@media (min-width: 1400px)': {
        order: '3 !important'
      }
    },
    order_xxl_4: {
      '@media (min-width: 1400px)': {
        order: '4 !important'
      }
    },
    order_xxl_5: {
      '@media (min-width: 1400px)': {
        order: '5 !important'
      }
    },
    order_xxl_last: {
      '@media (min-width: 1400px)': {
        order: '6 !important'
      }
    }
  };

  var classesProps$1 = ["col", "xl", "lg", "md", "sm", "xs"];
  var propTypes = {
    as: propTypes$1.elementType
  } ;
  var defaultProps = {
    as: 'div'
  };

  var Col = function Col(props) {
    var _useState = React.useState(),
        _useState2 = _slicedToArray(_useState, 2),
        classesState = _useState2[0],
        setClasses = _useState2[1];

    var _useState3 = React.useState(),
        _useState4 = _slicedToArray(_useState3, 2),
        stylesValue = _useState4[0],
        setStylesValue = _useState4[1];

    var _useState5 = React.useState(),
        _useState6 = _slicedToArray(_useState5, 2),
        childrenObj = _useState6[0],
        setChildrenObj = _useState6[1];

    var _useState7 = React.useState(),
        _useState8 = _slicedToArray(_useState7, 2),
        resProps = _useState8[0],
        setResProps = _useState8[1];

    React.useEffect(function () {
      var styles = props.styles,
          classes = props.classes,
          children = props.children,
          resProps = _objectWithoutProperties(props, ["styles", "classes", "children"]);

      setStylesValue(styles);
      setChildrenObj(children);
      setResProps(resProps);
      var prefix = 'col';
      var classesValue = [];
      var spans = [];
      delete resProps["as"];
      classesProps$1.forEach(function (brkPoint) {
        var propValue = resProps[brkPoint];
        delete resProps[brkPoint];
        var span;
        var offset;
        var order;

        if (_typeof(propValue) === 'object' && propValue != null) {
          var _propValue$span = propValue.span;
          span = _propValue$span === void 0 ? true : _propValue$span;
          offset = propValue.offset;
          order = propValue.order;
        } else {
          span = propValue;
        }

        var infix = brkPoint !== 'xs' ? "_".concat(brkPoint) : '';
        if (span) spans.push(span === true ? "".concat(prefix).concat(infix) : "".concat(prefix).concat(infix, "_").concat(span));
        if (order != null) classesValue.push("order".concat(infix, "_").concat(order));
        if (offset != null) classesValue.push("offset".concat(infix, "_").concat(offset));
      });

      if (!spans.length) {
        spans.push(prefix); // plain 'col'
      }

      if (classes !== undefined && Array.isArray(classes)) {
        classes.forEach(function (cl) {
          if (!classesValue.includes(cl)) classesValue.push(cl);
        });
      }

      spans.forEach(function (sp) {
        if (!classesValue.includes(sp)) classesValue.push(sp);
      });
      setClasses(classesValue);
    }, [props]);
    var classesList = getStyles(colStyles, stylesValue, classesState);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), childrenObj);
  };

  Col.propTypes = propTypes ;
  Col.defaultProps = defaultProps;

  exports.Col = Col;
  exports.Container = Container;
  exports.Row = Row;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
