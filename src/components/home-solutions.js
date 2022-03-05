import React from 'react'
import { Link } from "gatsby"
import SoftwareImage from '../images/services/software.jpg'
import InfrastructureImage from '../images/services/infrastructure.jpg'
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








const HomeSolutions = () => {
    return (
        <div>
     
        <section className="dark-bg no-padding" data-scrollax-parent="true" id='services'>
        <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }"><span>//</span>Services</div>
        <div className='container'>
        <div className="section-title fl-wrap">
                <h3>Our Services</h3>
                <h2> Infrastructure <span>Services</span></h2>
            </div>
        </div>
       
        <div className="fs-carousel-wrap fl-wrap full-height slider-carousel-wrap">
            <div className="fs-carousel fl-wrap full-height cur_carousel-slider-container">
                <div style={{paddingTop: '30px', paddingBottom: '30px'}} className="fs-carousel-item">
                    <div className="fs-carousel-title fl-wrap">

                        <h3><Link to="/service/software-development">IT Management</Link></h3>
                        <Link to="/service/software-development" className="fs-carousel-link">More Details</Link>
                    </div>
                    <div className="carousle-item-number"><span>01.</span></div>
                    <div className="bg"  data-bg={Support}></div>
                    <div className="overlay"></div>
                </div>
                <div style={{paddingTop: '30px', paddingBottom: '30px'}} className="fs-carousel-item">
                    <div className="fs-carousel-title fl-wrap">

                        <h3><a target="_blank" href="https://infrastructure.pragicts.com/">Consulting</a></h3>
                        <a target="_blank" href="https://infrastructure.pragicts.com/" className="fs-carousel-link">More Details</a>
                    </div>
                    <div className="carousle-item-number"><span>02.</span></div>
                    <div className="bg"  data-bg={Consulting}></div>
                    <div className="overlay"></div>
                </div>
                <div style={{paddingTop: '30px', paddingBottom: '30px'}} className="fs-carousel-item">
                    <div className="fs-carousel-title fl-wrap">

                        <h3><a target="_blank" href="https://cloud.pragicts.com/">Networking</a></h3>
                        <a target="_blank" href="https://cloud.pragicts.com/" className="fs-carousel-link">More Details</a>
                    </div>
                    <div className="carousle-item-number"><span>03.</span></div>
                    <div className="bg"  data-bg={Network}></div>
                    <div className="overlay"></div>
                </div>
                <div style={{paddingTop: '30px', paddingBottom: '30px'}} className="fs-carousel-item">
                    <div className="fs-carousel-title fl-wrap">

                        <h3><a target="_blank" href="https://cloud.pragicts.com/">Virtualization</a></h3>
                        <a target="_blank" href="https://cloud.pragicts.com/" className="fs-carousel-link">More Details</a>
                    </div>
                    <div className="carousle-item-number"><span>04.</span></div>
                    <div className="bg"  data-bg={Virtualization}></div>
                    <div className="overlay"></div>
                </div>
                <div style={{paddingTop: '30px', paddingBottom: '30px'}} className="fs-carousel-item">
                    <div className="fs-carousel-title fl-wrap">

                        <h3><a target="_blank" href="https://cloud.pragicts.com/">Cloud Transition</a></h3>
                        <a target="_blank" href="https://cloud.pragicts.com/" className="fs-carousel-link">More Details</a>
                    </div>
                    <div className="carousle-item-number"><span>05.</span></div>
                    <div className="bg"  data-bg={Cloud}></div>
                    <div className="overlay"></div>
                </div>
                <div style={{paddingTop: '30px', paddingBottom: '30px'}} className="fs-carousel-item">
                    <div className="fs-carousel-title fl-wrap">

                        <h3><a target="_blank" href="https://cloud.pragicts.com/">Security</a></h3>
                        <a target="_blank" href="https://cloud.pragicts.com/" className="fs-carousel-link">More Details</a>
                    </div>
                    <div className="carousle-item-number"><span>06.</span></div>
                    <div className="bg"  data-bg={Security}></div>
                    <div className="overlay"></div>
                </div>
                <div style={{paddingTop: '30px', paddingBottom: '30px'}} className="fs-carousel-item">
                    <div className="fs-carousel-title fl-wrap">

                        <h3><a target="_blank" href="https://cloud.pragicts.com/">Performance Management</a></h3>
                        <a target="_blank" href="https://cloud.pragicts.com/" className="fs-carousel-link">More Details</a>
                    </div>
                    <div className="carousle-item-number"><span>07.</span></div>
                    <div className="bg"  data-bg={Performance}></div>
                    <div className="overlay"></div>
                </div>
                <div style={{paddingTop: '30px', paddingBottom: '30px'}} className="fs-carousel-item">
                    <div className="fs-carousel-title fl-wrap">

                        <h3><a target="_blank" href="https://cloud.pragicts.com/">Rationalization</a></h3>
                        <a target="_blank" href="https://cloud.pragicts.com/" className="fs-carousel-link">More Details</a>
                    </div>
                    <div className="carousle-item-number"><span>08.</span></div>
                    <div className="bg"  data-bg={Relation}></div>
                    <div className="overlay"></div>
                </div>
                <div style={{paddingTop: '30px', paddingBottom: '30px'}} className="fs-carousel-item">
                    <div className="fs-carousel-title fl-wrap">

                        <h3><a target="_blank" href="https://cloud.pragicts.com/">BackUp</a></h3>
                        <a target="_blank" href="https://cloud.pragicts.com/" className="fs-carousel-link">More Details</a>
                    </div>
                    <div className="carousle-item-number"><span>09.</span></div>
                    <div className="bg"  data-bg={Backup}></div>
                    <div className="overlay"></div>
                </div>

            </div>
            <div className="sp-cont sarr-contr sp-cont-prev"><i className="fal fa-arrow-left"></i></div>
            <div className="sp-cont sarr-contr sp-cont-next"><i className="fal fa-arrow-right"></i></div>
            <div className="slider-nav-counter"></div>
        </div>
        </section>

        </div>
        
    )
}

export default HomeSolutions
