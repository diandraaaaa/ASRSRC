import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Input from './Input'

import Logo1 from '../assets/Logo FECID.svg'
import Logo2 from '../assets/Logo margareta.svg'
import Logo3 from '../assets/logo_prgpers_sm 1.svg'

function Footer() {
  return (
    <footer className="bg-gradient-4 pt-12 pb-24">
        <div className="flex max-md:flex-col justify-between mx-12 mb-12">
            
            <div className="flex max-md:flex-col space-x-4">
                <img src={Logo2} alt="" className="max-w-64"/>
                <img src={Logo1} alt="" className="max-w-64"/>
            </div>

            <img src={Logo3} alt="" className="max-w-64"/>
        </div>

        <div className="flex max-md:flex-col justify-around">

            <div className="text-center">
                <Heading size="h6">Abonează-te la newsletter-ul nostru</Heading>
                <Input type="email" placeholder="Email" color="primary" width="64" position="mx-auto" icon="password"/>
                <Paragraph color="gray" size="small" customClasses="max-w-md">Nici nouă nu ne place spam, te informăm doar despre oportunități de implicare,proiecte și activități utile</Paragraph>
            </div>

            <div className="flex max-md:text-center max-md:flex-col md:space-x-32">
                <ul>
                    <li><Heading size="h6" weight="semibold">Contact</Heading></li>
                    <li><Heading color="gray">Numar</Heading></li>
                    <li><Heading color="gray">Email</Heading></li>
                    <li><Heading color="gray">Adresa</Heading></li>
                </ul>
                <ul>
                    <li><Heading size="h6" weight="semibold">Despre Noi</Heading></li>
                    <li><Heading color="gray">Servicii</Heading></li>
                    <li><Heading color="gray">Parteneri</Heading></li>
                    <li><Heading color="gray">Contacte</Heading></li>
                </ul>
            </div>

        </div>
        <Paragraph customClasses="text-center" color="gray">Copyright © 2024 Antreprenoriat social rural sustenabil in Regiunea Centru </Paragraph>
    </footer>
  )
}

export default Footer