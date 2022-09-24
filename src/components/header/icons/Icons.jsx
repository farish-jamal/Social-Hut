import React from 'react'
import "./Icons.css"

function Icons({Icon, text, color, size, border}) {
  return (
    <div className='icons' style={{border: border}}>
        <Icon style={{color: color}}/>
        <p style={{fontSize: size}}>{text}</p>
    </div>
  )
}

export default Icons