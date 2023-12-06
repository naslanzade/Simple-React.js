import React, { useState } from 'react';
import './Blog.css';
import first from '../assets/images/Group95.svg';


function Blog() {
    return (
        <>
            <div className='blog-part' id='blog'>
                <div className='text-blog'>
                    <div className='heading-blog'>
                        <h2>Our case studies</h2>
                    </div>
                    <div className='title-blog'>
                        <h6>Lorem ipsum dolor sit amet, tincidunt vestibulum.</h6>
                    </div>
                </div>

                <div className='card-part-blog'>
                    <div className='card-blog'>
                        <div className='card blue'>
                            <img src={first} className='img-case blue' />
                        </div>
                        <h6>Online Marketing</h6>
                        <p>Seo, Marketing</p>
                    </div>
                    <div className='card-blog'>
                        <div className='card yellow'>
                            <img src={first} className='img-case' />
                        </div>
                        <h6>Web Development</h6>
                        <p>Developing, Designing</p>
                    </div>
                    <div className='card-blog'>
                        <div className='card purple'>
                            <img src={first} className='img-case' />
                        </div>
                        <h6>Web Designing</h6>
                        <p>Designing, Developing</p>
                    </div>
                    <div className='card-blog'>
                        <div className='card green'>
                            <img src={first} className='img-case' />
                        </div>
                        <h6>Software Development</h6>
                        <p>Developing, Designing</p>
                    </div>
                </div>


            </div>
        </>
    )
}


export default Blog;