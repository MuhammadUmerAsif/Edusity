import React from 'react'
import './Card.css'
export const Card = ({img,heading,subhead,info}) => {
  return (
    <div className='card'>
        <div className="info">
            <img src={img} alt="" />
            <div>
                <h2>{heading}</h2>
                <span>{subhead}</span>
            </div> 
        </div>
        <p>{info}</p>
    </div>
  )
}
