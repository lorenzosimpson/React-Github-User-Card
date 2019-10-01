import React from 'react';
import Me from './Me';
import Card from './Card';

const CardContainer = props => {
    console.log(props.myData)
    const followers = props.followersData;
    console.log(followers, 'followers')
    return (
        <div className='card-container'>
            <Me myData={props.myData} />
            {props.followersData.map(follower => {
                return (
                    <Card 
                    login={follower.login}
                    url={follower.url}
                    avatarUrl={follower.avatar_url}
                    />
                )
            })}
            
        </div>
        );
}

export default CardContainer;