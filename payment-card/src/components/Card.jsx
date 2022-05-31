import React from 'react'
// import { GrAmazon } from 'react-icons/gr';
// import { AiOutlineArrowRight } from 'react-icons/ai';
import "./card.css"


const Card = ({date,textName,logo,desc,arrlogo}) => {
    // const date = new Date();
  return (
    <div>
      <div className="container">
          <div className="header">
               <p>{date}</p>
               <div className="logo">{logo}</div>
          </div>
          <div className='button'>
          <button className='btn'>Case Study</button>
          </div>
          <div className="heading">
              <h1>{textName}</h1>
          </div>
          <div className="text">
              <h2>Pay</h2>
          </div>
          <div className="footer">
              <div className="text">
                  <p>{desc}</p>
              </div>
              <div className="logo">{arrlogo}</div>
          </div>

      </div>
    </div>
  )
}

export default Card
