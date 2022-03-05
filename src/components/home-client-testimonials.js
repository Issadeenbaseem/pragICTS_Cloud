import React from 'react'

import Techsynology from '../images/clients/tech-synology.png'
import Techcisco from '../images/clients/tech-cisco.png'
import Techfortinet from '../images/clients/tech-fortinet.png'
import Techwindowsserverclient from '../images/clients/tech-windowsserverclient.png'
import Techeset from '../images/clients/tech-eset.png'
import Techanydesk from '../images/clients/tech-anydesk.png'
import Techgoogleworkspace from '../images/clients/tech-googleworkspace.png'
import Techaws from '../images/clients/tech-aws.png'
import Techmisrosoft365 from '../images/clients/tech-misrosoft365.png'
import Techprometheus from '../images/clients/tech-prometheus.png'
import Techalexa from '../images/clients/tech-alexa.png'
import Techazure from '../images/clients/tech-azure.png'

import Techegnyte from '../images/clients/tech-egnyte.png'

import Techrackspace from '../images/clients/tech-rackspace.png'
import Techvmware from '../images/clients/tech-vmware.png'
import Techgodaddy from '../images/clients/tech-godaddy.png'




const clients = [
    {
        name: 'AWS',
        logo: Techaws,
        url: 'https://technomediclk.com'
    },
    {
        name: 'Godaddy',
        logo: Techgodaddy,
        url: 'https://authenticitiessrilanka.com/'
    },
    {
        name: 'Alexa',
        logo: Techalexa,
        url: 'https://biophilia.lk'
    },
    {
        name: 'Azure',
        logo: Techazure,
        url: 'http://cppglass.com'
    },
    {
        name: 'Googleworkspace',
        logo: Techgoogleworkspace,
        url: 'http://unicornmetalics.com/'
    },
    {
        name: 'Rackspace',
        logo: Techrackspace,
        url: 'http://unicornmetalics.com/'
    },
    {
        name: 'Vmware',
        logo: Techvmware,
        url: 'http://unicornmetalics.com/'
    },
    {
        name: 'Egnyte',
        logo: Techegnyte,
        url: 'http://unicornmetalics.com/'
    },
   

   


]

const HomeClientTestimonials = () => {
    return (
        <section  data-scrollax-parent="true" id="testimonials">
            <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" >Technologies<span>//</span></div>
            <div className="container">
                <div className="section-title fl-wrap">
                    <h3>Technology Stack</h3>
                    <h2>Cloud<span> Technologies</span></h2>
                </div>
            </div>
            <div className="clearfix"></div>
           
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
