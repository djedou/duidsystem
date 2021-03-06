"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = appendStyle;

function appendStyle(id, css) {
  if (!window.document.head.querySelector("#" + id)) {
    var node = window.document.createElement('style');
    node.textContent = css;
    node.type = 'text/css';
    node.id = id;
    document.head.appendChild(node);
  }
}