import React from 'react'
import './PortfolioPart02.css'
import olympicPic from '../../assets/images/experience/olympicPic.png'
import psuPic from '../../assets/images/experience/psuPic2.png'
import magmaPic from '../../assets/images/experience/maxmaPic.jpg'
import innovaPic from '../../assets/images/experience/innovaPic.jpg'


const PortfolioPart02 = () => {
  return (
    <div className='PortfolioPart02'>
      <p style={{marginBlock:"50px", fontSize:"24px"}}>EXPERIENCE</p>

      <div className='ex-list'>
        <div className='ex-item'>
          <img src={olympicPic} style={{width:"100px",borderRadius:"50%"}}></img>
          <p>โอลิมปิกวิชาการ สอวน. คอมพิวเตอร์ ค่าย 2 in 2558</p>
        </div>

        <div className='ex-item'>
          <img src={psuPic} style={{width:"100px",borderRadius:"50%"}}></img>
          <p>Prince of Songkla University , Computer Engineering in 2564</p>
        </div>

        <div className='ex-item'>
          <img src={magmaPic} style={{width:"100px",borderRadius:"50%"}}></img>
          <p>Maxma Game Studio , Game Developer in 2565</p>
        </div>

        <div className='ex-item'>
          <img src={innovaPic} style={{width:"100px",borderRadius:"50%"}}></img>
          <p>Innova Interactive Studio , Game Developer in 2566</p>
        </div>
        
      </div>
    
    
    </div>
  )
}

export default PortfolioPart02