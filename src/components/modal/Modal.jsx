import { Button } from '@mui/material'
import React from 'react'
import "./Modal.css"
import LogoutIcon from '@mui/icons-material/Logout';

function Modal() {
  return (
    <div className='modal' id="modal">
        <div className="button_modal">
            <Button variant="contained" size='small' endIcon={<LogoutIcon  />}>Logout</Button>
        </div>
    </div>
  )
}

export default Modal