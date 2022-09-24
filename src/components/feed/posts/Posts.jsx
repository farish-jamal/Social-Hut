import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import LoopIcon from '@mui/icons-material/Loop';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import "./Posts.css"
import ActionIcons from './Action Icons/ActionIcons';

function Posts() {
  return (
    <>
    <div className="feed_bottom">
        <div className="feed_header">
            <div className="feed_description">
                <Avatar />
                <div className="feed_user">
                    <div className="feed_batch">
                    <p>Farish Jamal</p>
                        <VerifiedIcon style={{width: "20px", color: "#1DA1F2"}}/>
                        <span>@farishjamal</span>
                    </div>
                    <p>12/10/22 at 1:20pm</p>
                </div>
            </div>
                <MoreHorizIcon className='feed_icon'/>
        </div>
        <div className="feed_message">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, labore! Quisquam nostrum quam fugit rerum perferendis veritatis sint neque vero quaerat at, necessitatibus odit eius nemo esse praesentium earum quod.</p>
        </div>
        <div className="feed_img">
            <img src="https://picsum.photos/200/60?grayscale" alt="feed-image" />
        </div>
        <div className="feed_bottomIcons">
            <div className="bottom_left">
                <FavoriteIcon style={{width: "20px", height: "20px", background: "red", borderRadius: "50%", padding: "2px", marginLeft: "4px"}}/>
                <LoopIcon style={{width: "20px", height: "20px", background: "green", borderRadius: "50%", padding: "2px", marginLeft: "4px"}}/>
                <IosShareIcon style={{width: "20px", height: "20px", background: "#1DA1F2", borderRadius: "50%", padding: "2px", marginLeft: "4px"}}/>
                <p>241k</p>
            </div>
            <div className="bottom_right">
                    <p>45 Comments</p>
            </div>
        </div>
        <div className="bottom_actionButton">
            <ActionIcons Icon={FavoriteIcon} title="Like"/>
            <ActionIcons Icon={LoopIcon} title="Reshare Post"/>
            <ActionIcons Icon={InsertCommentIcon} title="Comment"/>
            <ActionIcons Icon={IosShareIcon} title="Share"/>
        </div>
    </div>
    </>
  )
}

export default Posts