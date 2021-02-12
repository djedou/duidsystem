import React from 'react';
import {containerStyles} from './containerStyle';
import {getStyles, getClassesNames}  from '../styles/stylesMarker';


const Container = ({styles, classes, children, ...resProps}) => {

    const classesList = getStyles(containerStyles, styles, classes);
    const newClasseName = getClassesNames(classesList);

    return (
        <div className={newClasseName} {...resProps}> 
            {children}
        </div>
    )
}


export default Container;
