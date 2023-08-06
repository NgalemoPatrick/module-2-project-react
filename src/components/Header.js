import React from "react";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <section className="header-style">
      <div className="title">
        <div className="name">FABRICE NGALEMO</div>
        <h4>Software Engineer</h4>
      </div>

      <div className="social-link">
        <div className="git">
          <FaGithub></FaGithub>
          <a href="https://github.com/NgalemoPatrick">Check my GitHub</a>
        </div>
        <div className="linked">
          <FaLinkedin></FaLinkedin>
          < a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">Check My Linkedin</a>
        </div>

        {/* <img src="" alt="github" className="githut" /> */}

        {/* <img
          src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-xh9ebifw.png"
          alt="Linkedin"
          className="linkedin"
        /> */}
      </div>

      <div className="my-resume">Resume</div>
    </section>
  );
};

export default Header;
