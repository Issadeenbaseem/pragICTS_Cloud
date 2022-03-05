import React from 'react'
import Loader from './loader'
import Header from './header'
import Navbar from './navbar'
import { Helmet } from 'react-helmet'
import logo from '../images/logo.png'

const Layout = ({pageTitle, children}) => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
                <meta name="description" content="Offshore software development and IT services company in Sri Lanka for all your outsourcing needs. Services include website, web application, ecommerce and mobile app development to it infrastructure implementation, management and support." />
                <meta name="keywords" content="Offshore software development and IT  services company in Sri Lanka, Wesite Development, Web Application Development, Mobile App Development, Enterprise Application Development, Cloud Platform Setup and Management, IT Services, Networking Management Services, IT Security Services, Data Backup and Recovery Services, Virtualization" />
                <meta name="subject" content="Software - Infrastructure - Cloud | PragICTS" />
                <meta name="copyright" content="PragICTS PVT LTD" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="PragICTS, info@pragicts.com" />
                <meta name="reply-to" content="info@pragicts.com" />
                <meta name="owner" content="PragICTS PVT LTD" />
                <meta property="og:title" content="PragICTS" />
                <meta property="og:description" content="Software Development, IT Infrastructure, and Cloud Services Company" />
                <meta name="twitter:description" content="Software Development, IT Infrastructure, and Cloud Services Company" />
                <meta property="twitter:url" content="https://www.pragicts.com" />
                <meta property="twitter:title" content="Software Development and IT services Company In Sri Lanka | PragICTS" />
                <meta property="og:url" content="http://pragicts.com" />
                <meta property="og:image" content={logo} />
                <meta property="og:type" content="Company" />
                <meta property="og:site_name" content="Software Development and IT services Company In Sri Lanka | PragICTS" />
                <meta name="og:email" content="info@pragICTS.com" />
                <meta name="og:phone_number" content="00 94 76 298 8284" />
                <link rel="canonical" href="https://pragicts.com" />
            </Helmet>
            <Loader />
            <div id="main">
                <Header />
                <Navbar />
                {children}
            </div>
        </>
    )
}

export default Layout
