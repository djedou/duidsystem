"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = removeStyle;

function removeStyle(id) {
  var sheetToBeRemoved = window.document.getElementById(id);
  var sheetParent = sheetToBeRemoved.parentNode;
  sheetParent.removeChild(sheetToBeRemoved);
}