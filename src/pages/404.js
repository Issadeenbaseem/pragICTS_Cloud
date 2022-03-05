import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import BgImage from "../images/bg/16.jpg"
import Footer from "../components/footer"

// markup
const NotFoundPage = () => {
    return (
        <Layout pageTitle="Not Found">
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
                    <section className="parallax-section fw-parallax" data-scrollax-parent="true">
                        <div className="bg par-elem"  data-bg={BgImage} data-scrollax="properties: { translateY: '30%' }"></div>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="error-wrap">
                                <h2>404</h2>
                                <p>We're sorry, but the Page you were looking for, couldn't be found.</p>
                                <div className="clearfix"></div>
                                <p>Or</p>
                                <Link to="/" className="btn flat-btn color-btn">Back to Home Page</Link>
                            </div>
                        </div>
                    </section>
                    <section className="dark-bg2 small-padding order-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <h3>Need more information  ? View our Portfolio</h3>
                                </div>
                                <div className="col-md-4"><a href="/projects" className="btn flat-btn color-btn">Our Portfolio</a> </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default NotFoundPage
