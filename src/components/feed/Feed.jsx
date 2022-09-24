import React from 'react'
import { Avatar } from '@mui/material'
import "./Feed.css"
import Icons from "../header/icons/Icons"
import PhotoIcon from '@mui/icons-material/Photo';
import SendIcon from '@mui/icons-material/Send';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Posts from './posts/Posts';

function Feed() {
  return (
    <div className='feed'>
        <div className="feed_top">
          <div className="feed_input">
          <Avatar />
            <form>
              <input type="text" placeholder="Whats's Happening?"/>
              <input type="text" placeholder="Enter Your Image Url To Post"/>
              <button type='submit'><SendIcon /></button>
            </form>
          </div>
          <div className="feed_icons">
            <Icons Icon={PhotoIcon} text="Photos" color="#00ff00" size="14px"/>
            <Icons Icon={PlayCircleIcon} text="Videos" color="blue" size="14px"/>
            <Icons Icon={DynamicFeedIcon} text="Thread" color="red" size="14px"/>
            <Icons Icon={CalendarMonthIcon} text="Schedule" color="yellow" size="14px"/>
          </div>
        </div>
        <div className="feed__posts">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
    </div>
  )
}

export default Feed