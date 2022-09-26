import React from 'react'
import { Avatar } from '@mui/material'
import "./Follow.css"

function Follow({name, username}) {
  return (
    <div className="bottom_follow">
        <Avatar style={{width: "30px", height: "30px"}}/>
        <div className="bottom_name">
            <p className="name_name">{name}</p>
            <p className="name_username">@{username}</p>
        </div>
        <button>Follow</button>
    </div>
  )
}

export default Follow