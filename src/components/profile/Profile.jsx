import { Avatar } from '@mui/material'
import React from 'react'
import Follow from './follow/Follow'
import "./Profile.css"

function Profile() {
  return (
    <div className='profile'>
        <div className="profile_top">
          <img src='https://picsum.photos/200/60?grayscale' alt='bg' />
          <Avatar className='profile_img' style={{width: "50px", height: "50px"}}/>
          <p className="profile_name">Farish Jamal</p>
          <p className="profile_username">@farishjamal</p>
          <div className="profile_follower">
            <div className="followers">
              <p className="number">7654</p>
              <p className="text">Followers</p>
            </div>
            <div className="followers">
              <p className="number">7654</p>
              <p className="text">Followings</p>
            </div>
          </div>
            <div className="button">My Profile</div>
        </div>
        <div className="profile_bottom">
          <p className="top">Who is to follow you</p>
          <Follow name="Aman Ali" username="ripoff"/>
          <Follow name=" Md Ehtesham" username="sam123"/>
          <Follow name="Faisal Eqbal" username="shutterthelens"/>
          <p className="bottom_button">Show More</p>
        </div>
    </div>
  )
}

export default Profile