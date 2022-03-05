import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const HomeAbout = () => {

    return (
        <section data-scrollax-parent="true" id="overview">
            <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" >Overview<span>//</span></div>
                <div className="container">
                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="main-about fl-wrap">
                           
                            <h2> <span>Expediting </span>  Business Outcomes</h2>
                            <p>Cloud offers many a path, choices and alternatives from IaaS (Infrastructure as a Service), SaaS (Software as a Service), PaaS (Platform as a Service) and also bespoke configurations. Every implementation is unique to the client's context and requirements. The path to take depends on many a factor including the current IT context and investments, technology and software stack, business goals and objective, etc.</p>
                            <p>This requires both depth and breadth of expertise and experience to articulate a sensible cloud roadmap, see it through the implementation and the effective management and support of such implementation. The benefits of such exercise must be felt by the business in terms of cost and value generated.</p>
                            <p>We can work with you on your cloud journey to have a successful and meaningful implementation. We are a technology agnostic and solutions-focused company and have the freedom to articulate solutions which is non-bias and merit derived.</p>
                           
                           <p>Talk to us and experience the difference we can bring on board.</p>
                           
                            {/* <a href="portfolio.html" className="btn float-btn flat-btn color-btn">My Portfolio</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-parallax-module" data-position-top="90"  data-position-left="25" data-scrollax="properties: { translateY: '-250px' }"></div>
            <div className="bg-parallax-module" data-position-top="70"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
            <div className="sec-lines"></div>
        </section>
    )
}

export default HomeAbout
