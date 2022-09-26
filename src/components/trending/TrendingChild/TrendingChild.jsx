import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function TrendingChild({title, number}) {
  return (
    <div className='trendingChild'>
        <div className="trendingChild_hastag">
            <p className='hastag'>{title}</p>
            <p className='hastag_number'>{number} post shared</p>
        </div>
        <MoreHorizIcon />
    </div>
  )
}

export default TrendingChild