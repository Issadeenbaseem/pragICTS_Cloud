import React from 'react'
import Layout from "../components/layout"
import Footer from '../components/footer'
import { Link } from 'gatsby'
import BgImage from '../images/bg/about-us-page-banner.jpg'
import SocialIconsFooter from '../components/social-icons-footer'
import BiophiliaIcon from '../images/clients/biophilia-icon.png'
import BiophiliaLogo from '../images/clients/biophilia-logo.png'
import TechnomedicsIcon from '../images/clients/technomedics-icon.png'
import TechnomedicsLogo from '../images/clients/technomedics-logo.png'
import AuthenticitiesIcon from '../images/clients/asl-icon.png'
import AuthenticitieslLogo from '../images/clients/asl-logo.png'
import CppGlassIcon from '../images/clients/cppglass-icon.png'
import CppGlasslLogo from '../images/clients/cppglass-logo.png'
import UnicornMetalicsIcon from '../images/clients/unicornmetalics-icon.png'
import UnicornMetalicsLogo from '../images/clients/unicornmetalics-logo.png'

const reviews = [
  
    {
        id: 2,
        text: "PragICTS implements Egnyte's cloud storage solution for cloud-only storage configuration with no local storage option for the Asian Group of Companies ( https://agc.lk/ ).",
        client: 'Asian Group of Companies',
        date: '04th August 2021',
        image: UnicornMetalicsIcon,
        link: 'https://agc.lk/'
    },
    {
        id: 3,
        text: "PragICTS migrate a few specific Google Workspace ( https://workspace.google.com/ ) email facilities to Microsoft Office 365 ( https://www.office.com/ ) for greater cost optimization for the Asian Group of Companies ( https://agc.lk/ ).",
        client: 'Asian Group of Companies',
        date: '13th July 2021',
        image: CppGlassIcon,
        link: 'https://agc.lk/'
    },
    {
        id: 4,
        text: "PragICTS is recognized as an MSP (Managed Service Provider) of Egnyte US ( https://www.egnyte.com/ ) for their cloud services portfolio.",
        client: 'Asian Group of Companies',
        date: '14th June 2021',
        image: UnicornMetalicsIcon,
        link: 'https://www.egnyte.com/'
    },
    {
        id: 5,
        text: "PragICTS migrates Authenticities Sri Lanka's ( https://authencitiessrilanka.com/ ) online cloud assets from GoDaddy ( https://www.godaddy.com/ ) to AWS ( https://aws.amazon.com/ ) for scalability, performance, and security.",
        client: 'Authenticities Sri Lanka',
        date: '14th June 2021',
        image: AuthenticitiesIcon,
        link: 'https://authencitiessrilanka.com/ '
    },
    {
        id: 6,
        text: "PragICTS is recognized as an MSP (Managed Service Provider) of Fortinet US ( https://www.fortinet.com/ ) for their security/cloud products and solutions portfolio.",
        client: 'Partnership',
        date: '02nd April 2021',
        image: AuthenticitiesIcon,
        link: 'https://www.fortinet.com/'
    },
    {
        id: 6,
        text: "PragICTS implements Google Workspace ( https://workspace.google.com/ ) as the primary corporate email facility with personalization for Tools Hub ( https://www.toolshub.lk/ ) .",
        client: 'ToolsHub',
        date: '02nd December 2020',
        image: AuthenticitiesIcon,
        link: 'https://www.toolshub.lk/'
    },
    {
        id: 7,
        text: "PragICTS implements NAS (Network Attached Storage) solution for Authenticities Sri Lanka ( https://authencitiessrilanka.com/ ) deploying NAS solutions by Synology ( https://www.synology.com/en-global ) for centralized data management.",
        client: 'Authenticities Sri Lanka',
        date: '11th September 2018',
        image: AuthenticitiesIcon,
        link: 'https://authencitiessrilanka.com/'
    },
    {
        id: 8,
        text: "PragICTS implements NAS (Network Attached Storage) solution for Asian Group of Companies ( https://agc.lk/ ) deploying NAS solutions by Synology ( https://www.synology.com/en-global ) for centralized data management.",
        client: 'Asian Group of Companies',
        date: '17th October 2017',
        image: AuthenticitiesIcon,
        link: 'https://www.toolshub.lk/'
    },
    {
        id: 9,
        text: "PragICTS implements IT asset tracking and management platform Snipe-IT ( https://snipeitapp.com/ ) for Asian Group of Companies ( https://agc.lk/ ) for effective tracking, management, and performance of the IT function by PragICTS.",
        client: 'Asian Group of Companies',
        date: '16th June 2016',
        image: AuthenticitiesIcon,
        link: ' https://agc.lk/'
    },
    {
        id: 10,
        text: "PragICTS signs an agreement with the Asian Group of Companies ( https://agc.lk/ ) for the setup, design, and management of its total IT infrastructure.",
        client: 'Asian Group of Companies',
        date: '3rd February 2016',
        image: AuthenticitiesIcon,
        link: 'https://agc.lk/'
    },
    {
        id: 11,
        text: "PragICTS implements Google Workspace ( https://workspace.google.com/ ) as the primary corporate email facility with personalization for Asian Group of Companies ( https://agc.lk/ ).",
        client: 'Asian Group of Companies',
        date: '06th May 2015',
        image: AuthenticitiesIcon,
        link: 'https://agc.lk/'
    },
    {
        id: 12,
        text: "PragICTS signs agreement with Authenticities Sri Lanka ( https://authencitiessrilanka.com/ ) for the setup, design, and management of its total IT infrastructure.",
        client: 'Authenticities Sri Lanka',
        date: '16th June 2016',
        image: AuthenticitiesIcon,
        link: 'https://authencitiessrilanka.com/'
    },
    {
        id: 13,
        text: "PragICTS secures the Authenticities Sri Lanka ( https://authencitiessrilanka.com/ ) Internet access through the implementation of Fortinet Firewall Appliance ( https://www.fortinet.com/ ).",
        client: 'Authenticities Sri Lanka',
        date: '19th April 2013',
        image: AuthenticitiesIcon,
        link: 'https://authencitiessrilanka.com/'
    },
    {
        id: 7,
        text: "PragICTS implements Google Workspace ( https://workspace.google.com/ ) as the primary corporate email facility with personalization for Authenticities Sri Lanka ( https://authencitiessrilanka.com/ ).",
        client: 'Authenticities Sri Lanka',
        date: '1st April 2013',
        image: AuthenticitiesIcon,
        link: 'https://authencitiessrilanka.com/ '
    },
]



