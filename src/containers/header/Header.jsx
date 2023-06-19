import React from 'react'
import './header.css'
import person from '../../assets/person.svg'
import surface from '../../assets/surface.png'

const Header = () => {
  return (
    <div className="mars__header section__padding" id="home">
      <div className="mars__header-content">
        <h1 className="gradient__text">
          TO THE MARS WE GO!
        </h1>
        <p>
          Embarking on further missions to Mars is an imperative step after our successful ventures. The Red Planet offers unparalleled scientific discoveries, unveiling the mysteries of our origins and the universe. By colonizing Mars, we secure the long-term survival of our species and pave the way for interplanetary travel. Let us embrace this audacious endeavor, pushing boundaries, inspiring innovation, and propelling humanity towards a future filled with endless possibilities.
        </p>
        <div className="mars__header-content__input">
          <input type="email" placeholder="Your email address"></input>
          <button type="button">Join now!</button>
        </div>
        <div className="mars__header-content__people">
          <img src={person} alt="person" />
          <p>500 people have gone so far!</p>
        </div>
      </div>
      <div className="mars__header-image">
        <img src={surface} alt="surface" />
      </div>
    </div>
  )
}

export default Header