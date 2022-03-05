import React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import Footer from '../components/footer'
import Relation from '../images/services/rationalizaion.jpg'
import Network from '../images/services/networking.jpg'
import Support from '../images/services/support.jpg'
import Security from '../images/services/security.jpg'
import Management from '../images/services/management.jpg'
import Performance from '../images/services/performance.jpg'
import Backup from '../images/services/backup.jpg'
import Virtualization from '../images/services/virtualization.jpg' 
import Consulting from '../images/services/consulting.jpg'
import Cloud from '../images/services/cloud.jpg'
import BgImage from '../images/bg/solutions-page-banner.jpg'
import SocialIconsFooter from '../components/social-icons-footer'
import Consulting1 from '../images/services/consulting.jpg'
import Implementation from '../images/services/implementation.jpeg'
import Applications from '../images/services/applications.jpg'

const SolutionsPage = () => {
    return (
        <Layout pageTitle="Services">
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
                                <h2>Services by  <span> PragICTS</span></h2>
                                <div className="horizonral-subtitle"><span>Services</span></div>
                            </div>
                            <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                        </div>
                    </section>
                   
                    <section className="dark-bg no-padding">
                        <div className="hidden-info-wrap-bg">
                            <div className="bg-ser">
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <div className="hidden-info-wrap">
                            <div className="hidden-info fl-wrap">
                                <div className="hidden-works-list fl-wrap">
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Consulting1}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>CONSULTING</h3>
                                                <p>Consulting on your cloud requirements, strategy, and roadmap. Includes context analysis, business alignment, technology selection, migration/transformation, implementation, management, and support.</p>
                                                
                                                <div className="clearfix"></div>
                                                <span className="serv-number">01.</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Implementation}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>IMPLEMENTATION</h3>
                                                <p>Provisioning, configuration, training, and handover of Cloud platform across IaaS, SaaS, Paas, and bespoke configurations.</p>
                                            
                                               
                                                <span className="serv-number">02.</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Management}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>MANAGEMENT & SUPPORT</h3>
                                                <p>Complete management and support of your cloud infrastructure as per SOP and Service levels across remote (on-shore & off-shore), on-premise, and hybrid service delivery options.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">03.</span>
                                            </div>
                                        </a>
                                    </div>
                              
                                </div>
                            </div>
                        </div>
                        <div className="fl-wrap limit-box"></div>
                    </section>

                    <SocialIconsFooter />
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default SolutionsPage
