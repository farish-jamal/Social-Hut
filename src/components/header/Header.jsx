import React from 'react'
import logo from "../../assests/logo.png"
import "./Header.css"
import FitbitIcon from '@mui/icons-material/Fitbit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Icons from './icons/Icons';
import AppsIcon from '@mui/icons-material/Apps';

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <img src={logo} alt="logo" />
            <input type="text" placeholder='Explore Stories'/>
        </div>
        <div className="header_right">
            <div className="hedader_rightIcons">
               <Icons Icon={HomeIcon} text="Home" />
               <Icons Icon={FitbitIcon} text="Space" />
               <Icons Icon={EmailIcon} text="Messages" />
               <Icons Icon={NotificationsIcon} text="Notification" />
            </div>
            <div className="header_rightProfile">
              <div className="header_profile">
                <Avatar style={{width: "23px", height: "23px"}}/>
                 <p>Farish Jamal</p>
                <ArrowDropDownIcon />
              </div>
              <AppsIcon />
            </div>
        </div>
    </div>
  )
}

export default Header