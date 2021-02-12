"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containerClasses = exports.containerStyles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var containerClasses = ["fluid", "xxl", "xl", "lg", "md", "sm"];
exports.containerClasses = containerClasses;
var defaultstyle = {
  width: '100%',
  paddingRight: '0.75rem',
  paddingLeft: '0.75rem',
  marginRight: 'auto',
  marginLeft: 'auto'
};
var containerStyles = {
  sm: (0, _extends2["default"])({}, defaultstyle, {
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
  md: (0, _extends2["default"])({}, defaultstyle, {
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
  lg: (0, _extends2["default"])({}, defaultstyle, {
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
  xl: (0, _extends2["default"])({}, defaultstyle, {
    '@media (min-width: 1200px)': {
      maxWidth: '1140px'
    },
    '@media (min-width: 1400px)': {
      maxWidth: '1320px'
    }
  }),
  xxl: (0, _extends2["default"])({}, defaultstyle, {
    '@media (min-width: 1400px)': {
      maxWidth: '1320px'
    }
  }),
  fluid: (0, _extends2["default"])({}, defaultstyle)
};
exports.containerStyles = containerStyles;