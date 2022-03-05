import React, { useEffect, useRef } from "react"
import { Link } from 'gatsby'

const Footer = () => {
    const particlesRef = useRef(null)

    return (
        <>
            <div className="height-emulator fl-wrap"></div>
            <footer className="main-footer fixed-footer">
                <div className="footer-inner fl-wrap">
                    <div className="container">
                        <div ref={particlesRef} className="partcile-dec" data-parcount="90"></div>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="footer-title fl-wrap">
                                    <span>PragICTS</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-header fl-wrap"><span>01.</span> Email Us</div>

                                <form  className="custom-form footer-form" action="#" name="contactform" id="contactform">
                                    <fieldset>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label><i className="fal fa-user"></i></label>
                                                <input className="footer-input" type="text" name="name" id="name" placeholder="Your Name *"/>
                                            </div>
                                            <div className="col-md-12">
                                                <label><i className="fal fa-envelope"></i> </label>
                                                <input className="footer-input" type="text"  name="email" id="email" placeholder="Email Address *"/>
                                            </div>
                                            <div className="col-md-12">
                                                <textarea className="footer-input" name="comments"  id="comments" cols="40" rows="3" placeholder="Your Message:"></textarea>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <button className="btn float-btn flat-btn color-btn" id="submit">Send Message</button>
                                    </fieldset>
                                </form>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="footer-header footer-header-contacts fl-wrap"><span>03.</span> Contact Us</div>
                                <div className="footer-box fl-wrap">
                                    <div className="footer-contacts fl-wrap">
                                        <p>General / Marketing</p>
                                        <ul>
                                            <li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:+94 74 271 3262">+94 74 271 3262</a></li>
                                            <li><i className="fal fa-envelope"></i><span>Email :</span><a href="mailto:cloud@pragicts.com">cloud@pragicts.com</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-contacts fl-wrap">
                                        <p>Support</p>
                                        <ul>
                                            <li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:+94 74 270 3262">+94 74 270 32623</a></li>
                                            <li><i className="fal fa-envelope"></i><span>Email :</span><a href="mailto:support@pragicts.com">support@pragicts.com</a></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="footer-contacts fl-wrap">
                                        <p>Escalations</p>
                                        <ul>
                                            <li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:+94 11 70 4598 983 ">+94 70 4598 983 </a></li>
                                            <li><i className="fal fa-envelope"></i><span>Email :</span><a href="mailto:escalations@pragicts.com">escalations@pragicts.com</a></li>
                                        </ul>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ display: 'none' }}>
                            <div className="footer-socilal fl-wrap">
                                <ul >
                                    <li><a href="https://www.linkedin.com/company/pragicts/" target="_blank"><i aria-label='Linkedin' className="fab fa-linkedin"></i></a></li>
                                    <li><a href="https://www.facebook.com/pragicts.ltd" target="_blank"><i aria-label='Facebook' className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.instagram.com/pragicts/" target="_blank"><i aria-label='Instagram' className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/pragictsltd" target="_blank"><i aria-label='Twitter' className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.pinterest.com/pragicts" target="_blank"><i aria-label='Pinterest' className="fab fa-pinterest"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCNYbr4DHBPqeXslkZ6hRruQ" target="_blank"><i aria-label='YouTube' className="fab fa-youtube"></i></a></li>
                                    <li><a href="https://pragicts.blogspot.com/" target="_blank"><i aria-label='YouTube' className="fab fa-blogger"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subfooter fl-wrap">
                    <div className="container">
                        <div className="policy-box">
                            <span>&#169; PragICTS 2021  |  All rights reserved. </span>
                        </div>
                        <a href="#" className="to-top color-bg"><i className="fal fa-angle-up"></i><span></span></a>
                    </div>
                </div>
            </footer>
            <Link className="contact-btn color-bg" to="https://pragicts.com/contact-us" target="_blank"><i className="fal fa-envelope"></i><span>Get in Touch</span></Link>
        </>
    )
}

export default Footer
