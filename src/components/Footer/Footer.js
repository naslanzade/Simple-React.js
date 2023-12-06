import React, { useState } from "react";
import "./Footer.css";
import logo from "../assets/images/Group2.svg";

function Footer() {
    return (
        <>
            <footer className="footer" id="contact">
                <div className="footer-part">
                    <div className="logo">
                        <a href="#home" className="footer-logo">
                            <img src={logo} alt="" />
                            <p>mikayla_beer@feil.name</p>
                            <p>906-179-8309</p>
                        </a>
                    </div>
                    <div className="touch">
                        <h5>Get in Touch</h5>
                        <p>Don’t miss any updates of our new templates and extensions.!</p>
                        <form>
                            <input type="text" name="" value="" placeholder="Email id" className="form-control" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>

                    <div className="address">
                        <h5>Our address</h5>
                        <p>518 Schmeler Neck</p>
                        <p> Bartlett. Illinois</p>
                        <div className="links">
                            <a href="https://www.facebook.com/?locale=az_AZ"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/home"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;
