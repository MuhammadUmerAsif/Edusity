import React, {useRef} from 'react'
import './Testimonials.css'
import { Card } from '../Card/Card'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

const test_user = [
    {
        img: user_1,
        heading: 'Emily Williams 1',
        subheading: 'Edusity, USA',
        text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
        img: user_2,
        heading: 'Emily Williams 2',
        subheading: 'Edusity, USA',
        text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
        img: user_3,
        heading: 'Emily Williams 3',
        subheading: 'Edusity, USA',
        text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
        img: user_4,
        heading: 'Emily Williams 4',
        subheading: 'Edusity, USA',
        text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    }
]

export const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -(100 * (test_user.length - 1) / test_user.length))
            tx -= 100 / test_user.length;
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if (tx < 0)
            tx += 100 / test_user.length;
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className="testimonials">
            <img className='next_btn' src={next_icon} alt='left Arrow' onClick={slideForward} />
            <img className='back_btn' src={back_icon} alt='right Arrow' onClick={slideBackward} />
            <div className='slider'>
                <div className="slide" ref={slider} style={{ width: `${test_user.length * 100}%` }}>
                    {test_user.map(user => (
                        <Card
                            key={user.heading} // Add a key to the mapped components
                            img={user.img}
                            heading={user.heading}
                            subhead={user.subheading}
                            info={user.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
