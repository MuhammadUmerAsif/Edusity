import React, { useState } from 'react';
import whiteArrow from '../../assets/white-arrow.png';
import darkArrow from '../../assets/dark-arrow.png';

export const Button = ({ text, color, bgClr, hoverClr, hoverBgClr, arrow = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    fontSize: '1rem',
    color: isHovered ? hoverClr : color,
    backgroundColor: isHovered ? hoverBgClr : bgClr,
    border: 'none',
    padding: '10px 20px',
    borderRadius: '15px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const imageStyle = {
    width: '20px',
    marginLeft: '10px',
  };

  return (
    <button
      className="btn"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      {arrow && (
        <img
          style={imageStyle}
          src={isHovered ? darkArrow : whiteArrow}
          alt="arrow"
        />
      )}
    </button>
  );
};
