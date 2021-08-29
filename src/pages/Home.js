import React from 'react';
import Profile from './../components/Profile';
import CommitMap from './../components/CommitMap';
import XP from './../components/XP'


function Home () {
    const date = new Date().toISOString().slice(0, 10)

    return (
        <div>
            <h2>Home</h2>
            <Profile name={"Pratik Sharma"} joined_date={date} />
            {/* <CommitMap/> */}
            <XP xp={25}/>
        </div>

    )
}

export default Home;