import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brainLogo from '../../../images/brain.png';

const Logo = () => {
    return (
        <div className="logo-wrapper">
            <Tilt className="logo">
                <img src={brainLogo} alt="Brain Logo"></img>
            </Tilt>
        </div>
    );
}

export default Logo;