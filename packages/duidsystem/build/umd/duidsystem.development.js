/** @license DuidSystem v1.0.12
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@material-ui/styles'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@material-ui/styles', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.duidsystem = {}, global.React, global['@material-ui/styles'], global.PropTypes));
}(this, (function (exports, React, styles, PropTypes) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

  var Row = function Row(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var getParameters = function getParameters() {
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

      return {
        classesState: classesValue,
        propsRes: resProps
      };
    };

    var params = getParameters();
    var classesList = getStyles(rowStyles, styles, params.classesState);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, params.propsRes), children);
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

  var classesProps$1 = ["col", "xl", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
  "lg", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
  "md", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
  "sm", // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
  "xs" // {(boolean|"auto"|number|{ span: boolean|"auto"|number, offset: number, order: "first"|"last"|number })}
  ];
  var propTypes = {
    as: PropTypes__default['default'].elementType
  } ;
  var defaultProps = {
    as: 'div'
  };

  var Col = function Col(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var getParameters = function getParameters() {
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
      return {
        classesState: classesValue,
        propsRes: resProps
      };
    };

    var params = getParameters();
    var classesList = getStyles(colStyles, styles, params.classesState);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, params.propsRes), children);
  };

  Col.propTypes = propTypes ;
  Col.defaultProps = defaultProps;

  var background = {
    bg_primary: {
      backgroundColor: '#0d6efd !important'
    },
    bg_secondary: {
      backgroundColor: '#6c757d !important'
    },
    bg_success: {
      backgroundColor: '#198754 !important'
    },
    bg_info: {
      backgroundColor: '#0dcaf0 !important'
    },
    bg_warning: {
      backgroundColor: '#ffc107 !important'
    },
    bg_danger: {
      backgroundColor: '#dc3545 !important'
    },
    bg_light: {
      backgroundColor: '#f8f9fa !important'
    },
    bg_dark: {
      backgroundColor: '#212529 !important'
    },
    bg_body: {
      backgroundColor: '#fff !important'
    },
    bg_white: {
      backgroundColor: '#fff !important'
    },
    bg_transparent: {
      backgroundColor: 'transparent !important'
    },
    bg_gradient: {
      backgroundImage: 'var(--bs-gradient) !important'
    }
  };

  var border = {
    border: {
      border: '1px solid #dee2e6 !important'
    },
    border_0: {
      border: '0 !important',
      borderWidth: '0 !important'
    },
    border_1: {
      borderWidth: '1px !important'
    },
    border_2: {
      borderWidth: '2px !important'
    },
    border_3: {
      borderWidth: '3px !important'
    },
    border_4: {
      borderWidth: '4px !important'
    },
    border_5: {
      borderWidth: '5px !important'
    },
    border_top: {
      borderTop: '1px solid #dee2e6 !important'
    },
    border_top_0: {
      borderTop: '0 !important'
    },
    border_end: {
      borderRight: '1px solid #dee2e6 !important'
    },
    border_end_0: {
      borderRight: '0 !important'
    },
    border_bottom: {
      borderBottom: '1px solid #dee2e6 !important'
    },
    border_bottom_0: {
      borderBottom: '0 !important'
    },
    border_start: {
      borderLeft: '1px solid #dee2e6 !important'
    },
    border_start_0: {
      borderLeft: '0 !important'
    },
    border_primary: {
      borderColor: '#0d6efd !important'
    },
    border_secondary: {
      borderColor: '#6c757d !important'
    },
    border_success: {
      borderColor: '#198754 !important'
    },
    border_info: {
      borderColor: '#0dcaf0 !important'
    },
    border_warning: {
      borderColor: '#ffc107 !important'
    },
    border_danger: {
      borderColor: '#dc3545 !important'
    },
    border_light: {
      borderColor: '#f8f9fa !important'
    },
    border_dark: {
      borderColor: '#212529 !important'
    },
    border_white: {
      borderColor: '#fff !important'
    }
  };

  var text = {
    text_lowercase: {
      textTransform: 'lowercase !important'
    },
    text_uppercase: {
      textTransform: 'uppercase !important'
    },
    text_capitalize: {
      textTransform: 'capitalize !important'
    },
    text_start: {
      textAlign: 'left !important'
    },
    text_end: {
      textAlign: 'right !important'
    },
    text_center: {
      textAlign: 'center !important'
    },
    text_primary: {
      color: '#0d6efd !important'
    },
    text_secondary: {
      color: '#6c757d !important'
    },
    text_success: {
      color: '#198754 !important'
    },
    text_info: {
      color: '#0dcaf0 !important'
    },
    text_warning: {
      color: '#ffc107 !important'
    },
    text_danger: {
      color: '#dc3545 !important'
    },
    text_light: {
      color: '#f8f9fa !important'
    },
    text_dark: {
      color: '#212529 !important'
    },
    text_white: {
      color: '#fff !important'
    },
    text_body: {
      color: '#212529 !important'
    },
    text_muted: {
      color: '#6c757d !important'
    },
    text_black_50: {
      color: 'rgba(0, 0, 0, 0.5) !important'
    },
    text_white_50: {
      color: 'rgba(255, 255, 255, 0.5) !important'
    },
    text_reset: {
      color: 'inherit !important'
    },
    text_wrap: {
      whiteSpace: 'normal !important'
    },
    text_nowrap: {
      whiteSpace: 'nowrap !important'
    },
    text_decoration_none: {
      textDecoration: 'none !important'
    },
    text_decoration_underline: {
      textDecoration: 'underline !important'
    },
    text_decoration_line_through: {
      textDecoration: 'line-through !important'
    },
    text_break: {
      wordWrap: 'break-word !important',
      wordBreak: 'break-word !important'
    }
  };

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var cardStyles = {
    card: _defineProperty({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: "#fff",
      backgroundClip: "border-box",
      border: "1px solid rgba(0, 0, 0, 0.125)",
      borderRadius: "5px",
      boxShadow: '2px 2px 5px 1px blue',
      marginBottom: '0.3rem',
      marginTop: '0.3rem',
      width: '350px',
      height: '350px'
    }, "border", '3px solid rgba(0, 0, 0, 0.125)')
  };

  var Card = function Card(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };
  /*

  all card classes
  const cardClasses = [
      "card"
  ];

  */

  /*


  import { useBootstrapPrefix } from './ThemeProvider';
  import createWithBsPrefix from './createWithBsPrefix';
  import divWithClassName from './divWithClassName';
  import CardContext from './CardContext';
  import CardImg from './CardImg';
  import {
    BsPrefixPropsWithChildren,
    BsPrefixRefForwardingComponent,
  } from './helpers';
  import { Color, Variant } from './types';
  */

  /*

  const CardImgOverlay = createWithBsPrefix('card-img-overlay');
  */

  /*
  export interface CardProps extends BsPrefixPropsWithChildren {
    bg?: Variant;
    text?: Color;
    border?: Variant;
    body?: boolean;
  }

  type Card = BsPrefixRefForwardingComponent<'div', CardProps> & {
    Img: typeof CardImg;
    Title: typeof CardTitle;
    Subtitle: typeof CardSubtitle;
    Body: typeof CardBody;
    Link: typeof CardLink;
    Text: typeof CardText;
    Header: typeof CardHeader;
    Footer: typeof CardFooter;
    ImgOverlay: typeof CardImgOverlay;
  };

  const propTypes = {

    bsPrefix: PropTypes.string,


    bg: PropTypes.string,

    text: PropTypes.string,


    border: PropTypes.string,


    body: PropTypes.bool,

    as: PropTypes.elementType,
  };

  const defaultProps = {
    body: false,
  };

  const Card: Card = (React.forwardRef(
    (
      {
        bsPrefix,
        className,
        bg,
        text,
        border,
        body,
        children,
        // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
        as: Component = 'div',
        ...props
      }: CardProps,
      ref,
    ) => {
      const prefix = useBootstrapPrefix(bsPrefix, 'card');
      const cardContext = useMemo(
        () => ({
          cardHeaderBsPrefix: `${prefix}-header`,
        }),
        [prefix],
      );

      return (
        <CardContext.Provider value={cardContext}>
          <Component
            ref={ref}
            {...props}
            className={classNames(
              className,
              prefix,
              bg && `bg-${bg}`,
              text && `text-${text}`,
              border && `border-${border}`,
            )}
          >
            {body ? (
              // @ts-ignore
              <CardBody>{children}</CardBody>
            ) : (
              children
            )}
          </Component>
        </CardContext.Provider>
      );
    },
  ) as unknown) as Card;

  Card.displayName = 'Card';
  Card.propTypes = propTypes;
  Card.defaultProps = defaultProps;

  Card.Img = CardImg;
  Card.Title = CardTitle;
  Card.Subtitle = CardSubtitle;
  Card.Body = CardBody;
  Card.Link = CardLink;
  Card.Text = CardText;
  Card.Header = CardHeader;
  Card.Footer = CardFooter;
  Card.ImgOverlay = CardImgOverlay;

  export default Card;
  */

  var cardTitleStyles = {
    card_title: {
      marginBottom: '0.3rem',
      marginTop: 0,
      fontWeight: 500,
      lineHeight: '1.2',
      fontSize: '1.25rem'
    }
  };

  var CardTitle = function CardTitle(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardTitleStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var cardBodyStyles = {
    card_body: {
      flex: '1 1 auto',
      padding: '1rem 1rem'
    }
  };

  var CardBody = function CardBody(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardBodyStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var cardHeaderStyles = {
    card_header: {
      padding: '0.5rem 1rem',
      marginBottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
      '&:first-child': {
        borderRadius: 'calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0'
      }
    },
    card_header_tabs: {
      marginRight: '-0.5rem',
      marginBottom: '-0.5rem',
      marginLeft: '-0.5rem',
      borderBottom: 0
    },
    card_header_pills: {
      marginRight: '-0.5rem',
      marginLeft: '-0.5rem'
    }
  };

  var CardHeader = function CardHeader(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardHeaderStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var cardSubtitleStyles = {
    card_subtitle: {
      marginTop: 0,
      marginBottom: '0.3rem',
      fontWeight: 500,
      lineHeight: '1.2',
      fontSize: '1rem'
    }
  };

  var CardSubtitle = function CardSubtitle(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardSubtitleStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var cardLinkStyles = {
    card_link: {
      color: '#0d6efd',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
        color: '#0a58ca'
      },
      '& + $card_link': {
        marginLeft: '1rem'
      },
      '&:not([href]):not([class]), a:not([href]):not([class]):hover': {
        color: 'inherit',
        textDecoration: 'none'
      }
    }
  };

  var CardLink = function CardLink(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardLinkStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("a", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var cardTextStyles = {
    card_text: {
      overflow: 'auto',
      width: '100%',
      height: '70%',
      display: 'flex',
      alignItems: 'center',
      '&:last-child': {
        marginBottom: 0
      }
    }
  };

  var cardText = function cardText(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardTextStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("p", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var cardFooterStyles = {
    card_footer: {
      padding: '0.5rem 1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      borderTop: '1px solid rgba(0, 0, 0, 0.125)',
      '&:last-child': {
        borderRadius: '0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)'
      }
    }
  };

  var CardFooter = function CardFooter(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardFooterStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var cardImgOverlayStyles = {
    card_img_overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: '1rem',
      borderRadius: 'calc(0.25rem - 1px)'
    }
  };

  var CardImgOverlay = function CardImgOverlay(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardImgOverlayStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var cardImgStyles = {
    card_img: {
      width: '100%',
      borderTopLeftRadius: 'calc(0.25rem - 1px)',
      borderTopRightRadius: 'calc(0.25rem - 1px)',
      borderBottomRightRadius: 'calc(0.25rem - 1px)',
      borderBottomLeftRadius: 'calc(0.25rem - 1px)'
    },
    card_img_top: {
      width: '100%',
      borderTopLeftRadius: 'calc(0.25rem - 1px)',
      borderTopRightRadius: 'calc(0.25rem - 1px)'
    },
    card_img_bottom: {
      width: '100%',
      borderBottomRightRadius: 'calc(0.25rem - 1px)',
      borderBottomLeftRadius: 'calc(0.25rem - 1px)'
    }
  };

  var CardImg = function CardImg(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardImgStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("img", _extends({
      className: newClasseName,
      alt: "duidsystem_img"
    }, resProps), children);
  };

  var cardColumnsStyles = {
    card_columns: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0.2rem',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      flexFlow: 'wrap',
      alignItems: 'center',
      alignContent: 'space-evenly'
    }
  };

  var CardColumns = function CardColumns(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardColumnsStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };

  var cardGroupStyles = {
    card_group: {
      '@media (min-width: 576px)': {
        display: 'flex',
        flexFlow: 'row wrap'
      }
      /*'& > $card': {
          marginBottom: '0.75rem',
          '@media (min-width: 576px)': {
              flex: '1 0 0%',
              marginBottom: 0,
          }
      },
      '& > $card + $card': {
          '@media (min-width: 576px)': {
              marginLeft: 0,
              borderLeft: 0,
          }
      },
      '& > $card:not(:last-child)': {
          '@media (min-width: 576px)': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
          }
      },
      '& > $card:not(:last-child) $card_img_top': {
          '@media (min-width: 576px)': {
              borderTopRightRadius: 0,
          }
      },
      '& > $card:not(:last-child) $card_header': {
          '@media (min-width: 576px)': {
              borderTopRightRadius: 0,
          }
      },
      '& > $card:not(:last-child) $card_img_bottom': {
          '@media (min-width: 576px)': {
              borderBottomRightRadius: 0,
          }
      },
      '& > $card:not(:last-child) $card_footer': {
          '@media (min-width: 576px)': {
              borderBottomRightRadius: 0,
          }
      },
      '& > $card:not(:first-child)': {
          '@media (min-width: 576px)': {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0
          }
      },
      '& > $card:not(:first-child) $card_img_top': {
          '@media (min-width: 576px)': {
              borderTopLeftRadius: 0,
          }
      },
      '& > $card:not(:first-child) $card_header': {
          '@media (min-width: 576px)': {
              borderTopLeftRadius: 0,
          }
      },
      '& > $card:not(:first-child) $card_img_bottom': {
          '@media (min-width: 576px)': {
              borderBottomLeftRadius: 0
          }
      },
      '& > $card:not(:first-child) $card_footer': {
          '@media (min-width: 576px)': {
              borderBottomLeftRadius: 0
          }
      }*/

    }
  };

  var CardGroup = function CardGroup(_ref) {
    var styles = _ref.styles,
        classes = _ref.classes,
        children = _ref.children,
        resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

    var classesList = getStyles(cardGroupStyles, styles, classes);
    var newClasseName = getClassesNames(classesList);
    return /*#__PURE__*/React__default['default'].createElement("div", _extends({
      className: newClasseName
    }, resProps), children);
  };

  exports.BackgroundThemes = background;
  exports.BorderThemes = border;
  exports.Card = Card;
  exports.CardBody = CardBody;
  exports.CardColumns = CardColumns;
  exports.CardFooter = CardFooter;
  exports.CardGroup = CardGroup;
  exports.CardHeader = CardHeader;
  exports.CardImg = CardImg;
  exports.CardImgOverlay = CardImgOverlay;
  exports.CardLink = CardLink;
  exports.CardSubtitle = CardSubtitle;
  exports.CardText = cardText;
  exports.CardTitle = CardTitle;
  exports.Col = Col;
  exports.Container = Container;
  exports.Row = Row;
  exports.TextThemes = text;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
