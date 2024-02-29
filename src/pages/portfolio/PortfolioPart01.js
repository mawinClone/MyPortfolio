import React from "react";
import "./PortfolioPart01.css";
import kfPic from '../../assets/images/portfolio/kfPic.jpeg'
import scbPic from '../../assets/images/portfolio/scbPic.jpg'
// import webPic from '../../assets/images/portfolio/webPic.png'
import webPic from '../../assets/images/portfolio/webdev.png'
import githubPic from '../../assets/images/portfolio/githubPic.png'

const PortfolioPart01 = () => {


  const openNewTab = (link) =>{
    window.open(link, "_blank");
  }
  
  return (
    <div className="PortfolioPart01">
      <p style={{marginBottom:"90px"}}>PROJECT SHOWCASE</p>
      <div className="port-container">

        <div className="card">
          <img src={kfPic} />
          <div className="info">
            <h1>Krypto Fighter</h1>
            <p>
              thai nft turn-base game
            </p>
            <button onClick={() => openNewTab('https://kryptofighters.io/')}>Read More</button> 
          </div>
        </div>

        <div className="card">
          <img src={scbPic} />
          <div className="info">
            <h1>SCB Bonus Run</h1>
            <p>
              scb game for collect point and exchange voucher
            </p>
            <button onClick={() => openNewTab('https://www.tiktok.com/@dricesira/video/7242667730871078149')}>Read More</button>
          </div>
        </div>

        <div className="card">
          <img src={webPic} />
          <div className="info">
            <h1>Web App</h1>
            <p>
              web dev with React.js framework
            </p>
            <button onClick={() => openNewTab('https://github.com/mawinClone?tab=repositories')}>Read More</button>
          </div>
        </div>

        <div className="card">
          <img src={githubPic} />
          <div className="info">
            <h1>Github</h1>
            <p>
              some project im dev
            </p>
            <button onClick={() => openNewTab('https://github.com/mawinClone?tab=repositories')}>Read More</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioPart01;
