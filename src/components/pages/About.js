import React from "react";
import '../About.css'
import { FaReact, FaJs, FaNodeJs, FaMongoDb, FaPython } from "react-icons/fa";
const about = () => {
  return <section className="profile-img">
    <div className="photo">
        <img src="" alt="My picture" className="my-pic" />
    </div>
    <p>Software Engineer providing freelancing services 
        for programming and designing contents. Navigate the <span>PROJECTS Link </span> 
        to see some of my work. For more information about me please 
        feel free to contact me.
    </p>
    <div className="icons-style">

    </div>
  </section>;
};

export default about;
