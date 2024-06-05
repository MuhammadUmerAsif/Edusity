import React from 'react'
import './Programs.css'
import prog_img1 from '../../assets/program-1.png'
import prog_img2 from '../../assets/program-2.png'
import prog_img3 from '../../assets/program-3.png'
import prog_icon_1 from '../../assets/program-icon-1.png'
import prog_icon_2 from '../../assets/program-icon-2.png'
import prog_icon_3 from '../../assets/program-icon-3.png'
export const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={prog_img1}>
        </img>
        <div className="caption">
          Graduation Programs
          <img src={prog_icon_1} alt="" />
        </div>
      </div>
      <div className='program'>
        <img src={prog_img2}></img>
          <div className="caption">
          Master Programs
            <img src={prog_icon_2} alt="" />
        </div>
      </div>
      <div className='program'>
        <img src={prog_img3}>
        </img>
          <div className="caption">
           Post-Graduation Program
            <img src={prog_icon_3} alt="" />
        </div>
      </div>
    </div>
  )
}
