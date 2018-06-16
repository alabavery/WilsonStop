import React from 'react';
import '../resources/css/style.css';
import RasberryPiLogo from '../resources/images/raspberrypilogo.png';

export const Header = props => {
  return (
    <div className="header">
      <img src={RasberryPiLogo}/>
      <span><strong>pi</strong> train tracker<a id="small"> sm</a> <a id="yellow">estimated arrivals</a></span>
    </div>
  );
};