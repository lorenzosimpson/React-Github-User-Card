import React from 'react';

const Card = props => {
    console.log(props.followers, 'props followers')
    return (
        <div className='card'>
            <img src={props.avatarUrl}></img>
            <a href={`${props.url}`}><h1>{props.login}</h1></a>
        </div>
    )
}

export default Card;