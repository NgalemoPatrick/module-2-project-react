import React from 'react'
import './Header.css'

const Header = () => {
  return <section className="header-style">
            <div className="title">
                <div className="name">FABRICE NGALEMO</div>
                <h4>Software Engineer</h4>
            </div>
        
        <div className="social-link">
                <img src="" alt="github" className="githut" />
                <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-xh9ebifw.png" alt="Linkedin" className="linkedin" />
        </div>

        <div className="my-resume">
            Resume
        </div>

  </section>
}

export default Header