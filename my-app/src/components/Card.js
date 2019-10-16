import React from 'react';

const Card = props => {

    return (
        <div className='card'>
            <a href={`${props.html_url}`} target='_blank' rel="noopener noreferrer">
                <img src={props.avatarUrl} alt='github follower'></img>
                <h2>{props.login.toLowerCase()}</h2>
            </a>
        </div>
    )
}

export default Card;