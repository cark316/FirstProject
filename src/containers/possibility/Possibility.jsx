import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.jpg'

const Possibility = () => {
  return (
    <div className="mars__possibility section__padding" id="possibility">
      <div className="mars__possibility-image">
        <img src={possibility} alt="possibility"/>
      </div>
      <div className="mars__possibility-content">
        <h4>Join now!</h4>
        <h1 className="gradient__text">Possibilities are beyond your imagination!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h4>Join now!</h4>
      </div>
    </div>
  )
}

export default Possibility