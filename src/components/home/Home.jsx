import React from 'react'
import Header from '../header/Header'
import Profile from '../profile/Profile'
import Trending from '../trending/Trending'
import Feed from "../feed/Feed"
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <Header />
        <div className='home_feed'>
            <Profile />
            <Feed />
            <Trending />
        </div>
    </div>
  )
}

export default Home