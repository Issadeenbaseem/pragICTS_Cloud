import React from 'react'
import NumbersBgImage from '../images/bg/bg-stats.jpg'

const HomeStats = () => {

    return (
        <section style={{ paddingTop: '0px' }} id="highlights" data-scrollax-parent="true">
        <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }"><span>//</span>Highlights</div>
        <div className="container">
            <div className="section-title fl-wrap">
                <h3>Our Highlights</h3>
                <h2> Cloud <span>Highlights</span></h2>
            </div>
            <div className="process-wrap fl-wrap">
                <ul>
                    <li>
                        <div className="time-line-icon">
                            <i className="fab pragicts-analysis-icon"></i>
                        </div>
                        <h4>Established</h4>
                        <div className="process-details">
                            {/* <h6>Duis autem vel eum iriure dolor</h6> */}
                            <p>Impeccable Track Record .</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">01.</span>
                    </li>
                    <li>
                        <div className="time-line-icon">
                            <i className="fal pragicts-requirements-articulation-icon"></i>
                        </div>
                        <h4>Comprehensive Coverage</h4>
                        <div className="process-details">
                            {/* <h6>In ut odio libero, at vulputate urna. </h6> */}
                            <p>All Under One Roof (IaaS | SaaS | PaaS | Bespoke)</p>                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">02.</span>
                    </li>
                    <li>
                        <div className="time-line-icon">
                            <i className="fal pragicts-design-icon"></i>
                        </div>
                        <h4>Technology Agnostic</h4>
                        <div className="process-details">
                            {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                                    <p>Solution Focused</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">03.</span>
                    </li>
                    <li>
                        <div className="time-line-icon">
                            <i className="fal pragicts-support-icon"></i>
                        </div>
                        <h4>Bespoke</h4>
                        <div className="process-details">
                            {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                           <p>Tailored to Exact Requirements</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">04.</span>
                    </li>
                
                    
                </ul>
            </div>
            {/* <div className="fl-wrap mar-top">
                <div className="srv-link-text">
                    <h4>Need more info ? Visit my services page :  </h4>
                    <a href="services.html" className="btn float-btn flat-btn color-btn">My Services</a>
                </div>
            </div> */}
        </div>
        <div className="bg-parallax-module" data-position-top="90"  data-position-left="30" data-scrollax="properties: { translateY: '-150px' }"></div>
        <div className="bg-parallax-module" data-position-top="80"  data-position-left="80" data-scrollax="properties: { translateY: '350px' }"></div>
        <div className="sec-lines">
            <div className="container full-height"><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div></div>
        </div>
    </section>
    )
}

export default HomeStats
