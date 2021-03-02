import React from 'react';
import {cardImgStyles} from './cardImgStyle';
import {getStyles, getClassesNames}  from '../../styles/stylesMarker';


const CardImg = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(cardImgStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <img className={newClasseName} alt="duidsystem_img" {...resProps}> 
            {children}
        </img>
    )
}


export default CardImg;