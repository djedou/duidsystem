"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardLinkStyles = void 0;
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
exports.cardLinkStyles = cardLinkStyles;