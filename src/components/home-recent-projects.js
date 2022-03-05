import React from 'react'

import AuthenticitieslLogo from '../images/clients/asl-logo.png'


import UnicornMetalicsLogo from '../images/clients/unicornmetalics-logo.png'

import Rigorlogo from '../images/clients/rigor_logo.png'
import Asianconecpt from '../images/clients/asian-conecpt-logo.png'
import p_logo from '../images/clients/p_logo.png'
import logoth from '../images/clients/logoth.png'



const clients = [

    {
        name: 'AGC',
        logo: Asianconecpt,
        url: 'https://agc.lk/'
    },
    {
        name: 'Rigor Consulting',
        logo: Rigorlogo,
        url: 'http://rigor.consulting/'
    },
    
    
    {
        name: 'Unicorn Metalics',
        logo: UnicornMetalicsLogo,
        url: 'http://unicornmetalics.com/'
    },
    {
        name: 'AuthenticitieslLogo',
        logo: AuthenticitieslLogo,
        url: 'https://authenticitiessrilanka.com/#Authenticities/'
    },
    {
        name: 'ToolHub',
        logo: logoth,
        url: 'https://toolshub.lk/'
    },
    {
        name: 'praguna-global',
        logo: p_logo,
        url: 'http://praguna-global.com/'
    },
]

const HomeClientTestimonials = () => {
    return (
        <section  data-scrollax-parent="true" id="projects">
            <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" >Clients<span>//</span></div>
            <div className="container">
                <div className="section-title fl-wrap">
                    <h3>Clients</h3>
                    <h2>Featured <span>Clients</span></h2>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="slider-carousel-wrap text-carousel-wrap fl-wrap">
                <div className="text-carousel-controls fl-wrap">
                    
                </div>
               
            </div>
            <div className="fl-wrap">
                <div className="container">
                    <ul className="client-list client-list-white">
                        {clients.map(client => (
                            <li key={client.name}><a href={client.url} target="_blank"><img src={client.logo} className='respimg' alt={client.name} title={client.name} /></a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="sec-lines"></div>
        </section>
    )
}

export default HomeClientTestimonials
