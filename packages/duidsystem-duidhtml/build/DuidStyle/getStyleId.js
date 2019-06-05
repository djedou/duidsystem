"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getStyleId;

function getStyleId(css) {
  var id = "duid_style_id_".concat(css.length);
  return id;
}