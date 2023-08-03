import React from 'react'
import './Header.css'

const Header = () => {
  return <section className="header-style">
            <div className="title">
                <div className="name">FABRICE NGALEMO</div>
                <h4>Software Engineer</h4>
            </div>
        
        <div className="social-link">
                <img src="" alt="GitHub" className="githut" />
                <img src="" alt="Linkedin" className="linkedin" />
        </div>

        <div className="my-resume">
            Resume
        </div>

  </section>
}

export default Header