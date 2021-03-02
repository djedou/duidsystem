import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { cardStyles } from './cardStyle';
import { getStyles, getClassesNames } from '../../styles/stylesMarker';

var Card = function Card(_ref) {
  var styles = _ref.styles,
      classes = _ref.classes,
      children = _ref.children,
      resProps = _objectWithoutProperties(_ref, ["styles", "classes", "children"]);

  var classesList = getStyles(cardStyles, styles, classes);
  var newClasseName = getClassesNames(classesList);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: newClasseName
  }, resProps), children);
};

export default Card;
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