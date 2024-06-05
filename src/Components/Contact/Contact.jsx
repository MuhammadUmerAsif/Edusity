import React from 'react'
import './Contact.css'
import { Button } from '../Button/Button'

import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import msg_icon from '../../assets/msg-icon.png'



export const Contact = () => {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", import.meta.env.VITE_APP_Access_key);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Mail Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className='left-side'>
        <h2>Send us a message <img src={msg_icon} alt='msg'/></h2>
        <p>
            Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt='mail'/>Contact@Edusity.com</li>
            <li><img src={phone_icon} alt='phone'/>+1 123-456-7890</li>
            <li><img src={location_icon} alt='location'/>77 Massachusetts Ave, Cambridge MA 02139, United States</li>
        </ul>
        </div>
        <div className='right-side'>
            <form action="" className='form' onSubmit={onSubmit}>
                <label htmlFor='name'>Name</label>
                <input id='name' type="text" name="name" required placeholder="Enter Your Name" />
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' name="email" required placeholder="Enter Your Email" />
                <label htmlFor='message'>Message</label>
                <textarea name="message" id="message" required rows="5" placeholder="Enter Your Message"></textarea>
                <Button 
                    text='Submit'
                    bgClr='#254336'
                    color='#DAD3BE'
                    hoverBgClr='#6B8A7A'
                    hoverClr='#DAD3BE'
            />
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
