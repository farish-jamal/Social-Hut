import React from 'react'

function ActionIcons({Icon , title, color}) {
  return (
    <div className="icon_desc">
        <Icon style={{width: "20px", height: "20px", marginLeft: "4px", color: color}}/>
        <p>{title}</p>
    </div>
  )
}

export default ActionIcons