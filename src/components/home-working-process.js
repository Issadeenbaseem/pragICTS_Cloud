import React, {useEffect, useRef} from "react"

const HomeWorkingProcess = () => {

    return (
        <section style={{ paddingTop: '0px' }} id="process" data-scrollax-parent="true">
            <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }"><span>//</span>How We Engage</div>
            <div className="container">
                <div className="section-title fl-wrap">
                    <h3>How We Engage</h3>
                    <h2>Simplified   Engagement   <span>Process</span></h2>
                    <p>Our engagement process is kept to the bare minimum to be effective, pragmatic and auditable. This further also tailored to the specific context of the client, requirements and the KPIs for effective delivery. </p>
                </div>
                <div className="process-wrap fl-wrap">
                    <ul>
                        <li>
                            <div className="time-line-icon">
                                <i className="fab pragicts-analysis-icon"></i>
                            </div>
                            <h4>Familiarization</h4>
                            <div className="process-details">
                                {/* <h6>Duis autem vel eum iriure dolor</h6> */}
                                <p>Understand the issues, requirements, business objectives, and scope. Provide a proposition or decline.</p>
                                {/* <a href="#">More Details</a> */}
                            </div>
                            <span className="process-numder">01.</span>
                        </li>
                        <li>
                            <div className="time-line-icon">
                                <i className="fal pragicts-requirements-articulation-icon"></i>
                            </div>
                            <h4>Requirements</h4>
                            <div className="process-details">
                                {/* <h6>In ut odio libero, at vulputate urna. </h6> */}
                                <p>Elicit and articulate the requirements pertaining to business objectives, technical, constraints, current and future requirements.</p>
                                {/* <a href="#">More Details</a> */}
                            </div>
                            <span className="process-numder">02.</span>
                        </li>
                        <li>
                            <div className="time-line-icon">
                                <i className="fal pragicts-design-icon"></i>
                            </div>
                            <h4>Engineering</h4>
                            <div className="process-details">
                                {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                                <p>Develop the systems with close engagement with the client to ensure that what is developed and delivered is in line with the expectations and KPI of the client</p>
                                {/* <a href="#">More Details</a> */}
                            </div>
                            <span className="process-numder">03.</span>
                        </li>
                        <li>
                            <div className="time-line-icon">
                                <i className="fal pragicts-support-icon"></i>
                            </div>
                            <h4>Support</h4>
                            <div className="process-details">
                                {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                                <p>Provide support to maintain and sustain the solution for constant yield and performance.</p>
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

export default HomeWorkingProcess
