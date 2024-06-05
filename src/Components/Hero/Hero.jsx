import React from 'react'
import { ReactTyped } from 'react-typed'
import './Hero.css'
import btnArror from '../../assets/dark-arrow.png'
import {Button} from '../Button/Button'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text hero-container">
            <h1>
            <ReactTyped 
                strings={['We Ensure better education for a better world']}
                typeSpeed={40}
                loop
            />
            </h1>
            <div className='hero-typed'>
                <ReactTyped
                    strings={[
                            'Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.'
                    ]}
                    typeSpeed={20}
                    backSpeed={30}
                    loop
                />
            </div>
            <Button 
                text='Explore More'
                bgClr='#254336'
                color='#DAD3BE'
                hoverBgClr='#DAD3BE'
                hoverClr='#254336'
                arrow
            />
        </div>
    </div>
  )
}
