import React from 'react';

const Me = props => {
    console.log(props.myData)
    return (
        <div className='card'>
            <h1>{props.myData.name}</h1>
            <a href={`${props.myData.html_url}`}><h4>{props.myData.login}</h4></a>
            <p>{props.myData.bio}</p>
            <h4>Followers: {props.myData.followers}</h4>

        </div>
    )
}

export default Me;