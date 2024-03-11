import React from "react";
import "./AboutPart01.css";
// import kululuPic from '../../assets/images/kululu-profile.jpg'
import profilePic from '../../assets/images/profilePic.jpg'

import { TypeAnimation } from "react-type-animation";

const AboutPart01 = () => {
  return (
    <div className="AboutPart01">
      <div className="profile-container">
        <div className="profile-detail">
            <p>Hello World!</p>
            {/* <p>I'M FULLSTACK DEVELOPER</p>
            <p>WITH EXPERTISE IN WEB AND GAME DEVELOPMENT</p> */}

            <div>
              <p style={{display:"inline-block", marginRight:"30px"}}>I'm</p>
            <TypeAnimation
              sequence={[
                "Mawin, Nattawat Mittajit",
                1000,
                "Game Developer",
                1000,
                "FullStack Programmer",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            //  style={{color:"white", fontSize:"3vw", fontWeight:"bold", display:"inline-block"}}
             className="text-anim"/>
            
            </div>
            
        </div>
        

        <img src={profilePic} ></img>
        {/* <div className="profile-pic">
            <img src={kululuPic} style={{width:"50%"}}></img>
            <h3>kulu kulu kulu</h3>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPart01;
