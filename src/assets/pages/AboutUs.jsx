import React from 'react';
import backgroungImage from '../images/background.png'; 

export default function AboutUs() {
  return (
    <div  className="about-us"
    style={{
      backgroundImage: `url(${backgroungImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '766px', 
      width: '100%', 
    }}>
    <h1>About Us</h1>

  </div>
  );
}
