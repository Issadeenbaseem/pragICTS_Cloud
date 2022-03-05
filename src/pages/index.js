import React from "react"
import HeroSlides from "../components/hero-slides"
import Layout from "../components/layout"
import HomeStats from "../components/home-stats"
import HomeSolutions from "../components/home-solutions"
import HomeAbout from "../components/home-about"
import Footer from "../components/footer"


import HomeRecentProjects from "../components/home-recent-projects"
import HomeClientTestimonials from "../components/home-client-testimonials"
import SocialIconsFooter from "../components/social-icons-footer"

const IndexPage = () => {
    return (
        <Layout
            pageTitle="Cloud | PragICTS"
        >
            <div id="wrapper">
                <div className="scroll-nav-wrap fl-wrap">
                    <div className="scroll-down-wrap">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                        <span>Scroll Down</span>
                    </div>
                    <nav className="scroll-nav scroll-init">
                        <ul>
                            {/* <li><a className="scroll-link act-link" href="#sec1">Hero</a></li> */}
                            <li><a className="scroll-link" href="#overview">Overview</a></li>
                            <li><a className="scroll-link" href="#highlights">Highlights</a></li>
                            <li><a className="scroll-link" href="#services">Services</a></li>
                           
                            {/* <li><a className="scroll-link" href="#projects">Clients</a></li> */}
                            <li><a className="scroll-link" href="#testimonials">Tecnhologies</a></li>
                        </ul>
                    </nav>
                </div>

                <HeroSlides />

                <div className="content">

                    {/* overview section */}
                    <HomeAbout />

                    {/* numbers section */}
                    <HomeStats />

                    {/* solutions  */}
                    <HomeSolutions />

                    {/* video presentation */}
                    {/* <HomeVideo /> */}

                    {/* our working process */}
                    
                    {/* featured projects */}
                    {/* <HomeRecentProjects /> */}

                    {/* client testimonials */}
                    <HomeClientTestimonials />


                    <SocialIconsFooter />
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default IndexPage
