import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import React from 'react'
import logo from '../../assets/Mars.svg'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#how">How does it work?</a></p>
    <p><a href="#possibility">possibilities</a></p>
    <p><a href="#reserve">Reservations</a></p>
  </>
)

// BEM css

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="mars__navbar">
      <div className="mars__navbar-links">
        <div className="mars__navbar-links_logo">
          <img src={logo} alt="logo" width="125px"/>
        </div>
        <div className="mars__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="mars__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="mars__navbar-menu">
        {toggleMenu
         ?<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
         :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="mars__navbar-menu_container scale-up-center">
            <div className="mars__navbar-menu_container-links">
              <Menu />
              <div className="mars__navbar_menu-container-links-sign">
                <p>Sign in</p>
               <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar