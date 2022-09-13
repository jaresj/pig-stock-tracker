import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'

function Newsfeed() {
  return (
    <div className='newfeed'>
        <div className="newsfeed__container">
            <div className="newsfeed__chartSection">
                <div className="newsfeed__portfolioValue">
                    <h1>$114,000</h1>
                    <p>+$44.03</p>
                </div>
                <div className="newsfeed__chart">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed