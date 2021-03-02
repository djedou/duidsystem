"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardStyles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var cardStyles = {
  card: (0, _defineProperty2["default"])({
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
exports.cardStyles = cardStyles;