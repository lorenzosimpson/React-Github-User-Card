import React from 'react';
import Me from './Me';
import Card from './Card';

const CardContainer = props => {
    return (
        <div className='card-container'>
            <Me myData={props.myData} />

            <div className='followers-container'>
                {props.followersData.map(follower => (
                  
                        <Card 
                        key={follower.id}
                        login={follower.login}
                        html_url={follower.html_url}
                        avatarUrl={follower.avatar_url}
                        following={follower.following}
                        />
                  
                ))}
            </div>
        </div>
        );
}

export default CardContainer;