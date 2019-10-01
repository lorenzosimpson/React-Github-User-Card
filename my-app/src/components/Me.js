import React from 'react';

const Me = props => {
    console.log(props.myData)
    return (
        <div className='me-card'>
            <img src={props.myData.avatar_url}></img>
            <div className='text-container'>
                <a href={`${props.myData.html_url}`}target='_blank'><h1>{props.myData.login}</h1></a>
                <h4>{props.myData.name}</h4>
                <p>{props.myData.bio}</p>
                <p>Followers: {props.myData.followers}</p>
                <p>Following: {props.myData.following}</p>
            </div>
            

        </div>
    )
}

export default Me;