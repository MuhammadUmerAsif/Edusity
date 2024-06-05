import React from 'react'
import './Title.css'
export const Title = ({title,subtitle}) => {
  return (
    <div className='title'>
        <p>{title}</p>
        <h2>{subtitle}</h2>
    </div>
  )
}
