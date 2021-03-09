import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <nav className="footer-responsive-navbar">
        <Link to="/home">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/location">LOCATION</Link>
      </nav>
      <div className="footer__logo">
        <a href="/home">
          <img src="images/logo.png" alt="logo2" />
        </a>
      </div>

      <div className="social">
        <a href="#">
          <img
            src="images/social_icons/iconfinder_1_Facebook_colored_svg_copy_5296499.png"
            alt="facebookIcon"
          />
        </a>
        <a href="#">
          <img src="images/social_icons/iconfinder_71-github_4202098.png" alt="githubIcon" />
        </a>
        <a href="#">
          <img src="images/social_icons/iconfinder_discord_2308078.png" alt="discordIcon" />
        </a>
        <a href="#">
          <img
            src="images/social_icons/iconfinder_linkedin_circle_color_107178.png"
            alt="linkedinIcon"
          />
        </a>
        <a href="#">
          <img src="images/social_icons/iconfinder_social-56_1591869.png" alt="telegramIcon" />
        </a>
        <a href="#">
          <img src="images/social_icons/iconfinder_twitter_834708.png" alt="twitterIcon" />
        </a>
      </div>
      <p>pc-user1. 2021</p>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
