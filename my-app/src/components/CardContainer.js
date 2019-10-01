import React from 'react';
import Me from './Me';

const CardContainer = props => {
    console.log(props.myData)
    return (
        <Me myData={props.myData} />
        );
}

export default CardContainer;