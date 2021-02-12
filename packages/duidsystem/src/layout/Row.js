import React, { useState, useEffect } from 'react';
import { rowStyles } from './rowStyle';
import {getStyles, getClassesNames}  from '../styles/stylesMarker';



const classesProps = [
	"row",
	"lg", 
    "md", 
    "sm", 
    "xl",  
	"xxl",
    "xs"
];


const Row = (props) => {

	const [ classesState, setClasses ] = useState();
	const [ stylesValue, setStylesValue ] = useState();
	const [ childrenObj, setChildrenObj ] = useState();
	const [ resProps, setResProps ] = useState();
	
	useEffect(() => {
		const { styles, classes, children, ...resProps} = props;
		setStylesValue(styles);
		setChildrenObj(children);
		setResProps(resProps);

		const sizePrefix = 'row_cols';
		const classesValue = ["row"];

		classesProps.forEach((brkPoint) => {
			const propValue = resProps[brkPoint];
			delete resProps[brkPoint];
			let cols;
			if (propValue != null) {
				cols = propValue;
			}
	
			const infix = brkPoint !== 'xs' ? `_${brkPoint}` : '';
			
			if (cols != null) classesValue.push(`${sizePrefix}${infix}_${cols}`);
		
		});

		if(classes !== undefined && Array.isArray(classes)) {
			classes.forEach((cl) => {
				if(!classesValue.includes(cl)) classesValue.push(cl)
			});
		}
		setClasses(classesValue)
	},[props]);

	

    const classesList = getStyles(rowStyles, stylesValue, classesState);
    const newClasseName = getClassesNames(classesList);

    return (
      <div className={newClasseName} {...resProps}> 
        {childrenObj}
      </div>
    )
}


export default Row;
