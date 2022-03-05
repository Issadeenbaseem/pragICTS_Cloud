import React from 'react'
import Layout from "../components/layout"
import Footer from '../components/footer'
import { Link } from 'gatsby'
import BgImage from '../images/bg/contact-us-page-banner.jpg'
import SocialIconsFooter from '../components/social-icons-footer'
import { Formik } from 'formik'
import Axios from 'axios'

const ContactUs = () => {
    return (
        <Layout pageTitle="FAQS">
            <div id="wrapper" className="single-page-wrap">

                <div className="content">
                    <div className="single-page-decor"></div>
                    <div className="single-page-fixed-row">
                        <div className="scroll-down-wrap">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                            <span>Scroll Down</span>
                        </div>
                        <Link to="/" className="single-page-fixed-row-link"><i className="fal fa-arrow-left"></i> <span>Back to home</span></Link>
                    </div>

                    <section className="parallax-section dark-bg sec-half parallax-sec-half-right" data-scrollax-parent="true">
                        <div className="bg par-elem"  data-bg={BgImage} data-scrollax="properties: { translateY: '30%' }"></div>
                        <div className="overlay"></div>
                        <div className="pattern-bg"></div>
                        <div className="container">
                            <div className="section-title">
                            <h2>Common <span>Questions </span></h2>
                                <div className="horizonral-subtitle"><span>FAQS</span></div>
                            </div>
                        </div>
                        <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                    </section>


                    <section data-scrollax-parent="true" className='dark-bg sinsec-dec sinsec-dec2 parallax-section' id="sec2">
                        <div className="container">
                            <div style={{ marginBottom: '0px' }} className="section-title">
                              
                                <div className="horizonral-subtitle"><span>FAQS</span></div>
                            </div>
                            <div className="fl-wrap">
                                <div className="accordion">
                                    <a className="toggle" href="#">What do you exactly mean by Bespoke?<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                            <li>Our services are tailored to the exact needs of our clients in terms of engagement model, scope, resource requirements, technology requirements, etc..</li>
                                            
                                        </ul>
                                    </div>
                                    <a className="toggle" href="#">What are your engagement models?<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                            <li>The exact configuration depends on the client's location and requirement. However, we provide for on-site, remote (includes on-shore and off-shore), and hybrid (bespoke).</li>
                                           
                                        </ul>
                                    </div>
                                    <a className="toggle" href="#"> What do you mean by technology agnostic?<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                       <li>We focus on the solution and not on a particular brand of technology. We select the technology stack based on KPI's and merits and do not have a blind brand affinity.</li>
                                        </ul>
                                    </div>
                                    <a className="toggle" href="#">How do you price and charge?<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                            <li>As a company we want to ensure that all engagements must make the least economic sense for growth and sustainability. We provide very competitive pricing for the value we generate.</li>
                                        </ul>
                                    </div>
                                    <a className="toggle" href="#">How do you ensure constant quality and service levels?<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                            <li>All engagements are based on the clearly defined SOP (Standard Operating Procedure). All tools (systems), resourcing, and procedures are derived and measured on the SOP. SOP is regularly reviewed for optimization for continuous improvements.</li>
                                        </ul>
                                    </div>
                                    <a className="toggle" href="#">How do you manage staff turnover?<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                        <li>we provide a balanced work-life culture with remuneration, training, and development, and certifications. We genuinely value our employees and treat them with care, empathy, objectivity, and never weaver to call a spade a spade. We actively encourage all our interaction with our staff to be forthright and never penalize them for doing so. This has enabled us to maintain a planned and a managed engagement with them which had helped us to maintain service consistency.</li>      
                                        </ul>
                                    </div>
                                    <a className="toggle" href="#">How do you competency consistency across staff?<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                            <li>Each staff member is associate with a clear articulation of their scope of work and competencies. Regular gap analyses are carried out to ensure proper competency levels are maintained through training, certification, and on-the-job training with seniors.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-parallax-module" data-position-top="70"  data-position-left="20" data-scrollax="properties: { translateY: '-250px' }"></div>
                        <div className="bg-parallax-module" data-position-top="40"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
                        <div className="bg-parallax-module" data-position-top="80"  data-position-left="80" data-scrollax="properties: { translateY: '350px' }"></div>
                        <div className="bg-parallax-module" data-position-top="95"  data-position-left="40" data-scrollax="properties: { translateY: '-550px' }"></div>
                        <div className="sec-lines"></div>
                    </section>

                    <SocialIconsFooter />

                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default ContactUs
