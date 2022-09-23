import React from 'react'
import "./Icons.css"

function Icons({Icon, text}) {
  return (
    <div className='icons'>
        <Icon />
        <p>{text}</p>
    </div>
  )
}

export default Icons