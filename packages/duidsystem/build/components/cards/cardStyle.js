"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardStyles = void 0;
var cardStyles = {
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    wordWrap: "break-word",
    backgroundColor: "#fff",
    backgroundClip: "border-box",
    border: "1px solid rgba(0, 0, 0, 0.125)",
    borderRadius: "0.25rem",
    '& > hr': {
      marginRight: 0,
      marginLeft: 0
    }
    /*'& > $list_group': {
        borderTop: "inherit",
        borderBottom: "inherit"
    },
    '& > $list_group:first-child': {
        borderTopWidth: 0,
        borderTopLeftRadius: 'calc(0.25rem - 1px)',
        borderTopRightRadius: 'calc(0.25rem - 1px)'
    },
    '& > $list_group:last-child': {
        borderBottomWidth: 0,
        borderBottomRightRadius: 'calc(0.25rem - 1px)',
        borderBottomLeftRadius: 'calc(0.25rem - 1px)'
    }*/

  }
};
exports.cardStyles = cardStyles;