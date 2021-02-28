import React from 'react';
import fakeBookLogo from '../../images/facebook.logo.jpeg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={fakeBookLogo}/>
            </div>
            <div className='nav-container'>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;