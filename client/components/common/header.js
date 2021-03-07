import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [toggleState, setToggleState] = useState('Nav')

  const navbarAdapt = () => {
    setToggleState(toggleState === 'Nav' ? 'Nav responsive' : 'Nav')
  }

  return (
    <>
      <header>
        <div className="logo">
          <a href="/home">
            <img className="graficLogo" src="images/logo.png" alt="Logo" />
          </a>
        </div>
        <nav>
          <div
            className={`top${toggleState}`}
            onClick={navbarAdapt}
            role="button"
            tabIndex={0}
            onKeyDown={navbarAdapt}
          >
            <Link to="/home">HOME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/location">LOCATION</Link>
            <a className="icon" id="menu" href="#">
              &#9776;
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}

Header.propTypes = {}

export default Header
