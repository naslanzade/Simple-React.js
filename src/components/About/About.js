import React, { useState } from 'react';
import './About.css';
import first from '../assets/images/Group12.svg';
import second from '../assets/images/Group7.svg';
import third from '../assets/images/Group5.svg';


function About() {

    return (
        <>
            <div className='about-part' id='about'>
                <div className='text'>
                    <div className='heading'>
                        <h2>How does it works</h2>
                    </div>
                    <div className='title'>
                        <h6>One theme that serves as an easy-to-use operational toolkit
                            that meets customer's needs.</h6>
                    </div>
                </div>
                <div className='card-part'>
                    <div className='card'>
                        <img src={first} className='img-icon' />
                        <h5>Speed
                            Optimisation</h5>
                        <p>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                        <a href="">Read more</a>
                    </div>
                    <div className='card'>
                        <img src={second} className='img-icon' />
                        <h5>SEO and
                            Backlinks</h5>
                        <p>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                        <a href="">Read more</a>
                    </div>
                    <div className='card'>
                        <img src={third} className='img-icon' />
                        <h5>Content
                            Marketing</h5>
                        <p>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                        <a href="">Read more</a>
                    </div>
                </div>
            </div>

        </>
    )
}


export default About;