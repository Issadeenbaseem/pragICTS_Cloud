import React from 'react'
import Layout from "../components/layout"
import Footer from '../components/footer'
import { Link, graphql, useStaticQuery } from "gatsby"
import SocialIconsFooter from '../components/social-icons-footer'
import BgImage from '../images/bg/projects-page-banner.jpg'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
    query ($skip: Int!, $limit: Int!) {
        allProjectsJson (
            skip: $skip,
            limit: $limit
        ) {
            nodes {
                slug
                text
                client
                categories {
                    title
                }
                year
                day
                month
                link
                main_image {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
                thumbnail_image1 {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        }
    }
`

const ProjectsIndexPage = ({ data, pageContext }) => {
    const projects = data.allProjectsJson.nodes

    return (
        <Layout pageTitle="Projects">
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
                                <h2>Projects by <br/> <span> PragICTS</span></h2>
                                <p>Projects done by PragICTS</p>
                                <div className="horizonral-subtitle"><span>Projects</span></div>
                            </div>
                            <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                        </div>
                    </section>

                    <section data-scrollax-parent="true" className="dark-bg">
                        <div className="container">
                            {projects.map((project, index) => (
                                <>

                                    <div key={project.slug} className="parallax-item fl-wrap" data-scrollax-parent="true">
                                        <div className="row">
                                            {
                                                index%2 == 1 ? '' : (<div className="col-md-5"></div>)
                                            }
                                            <div className="col-md-7">
                                                <div className="parallax-header"><span>Category : </span>
                                                    {project.categories.map(category => (
                                                        <a key={category.title} href="javascript:;">{category.title}</a>
                                                    ))}
                                                </div>
                                                <GatsbyImage image={getImage(project.main_image)} alt={project.client} />
                                            </div>
                                            <div className={index%2 == 1 ? 'parallax-text right-pos' : 'parallax-text left-pos'} data-scrollax="properties: { translateY: '-250px' }">
                                                <h3><a href={`${project.link}`} target="_blank">{project.client}</a></h3>
                                                <h4><span>{project.text}</span></h4>
                                                <a href={`${project.link}`} target="_blank" className="btn float-btn flat-btn color-btn">Link to Project</a>
                                            </div>
                                            <div className="album-thumbnails">
                                                <div data-position-left2={index%2 == 1 ? '65' : '2'} data-position-top2={index%2 == 1 ? '0' : '15'} data-scrollax={`properties: { translateY: '${index%2 == 1 ? '-150px' : '-50px'}' }`}>
                                                    <div style={{ color: '#fff', width: 'fit-content', fontSize: '30px', fontWeight: '700'}}>
                                                        {project.day}-{project.month}-{project.year}
                                                    </div>
                                                </div>
                                                <div data-position-left2={index%2 == 1 ? '80' : '28'} data-position-top2={index%2 == 1 ? '50' : '90'} data-scrollax={`properties: { translateY: '${index%2 == 1 ? '-350px' : '-150px'}' }`}></div>
                                            </div>
                                        </div>
                                        <div className="parallax-item-number rg-num">.{index + 1}</div>
                                    </div>
                                    <div className="paralax-sec-separator fl-wrap"></div>
                                </>
                            ))}
                            <div className="content-nav mar-top">
                                <ul>
                                    <li>
                                        {
                                            pageContext.previousPagePath == "" ? "" : (

                                                    <Link to={pageContext.previousPagePath} className="ln"><i className="fal fa-arrow-left"></i><span className="tooltip">Prev - Page {pageContext.pageNumber}</span></Link>

                                            )
                                        }
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="cur-page"><span>Page { pageContext.pageNumber + 1 } of { pageContext.numberOfPages }. </span></a>
                                    </li>
                                    <li>
                                        {
                                            pageContext.nextPagePath == "" ? "" : (

                                                    <Link to={pageContext.nextPagePath} className="rn"><i className="fal fa-arrow-right"></i><span className="tooltip">Next - Page {pageContext.pageNumber + 2} </span></Link>

                                            )
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sec-lines"></div>
                    </section>

                    <SocialIconsFooter />
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default ProjectsIndexPage
