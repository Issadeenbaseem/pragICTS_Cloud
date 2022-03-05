import React from 'react'
import Layout from "../../components/layout"
import { Link } from "gatsby"
import Footer from '../../components/footer'
import SoftwareImage from '../../images/services/software.jpg'
import InfrastructureImage from '../../images/services/infrastructure.jpg'
import CloudImage from '../../images/services/cloud.jpg'
import BgImage from '../../images/bg/sd-service-page-banner.jpg'
import SocialIconsFooter from '../../components/social-icons-footer'
import { StaticImage } from "gatsby-plugin-image"

const SoftwareDevelopmentService = () => {
    return (
        <Layout pageTitle="Software Development Service">
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
                        <Link to="/services" className="single-page-fixed-row-link"><i className="fal fa-arrow-left"></i> <span>Back to services</span></Link>
                    </div>

                    <section className="parallax-section dark-bg sec-half parallax-sec-half-right" data-scrollax-parent="true">
                        <div className="bg par-elem"  data-bg={BgImage} data-scrollax="properties: { translateY: '30%' }"></div>
                        <div className="overlay"></div>
                        <div className="pattern-bg"></div>
                        <div className="container">
                            <div className="section-title">
                                <h2>Software  <span> Development</span></h2>
                                <div className="horizonral-subtitle"><span>Services</span></div>
                            </div>
                            <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                        </div>
                    </section>

                    <section  data-scrollax-parent="true" id="sec1">
                        <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" >Technologies<span>//</span></div>
                        <div className="container">
                            <div className="section-title fl-wrap">
                                <h2>Software <span>Technologies</span></h2>
                                <p>Technology Competencies at PragICTS</p>
                            </div>
                        </div>
                        <div className="fl-wrap">
                            <div className="container">
                                <ul className="client-list client-list-white">
                                    <li><a target="_blank" href="https://opensource.com/" target="_blank"><StaticImage src="../../images/technologies/opensource.png" className='respimg' alt="Open Source" title="Open Source" /></a></li>
                                    <li><a target="_blank" href="https://www.w3schools.com/html/" target="_blank"><StaticImage src="../../images/technologies/html5.png" className='respimg' alt="HTML5" title="HTML5" /></a></li>
                                    <li><a target="_blank" href="https://www.w3schools.com/css/" target="_blank"><StaticImage src="../../images/technologies/css3.png" className='respimg' alt="CSS3" title="CSS3" /></a></li>
                                    <li><a target="_blank" href="https://www.w3schools.com/js/DEFAULT.asp" target="_blank"><StaticImage src="../../images/technologies/js.png" className='respimg' alt="Javascript" title="Javascript" /></a></li>
                                    <li><a target="_blank" href="https://angularjs.org/" target="_blank"><StaticImage src="../../images/technologies/angular.png" className='respimg' alt="Angular" title="Angular" /></a></li>
                                    <li><a target="_blank" href="https://reactjs.org/" target="_blank"><StaticImage src="../../images/technologies/reactjs.png" className='respimg' alt="React JS" title="React JS" /></a></li>
                                    <li><a target="_blank" href="https://vuejs.org/" target="_blank"><StaticImage src="../../images/technologies/vuejs.png" className='respimg' alt="VueJS" title="VueJS" /></a></li>
                                    <li><a target="_blank" href="https://www.php.net/" target="_blank"><StaticImage src="../../images/technologies/php.png" className='respimg' alt="PHP" title="PHP" /></a></li>
                                    <li><a target="_blank" href="https://nodejs.org/en/" target="_blank"><StaticImage src="../../images/technologies/nodejs.png" className='respimg' alt="NodeJS" title="NodeJS" /></a></li>
                                    <li><a target="_blank" href="https://strapi.io/" target="_blank"><StaticImage src="../../images/technologies/strapi.png" className='respimg' alt="Strapi" title="Strapi" /></a></li>
                                    <li><a target="_blank" href="https://nextjs.org/" target="_blank"><StaticImage src="../../images/technologies/nextjs.png" className='respimg' alt="NextJS" title="NextJS" /></a></li>
                                    <li><a target="_blank" href="https://nuxtjs.org/" target="_blank"><StaticImage src="../../images/technologies/nuxtjs.png" className='respimg' alt="NuxtJS" title="NuxtJS" /></a></li>
                                    <li><a target="_blank" href="https://www.gatsbyjs.com/" target="_blank"><StaticImage src="../../images/technologies/gatsby.png" className='respimg' alt="Gatsby" title="Gatsby" /></a></li>
                                    <li><a target="_blank" href="https://svelte.dev/" target="_blank"><StaticImage src="../../images/technologies/svelte.png" className='respimg' alt="Svelte" title="Svelte" /></a></li>
                                    <li><a target="_blank" href="https://laravel.com/" target="_blank"><StaticImage src="../../images/technologies/laravel.png" className='respimg' alt="Laravel" title="Laravel" /></a></li>
                                    <li><a target="_blank" href="https://flutter.dev/" target="_blank"><StaticImage src="../../images/technologies/flutter.png" className='respimg' alt="Flutter" title="Flutter" /></a></li>
                                    <li><a target="_blank" href="https://www.mysql.com/" target="_blank"><StaticImage src="../../images/technologies/mysql.png" className='respimg' alt="MySQL" title="MySQL" /></a></li>
                                    <li><a target="_blank" href="https://www.mongodb.com/" target="_blank"><StaticImage src="../../images/technologies/mongodb.png" className='respimg' alt="MongoDB" title="MongoDB" /></a></li>
                                    <li><a target="_blank" href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank"><StaticImage src="../../images/technologies/sqlserver.png" className='respimg' alt="SQL Server" title="SQL Server" /></a></li>
                                    <li><a target="_blank" href="https://www.opencart.com/" target="_blank"><StaticImage src="../../images/technologies/opencart.png" className='respimg' alt="Opencart" title="Opencart" /></a></li>
                                    <li><a target="_blank" href="https://magento.com/" target="_blank"><StaticImage src="../../images/technologies/magento.png" className='respimg' alt="Magento" title="Magento" /></a></li>
                                    <li><a target="_blank" href="https://bagisto.com/" target="_blank"><StaticImage src="../../images/technologies/bagisto.png" className='respimg' alt="Bagisto" title="Bagisto" /></a></li>
                                    <li><a target="_blank" href="https://www.cybersource.com/en-ap.html" target="_blank"><StaticImage src="../../images/technologies/cybersource.png" className='respimg' alt="Visa Cybersource" title="Visa Cybersource" /></a></li>
                                    <li><a target="_blank" href="https://www.mastercard.com/gateway/about.html" target="_blank"><StaticImage src="../../images/technologies/mastercard.png" className='respimg' alt="Mastercard" title="Mastercard" /></a></li>
                                    <li><a target="_blank" href="https://www.payhere.lk/" target="_blank"><StaticImage src="../../images/technologies/payhere.png" className='respimg' alt="PayHere" title="PayHere" /></a></li>
                                    <li><a target="_blank" href="https://kafka.apache.org/" target="_blank"><StaticImage src="../../images/technologies/kafka.png" className='respimg' alt="Apache Kafka" title="Apache Kafka" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sec-lines"></div>
                    </section>

                    <section style={{ paddingTop: '0' }} data-scrollax-parent="true">
                        <div className="section-subtitle right-pos"  data-scrollax="properties: { translateY: '-250px' }"><span>//</span>Specializations</div>
                        <div className="container">
                            <div className="team-box">
                                <div className="team-photo">
                                    <div className="overlay"></div>
                                    <StaticImage src="../../images/software-development/website.jpg" className='respimg' alt="Website Development" title="Website Development" />
                                </div>
                                <div className="team-info">
                                    <h3>WEBSITE DEVELOPMENT</h3>
                                    <p>
                                        We design and develop websites to fully complement and empower your online presence strategy. Website development is both a science and an art to meet the expectations of the business, stakeholders including the customers, and the metadata for comprehensive online platform capitalization. These websites can be template/framework based or can be fully bespoke ground-up design and development (including the JAM Stack) to meet the context and needs of the discerning customer. Our websites are optimized for device interoperability (responsiveness), HTML compliance, security, search engine capitalization, UI/UX experience, and functional and business relevance.
                                    </p>
                                </div>
                            </div>
                            <div className="team-box">
                                <div className="team-photo">
                                    <div className="overlay"></div>
                                    <StaticImage src="../../images/software-development/web-applications.jpg" className='respimg' alt="Web Applications" title="Web Applications" />
                                </div>
                                <div className="team-info">
                                    <h3>WEB APPLICATION DEVELOPMENT</h3>
                                    <p>
                                    Web-based applications provide convenience for any time, place, and device access with centralized deployment, management, and control. We design and develop web applications for both internet and enterprise-scale with IoT and 3rd party platform integration for seamless automation and productivity.
                                    </p>
                                </div>
                            </div>
                            <div className="team-box">
                                <div className="team-photo">
                                    <div className="overlay"></div>
                                    <StaticImage src="../../images/software-development/mobile-applications.jpg" className='respimg' alt="Mobile Applications" title="Mobile Applications" />
                                </div>
                                <div className="team-info">
                                    <h3>MOBILE APPLICATIONS</h3>
                                    <p>
                                    Mobile is the constant companion device that has become the swiss army knife for all online conveniences from ordering of food, transportation, tickets, etc. It provides better UI/UX granularity for effective operation on mobile devices. We help you design and develop effective mobile applications to meet your enterprise and business needs.
                                    </p>
                                </div>
                            </div>
                            <div className="team-box">
                                <div className="team-photo">
                                    <div className="overlay"></div>
                                    <StaticImage src="../../images/software-development/rich-client-applications.jpg" className='respimg' alt="Windows Applications" title="Windows Applications" />
                                </div>
                                <div className="team-info">
                                    <h3>WINDOWS APPLICATION DEVELOPMENT</h3>
                                    <p>
                                    Windows applications provide a rich UI/UX experience, especially in the enterprise context. We can help you design and develop your next windows application to meet your enterprise and business needs.
                                    </p>
                                </div>
                            </div>
                            <div className="team-box">
                                <div className="team-photo">
                                    <div className="overlay"></div>
                                    <StaticImage src="../../images/software-development/ecommerce.jpg" className='respimg' alt="Ecommerce" title="Ecommerce" />
                                </div>
                                <div className="team-info">
                                    <h3>ECOMMERCE APPLICATION DEVELOPMENT</h3>
                                    <p>
                                    Our eCommerce Application Development vertical supports all the key open source-based eCommerce platforms for all your enterprise and business eCommerce needs. Supported eCommerce platforms include OpenCart, Magento, PrestaShop, Bagisto, ZenCart, XCart, etc. For fuller details refer to our eCommerce vertical website http://ecommerce.pragicts.com/
                                    </p>
                                </div>
                            </div>
                            <div className="team-box">
                                <div className="team-photo">
                                    <div className="overlay"></div>
                                    <StaticImage src="../../images/software-development/software-consulting.jpg" className='respimg' alt="Software Consultancy" title="Software Consultancy" />
                                </div>
                                <div className="team-info">
                                    <h3>SOFTWARE CONSULTING SERVICES</h3>
                                    <p>
                                    We provide software consulting services pertaining to software strastrategy, engineering, rationalization, migration, and optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-parallax-module" data-position-top="50"  data-position-left="20" data-scrollax="properties: { translateY: '-250px' }"></div>
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

export default SoftwareDevelopmentService
