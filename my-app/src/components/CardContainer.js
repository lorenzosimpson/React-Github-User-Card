import React from 'react';
import Me from './Me';
import Card from './Card';

const CardContainer = props => {
    console.log(props.myData)
    return (
        <div className='card-container'>
            <Me myData={props.myData} />
            <Card />
        </div>
        );
}

export default CardContainer;