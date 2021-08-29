import React from 'react';


function Profile({name, joined_date}) {
    return(
        <div>
            <h1>{name}</h1>
            <p>{joined_date}</p>

        </div>
    )
}

export default Profile;