const AboutUsPage = () => {
    return (
        <Layout pageTitle="News">
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
                    
        <section  data-scrollax-parent="true" id="testimonials">
            <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" >News<span>//</span></div>
            <div className="container">
                <div className="section-title fl-wrap">
                   
                    <h2><span>News</span></h2>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="slider-carousel-wrap text-carousel-wrap fl-wrap">
                <div className="text-carousel-controls fl-wrap">
                    <div className="container">
                        <div className="sp-cont  sp-cont-prev"><i className="fal fa-long-arrow-left"></i></div>
                        <div className="sp-cont   sp-cont-next"><i className="fal fa-long-arrow-right"></i></div>
                    </div>
                </div>
                <div className="text-carousel cur_carousel-slider-container fl-wrap">
                    {reviews.map(review => (
                        <div key={review.id} className="slick-item">
                            <div className="text-carousel-item">
                                {/* <div className="popup-avatar"><img src={review.image} alt={review.client} title={review.client} /></div> */}
                                <div className="listing-rating card-popup-rainingvis" data-starrating2="5"> </div>
                                <div className="review-owner fl-wrap">{review.client} - {review.date} <span></span></div>
                                <p> {review.text}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
            <div className="sec-lines"></div>
        </section>
    )

                    <SocialIconsFooter />
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default AboutUsPage
