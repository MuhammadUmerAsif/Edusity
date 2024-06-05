import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Button } from '../Button/Button';
import {Link} from 'react-scroll'
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [btnColor, setBtnColor] = useState('#B7B597');
  const [btnBgColor, setBtnBgColor] = useState('#254336');
  const [btnHoverColor, setBtnHoverColor] = useState('#254336');
  const [btnHoverBgColor, setBtnHoverBgColor] = useState('#B7B597');
  const [changeMenuColor, setChangeMenuColor] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setChangeMenuColor(scrollTop > 550);
      setBtnColor(scrollTop > 550 ? '#254336' : '#B7B597');
      setBtnBgColor(scrollTop > 550 ? '#B7B597' : '#254336');
      setBtnHoverColor(scrollTop > 550 ? '#254336' : '#254336');
      setBtnHoverBgColor(scrollTop > 550 ? 'white' : '#B7B597');
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`container ${changeMenuColor ? 'dark-nav' : ''}`}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      {!isMobile || showMenu ? (
        <div className={`menu ${showMenu ? 'show' : ''}`}>
          <ul>
            <li>
              <Link to='hero' smooth={true} offset={0} duration={500}> Home</Link>
            </li>
            <li>
            <Link to='programs' smooth={true} offset={-200} duration={500} > Programs</Link>
            </li>
            <li>
              <Link to='about' smooth={true} offset={-90} duration={500} > About Us</Link>
            </li>
            <li>
            <Link to='campus' smooth={true} offset={-220} duration={500} > Campus</Link>
            </li>
            <li>
            <Link to='testimonials' smooth={true} offset={-290} duration={500} > Testimonials</Link>
            </li>
            <li className='btn-container'>
              <Link to='contact' smooth={true} offset={-180} duration={500}>
              <Button
                text='Contact'
                color={btnColor}
                bgClr={btnBgColor}
                hoverClr={btnHoverColor}
                hoverBgClr={btnHoverBgColor}
              />
              </Link>
            </li>
            {/* <li className='btn-container'>
              <Button
                text='Login/Sign Up'
                color={btnColor}
                bgClr={btnBgColor}
                hoverClr={btnHoverColor}
                hoverBgClr={btnHoverBgColor}
              />
            </li> */}
          </ul>
        </div>
      ) : <div className="menu-icon" onClick={toggleMenu}>
      &#9776;
    </div>}
    </nav>
  );
};
