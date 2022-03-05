import React from 'react'
import logo2 from '../images/logo2.png'
import { Link } from 'gatsby'

const Navbar = () => {

    return (
        <>
            <div className="nav-overlay">
                <div className="tooltip color-bg">Close Menu</div>
            </div>
            <div className="nav-holder">
                <a className="header-logo" href="index.html">
                    <img src={logo2} alt="PragICTS Logo" />
                </a>
                <div className="nav-title"><span>Menu</span></div>
                <div className="nav-inner-wrap">
                    <nav className="nav-inner sound-nav sliding-menu" id="menu">
                        <div className="sliding-menu-wrapper">
                            <ul className='menu-panel-root'>
                                <li>
                                    <Link to="/" activeClassName="act-link">Home</Link>
                                </li>
                                {/* <li>
                                    <Link to="/services" activeClassName="act-link">Services</Link>
                                </li> */}
                                <li>
                                    <Link to="/services" activeClassName="act-link">Services</Link>
                                </li>
                                {/* <li>
                                    <Link to="/careers" activeClassName="act-link">Careers</Link>
                                </li> */}
                                {/* <li>
                                    <Link to="/projects" activeClassName="act-link">Projects</Link>
                                </li> */}
                                <li>
                                    <Link to="/news" activeClassName="act-link">News</Link>
                                </li>
                                <li>
                                    <Link to="/faqs" activeClassName="act-link">FAQS</Link>
                                </li>
                                <li>
                                    <Link to="https://pragicts.com/" target="_blank" activeClassName="act-link">PragICTS</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
