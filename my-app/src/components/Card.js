import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <a href={`${props.html_url}`} target='_blank'>
                <img src={props.avatarUrl}></img>
                <h2>{props.login.toLowerCase()}</h2>
            </a>
        </div>
    )
}

export default Card;