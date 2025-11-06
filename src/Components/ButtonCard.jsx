import React from 'react';
import './ButtonCard.css';

export const ButtonCard = ({ 
  title, 
  description, 
  onClick, 
  topText, 
  bottomText1, 
  className   
}) => {
  return (
    <button className={`buttonCard ${className || ''}`} onClick={onClick}>
      <div className="cardContent">
        <h3>{title || topText}</h3>
         <p>{description || bottomText1}</p>
      </div>
    </button>
  );
};
