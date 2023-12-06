import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/Group2.svg'
import image from '../assets/images/Group171.svg'


function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const handleClikc = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <a href="#home" className='navbar-logo'>
                    <img src={logo} alt="" />
                </a>
                <div className='menu-icon' onClick={handleClikc}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="#home" className='item' onClick={closeMobileMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#about" className='item' onClick={closeMobileMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#blog" className='item' onClick={closeMobileMenu}>Blog</a>
                    </li>     
                    <li className='nav-item'>
                        <a href="#contact" className='item' onClick={closeMobileMenu}>Contact us</a>
                    </li>                
                </ul>
            </nav>
            <div className="part" id='home'>
                <h1>Search engine optimisation & Marketing.</h1>
                <h6>
                    Simple is a simple template with a creative design that solves
                    all your marketing and SEO queries.
                </h6>
                <button type="" className="danger mt-2" >Get Started</button>
                <button type="" className="success mt-2" >Learn More</button>
                <div className='image-part'>
                    <img src={image} className="bgImage" />
                </div>

            </div>

        </>
    )
}

export default Navbar;

