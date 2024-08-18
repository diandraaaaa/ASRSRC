import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Input from './Input'

import Newsletter from './Newsletter'

import Logo1 from '../assets/Logo FECID.svg'
import Logo2 from '../assets/Logo margareta.svg'
import Logo3 from '../assets/logo_prgpers_sm 1.svg'

import LocationIcon from '../assets/icons/location-icon.svg'
import EmailIcon from '../assets/icons/email-icon.svg'
import PhoneIcon from '../assets/icons/phone-icon.svg'
import { Link } from 'react-router-dom'

function Footer() {
    const footerSections = [
        {
          title: "Contact",
          links: [
            { href: "tel:+40727373060", displayText: "+40 727 373 060" },
            { href: "mailto:asociatia.margareta@gmail.com", displayText: "asociatia.margareta@gmail.com" },
            { href: "#", displayText: "Strada Dorului Nr. 20C, Sibiu, Romania" }
        ]
        },
        {
          title: "Despre Noi",
          links: [
            { href: "/obiective", displayText: "Obiective" },
            { href: "/parteneri", displayText: "Parteneri" },
            { href: "/formare-profesionala", displayText: "Formare profesionala" },
          ],
        },
      ];
  return (
    <footer className="bg-gradient-4 pt-12 pb-24">
        <div className="flex max-md:flex-col justify-between mx-12 mb-12">
            
            <div className="flex max-md:flex-col space-x-20">
                <img src={Logo2} alt="" className="max-w-64"/>
                <img src={Logo1} alt="" className="max-w-64"/>
            </div>

            <img src={Logo3} alt="" className="max-w-64"/>
        </div>

        <div className="flex max-md:flex-col justify-around">

            <div className="text-center">
                <Heading size="h6" weight="bold">Abonează-te la newsletter-ul nostru</Heading>
                <Input type="email" placeholder="Email" color="primary" width="64" position="mx-auto" icon="email"/>
                <Paragraph color="gray" size="small" customClasses="max-w-md">Nici nouă nu ne place spam, te informăm doar despre oportunități de implicare,proiecte și activități utile</Paragraph>
            </div>

            <div className="flex max-md:text-center max-md:flex-col md:space-x-32">
                {footerSections.map((section, index) =>(
                    <ul key={index}>
                        <li>
                            <Heading size="h6" weight="semibold">{section.title}</Heading>
                        </li>
                        {section.links.map((link, linkIndex) =>(
                            <li key={linkIndex}>
                                <Heading color="gray">
                                    <a href={link.href}>{link.displayText}</a>
                                </Heading>
                            </li>
                        )
                        )}
                    </ul>
                ) )
                }
            </div>

        </div>
        <Paragraph customClasses="text-center" color="gray">Copyright © 2024 Antreprenoriat social rural sustenabil in Regiunea Centru </Paragraph>
    </footer>
  )
}

export default Footer