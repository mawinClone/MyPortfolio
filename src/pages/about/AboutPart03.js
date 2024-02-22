import React from "react";
import "./AboutPart03.css";
import kululuPic from "../../assets/images/kululu-profile.jpg";
import unityPic from "../../assets/images/Unity_Logo.png";
import csPic from "../../assets/images/CSharp.png";
import javaPic from "../../assets/images/java.png";
import reactPic from "../../assets/images/reactlogo.png";
import htmlPic from "../../assets/images/html-logo.png";
import cssPic from "../../assets/images/css-logo.png";
import jsPic from "../../assets/images/jslogo.png";
import mongoPic from "../../assets/images/mongodblogo.png";
import nodePic from "../../assets/images/nodejs-logo.png";
import expressPic from "../../assets/images/expresslogo.png";
import postmanPic from "../../assets/images/postmanlogo.png";
import gitPic from "../../assets/images/gitlogo.png";


const AboutPart03 = () => {
  return (
    <div className="AboutPart03">
      <p style={{ textAlign: "center", color:"white", fontSize:"30px" }}>My Skills</p>
      <div className="skill-container">
        <div className="skill-item">
          <div className="item-logo">
            <img
              src={unityPic}
              style={{ width: "40%", borderRadius: "5px" }}
            ></img>
          </div>

          <div className="item-name">Unity</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <img src={csPic} style={{ width: "70%" }}></img>
          </div>
          <div className="item-name">C#</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <img src={javaPic} style={{ width: "35%" }}></img>
          </div>
          <div className="item-name">JAVA</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <img src={reactPic} style={{ width: "37%" }}></img>
          </div>
          <div className="item-name">React</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"10px",height:"100%",width:"100%"}}>
              <img src={htmlPic} style={{ width: "25%" }}></img>
              <img src={cssPic} style={{ width: "25%" }}></img>
            </div>
            
          </div>
          <div className="item-name">HTML&CSS</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <img src={jsPic} style={{ width: "30%", borderRadius:"3px"}}></img>
          </div>
          <div className="item-name">JavaScript</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <img src={mongoPic} style={{ width: "35%" }}></img>
          </div>
          <div className="item-name">MongoDB</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <img src={nodePic} style={{ width: "30%" }}></img>
          </div>
          <div className="item-name">Node.js</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <img src={expressPic} style={{ width: "35%" }}></img>
          </div>
          <div className="item-name">Express</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <img src={postmanPic} style={{ width: "40%" }}></img>
          </div>
          <div className="item-name">Post Man</div>
        </div>
        <div className="skill-item">
          <div className="item-logo">
            <img src={gitPic} style={{ width: "35%" }}></img>
          </div>
          <div className="item-name">Git</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPart03;
