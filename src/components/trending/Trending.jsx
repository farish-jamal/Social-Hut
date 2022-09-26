import React from 'react'
import "./Trending.css"
import SettingsIcon from '@mui/icons-material/Settings';
import TrendingChild from './TrendingChild/TrendingChild';

function Trending() {
  return (
    <div className='trending'>
        <div className="trending_top">
          <p>Trend for you</p>
          <SettingsIcon />
        </div>
        <p className='trending_heading'>Trending In India</p>
        <TrendingChild title="Virat Kohli" number="24.3k"/>
        <TrendingChild title="Jamtara S2" number="4.9k"/>
        <TrendingChild title="Jio Fiber" number="45.1k"/>
        <TrendingChild title="T-20 World Cup" number="113k"/>
        <TrendingChild title="Flipkart" number="103k"/>
        <TrendingChild title="IND vs PAK" number="143k"/>
        <TrendingChild title="Friday Eve" number="113k"/>
        <TrendingChild title="Monday Motivation" number="113k"/>
        <p className='trending_footer'>Show More</p>
    </div>
  )
}

export default Trending