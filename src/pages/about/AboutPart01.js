import React from "react";
import "./AboutPart01.css";
import kululuPic from '../../assets/images/kululu-profile.jpg'

const AboutPart01 = () => {
  return (
    <div className="AboutPart01">
      <div className="profile-container">
        <div className="profile-detail">
            <p>Hello World!</p>
            <p>I'M FULLSTACK DEVELOPER</p>
            <p>WITH EXPERTISE IN WEB AND GAME DEVELOPMENT</p>
        </div>

        <img src={kululuPic} ></img>
        {/* <div className="profile-pic">
            <img src={kululuPic} style={{width:"50%"}}></img>
            <h3>kulu kulu kulu</h3>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPart01;
