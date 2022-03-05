import React from 'react'
import Layout from "../components/layout"
import Footer from '../components/footer'
import { Link } from 'gatsby'
import BgImage from '../images/bg/careers-page-banner.jpg'
import SocialIconsFooter from '../components/social-icons-footer'
import IconHumanity from '../images/icons/humanity.svg'
import IconDiscipline from '../images/icons/discipline.svg'
import IconTeamwork from '../images/icons/teamwork.svg'
import IconSelfConfidence from '../images/icons/selfconfidence.svg'
import IconContent from '../images/icons/content.svg'

const CareersPage = () => {
    return (
        <Layout pageTitle="Careers">
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
                                <h2>Careers at <br/> <span> PragICTS</span></h2>
                                <p>work with us</p>
                                <div className="horizonral-subtitle"><span>Careers</span></div>
                            </div>
                            <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                        </div>
                    </section>

                    <section data-scrollax-parent="true" id="sec1">
                        <div className="section-subtitle left-pos"  data-scrollax="properties: { translateY: '-250px' }" ><span>//</span>careers</div>
                        <div className="container main-about">
                            <p>PragICTS is an Equal Opportunity Employer (EOE).</p>
                            <p>We do not discriminate against any employee or job applicant because of race, color, religion, national origin, sex, physical or mental disability, or age.</p>
                            <p>We strive to be the company for engineering, remuneration, and holidays to ensure that we have an environment with equilibrium for constant innovation, engineering, and content.</p>
                            <p>We seek out people with integrity, potential, passion, and a sense of humor.</p>
                            <p>PragICTS ethos is defined and shaped by the following core values. Values.</p>
                        </div>
                        <div className="container" style={{ paddingLeft: '30px', marginTop: '50px' }}>
                            <div className="section-title fl-wrap">
                                <h2>Core <span> Values</span></h2>
                                <p>Tears have no colours.</p>
                            </div>
                            <div class="serv-carousel-wrap slider-carousel-wrap fl-wrap">
                                <div class="sp-cont  sp-cont-prev"><i class="fal fa-long-arrow-left"></i></div>
                                <div class="sp-cont   sp-cont-next"><i class="fal fa-long-arrow-right"></i></div>
                                <div class="serv-carousel fl-wrap cur_carousel-slider-container core-values-section">
                                    <div className="serv-carousel-item">
                                        <div className="serv-wrap fl-wrap">
                                            <h4 style={{ paddingLeft: '0px' }}>Humanity</h4>
                                            <div className="process-details">
                                                <div className="serv-img">
                                                    <img src={IconHumanity} alt="" />
                                                </div>
                                                <ul>
                                                    <li>The quality or state of being humane.</li>
                                                    <li>Compassion, Empathy, Honesty, Honour, Ethics, Morals, Righteousness, Morality, Right-mindedness, Virtue, Decency, Fairness, Sincerity, Truthfulness, Trustworthiness.</li>
                                                </ul>
                                            </div>
                                            <span className="process-numder">01.</span>
                                        </div>
                                    </div>
                                    <div className="serv-carousel-item">
                                        <div className="serv-wrap fl-wrap">
                                            <h4 style={{ paddingLeft: '0px' }}>Discipline</h4>
                                            <div className="process-details">
                                                <div className="serv-img">
                                                    <img src={IconDiscipline} alt="" />
                                                </div>
                                                <ul>
                                                    <li>Walk the talk, Promise what you can keep.</li>
                                                    <li>Characteristics Planned, Organized, Objectivity, Direct, No-Nonsense, Balanced.</li>
                                                </ul>
                                            </div>
                                            <span className="process-numder">02.</span>
                                        </div>
                                    </div>
                                    <div className="serv-carousel-item">
                                        <div className="serv-wrap fl-wrap">
                                            <h4 style={{ paddingLeft: '0px' }}>Teamwork</h4>
                                            <div className="process-details">
                                                <div className="serv-img">
                                                    <img src={IconTeamwork} alt="" />
                                                </div>
                                                <ul>
                                                    <li>The whole is greater than the sum of its parts.</li>
                                                    <li>Clear Direction, Common Goals, Open and Honest Communication, Support Risk Taking and Change, Accountability, Team Trust, Help Each Other, Play Your Part, Speak Out/Up.</li>
                                                </ul>
                                            </div>
                                            <span className="process-numder">03.</span>
                                        </div>
                                    </div>
                                    <div className="serv-carousel-item">
                                        <div className="serv-wrap fl-wrap">
                                            <h4 style={{ paddingLeft: '0px' }}>Self Confidence</h4>
                                            <div className="process-details">
                                                <div className="serv-img">
                                                    <img src={IconSelfConfidence} alt="" />
                                                </div>
                                                <ul>
                                                    <li>As is our confidence, so is our capacity.</li>
                                                    <li>Passion, Self-assurance, Belief in Oneself, Positiveness, Assurance, Composure, Nerve, Fearless, Bold, Risk-taking, Openness.</li>
                                                </ul>
                                            </div>
                                            <span className="process-numder">04.</span>
                                        </div>
                                    </div>
                                    <div className="serv-carousel-item">
                                        <div className="serv-wrap fl-wrap">
                                            <h4 style={{ paddingLeft: '0px' }}>Content</h4>
                                            <div className="process-details">
                                                <div className="serv-img">
                                                    <img src={IconContent} alt="" />
                                                </div>
                                                <ul>
                                                    <li>One Life, Your Life. You Decide. Make it Meaningful.</li>
                                                    <li>Happy, Patience, Relaxed, Cheerful, Joking, Carefree, Untroubled, Delighted, Smiling, Beaming, Glowing, Satisfied, Gratified, Buoyant, Radiant, Joyous, In good spirits, In high spirits, Lighthearted</li>
                                                </ul>
                                            </div>
                                            <span className="process-numder">05.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-parallax-module" data-position-top="50"  data-position-left="20" data-scrollax="properties: { translateY: '-250px' }"></div>
                        <div className="bg-parallax-module" data-position-top="40"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
                        <div className="bg-parallax-module" data-position-top="80"  data-position-left="80" data-scrollax="properties: { translateY: '350px' }"></div>
                        <div className="bg-parallax-module" data-position-top="95"  data-position-left="40" data-scrollax="properties: { translateY: '-550px' }"></div>
                        <div className="sec-lines"></div>
                    </section>

                    <section data-scrollax-parent="true" className='dark-bg sinsec-dec sinsec-dec2 parallax-section' id="sec2">
                        <div className="container">
                            <div style={{ marginBottom: '0px' }} className="section-title">
                                <h2>Open <span>Vacancies </span></h2>
                                <div className="horizonral-subtitle"><span>Vacancies</span></div>
                            </div>
                            <div className="fl-wrap">
                                <div className="accordion">
                                    <a className="toggle" href="#">Online Marketing<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                            <li>Positions are open from Senior to Junior levels including interns.</li>
                                            <li>You will need to demonstrate your capability and experience.</li>
                                        </ul>
                                    </div>
                                    <a className="toggle" href="#"> University Internships<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                            <li>We offer IT internships with a minimum duration of one year both in Systems Integration and Software Engineering verticals.</li>
                                            <li>We expect basic competency in the core fundamentals in the relevant vertical and language fluency in English.</li>
                                        </ul>
                                    </div>
                                    <a className="toggle" href="#"> Associate Software Engineer<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                            <li>Demonstrable knowledge and experience in the fundamentals of programming, internet and database technology.</li>
                                            <li>Language fluency in English (Verbal + Written)</li>
                                            <li>Academic or Professional qualification / certification relating to Information Technology is an essential (reading or completed).</li>
                                        </ul>
                                    </div>
                                    <a className="toggle" href="#"> Associate Systems Engineer<span></span></a>
                                    <div className="accordion-inner">
                                        <ul>
                                            <li>Demonstrable knowledge and experience in the fundamentals of networking, switches, IP and windows server management.</li>
                                            <li>Language fluency in English (Verbal + Written)</li>
                                            <li>Academic or Professional qualification / certification relating to Information Technology is an essential (reading or completed).</li>
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

                    <section data-scrollax-parent="true" id="sec3">
                        <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" ><span>//</span>Apply Now</div>
                        <div className="container">
                            <div className="fl-wrap mar-top">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="pr-title fl-wrap">
                                            <h3>Apply Now</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div id="contact-form">
                                            <div id="message"></div>
                                            <form  className="custom-form" action="#" name="contactform" id="contactform">
                                                <fieldset>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label><i className="fal fa-user"></i></label>
                                                            <input type="text" name="name" id="name" placeholder="Your Name *"/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label><i className="fal fa-envelope"></i> </label>
                                                            <input type="text"  name="email" id="email" placeholder="Email Address *"/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label><i className="fal fa-mobile-android"></i> </label>
                                                            <input type="text"  name="phone" id="phone" placeholder="Phone"/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label><i className="fab fa-linkedin"></i> </label>
                                                            <input type="text"  name="linkedinurl" id="linkedinurl" placeholder="Linkedin URL"/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>Your CV<i className="fal fa-file"></i> </label>
                                                            <input type="file"  name="resume" id="resume" placeholder="Resume"/>
                                                        </div>
                                                    </div>
                                                    <textarea name="comments"  id="comments" cols="40" rows="3" placeholder="Your Message:"></textarea>
                                                    <div className="clearfix"></div>
                                                    <button className="btn float-btn flat-btn color-btn" id="submit">Submit</button>
                                                </fieldset>
                                            </form>
                                        </div>
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

export default CareersPage
