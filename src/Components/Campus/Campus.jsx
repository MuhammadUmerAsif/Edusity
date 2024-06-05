import React from 'react'
import './Campus.css'
import cam_image1 from '../../assets/gallery-1.png'
import cam_image2 from '../../assets/gallery-2.png'
import cam_image3 from '../../assets/gallery-3.png'
import cam_image4 from '../../assets/gallery-4.png'
import btnArror from '../../assets/dark-arrow.png'
import {Button} from '../Button/Button'
export const Campus = () => {
  return (
    <div className='campus'>
        <div className='campus-img'>
            <img src={cam_image1} alt=''></img>
            <img src={cam_image2} alt=''></img>
            <img src={cam_image3} alt=''></img>
            <img src={cam_image4} alt=''></img>
        </div>
        <div className='campus-buton-container'>
            <Button text='See more here'
            bgClr='#254336'
            color='#DAD3BE'
            hoverBgClr='#6B8A7A'
            hoverClr='#DAD3BE'
            arrow
            />
        </div>
    </div>
  )
}
