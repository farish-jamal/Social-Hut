import React from 'react'

function ActionIcons({Icon , title}) {
  return (
    <div className="icon_desc">
        <Icon style={{width: "20px", height: "20px", marginLeft: "4px"}}/>
        <p>{title}</p>
    </div>
  )
}

export default ActionIcons