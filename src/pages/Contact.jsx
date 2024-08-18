import React from 'react'

import Input from '../components/Input'
import Button from '../components/Button'   
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph' 

import LocationIcon from '../assets/icons/location-icon.svg'
import EmailIcon from '../assets/icons/email-icon.svg'
import PhoneIcon from '../assets/icons/phone-icon.svg'

function Contact() {
  return (
    <div className="py-32">  
        <Heading size="h1" weight="bold" customClasses="text-center">Contact Us</Heading>
        <form className="flex max-md:flex-col justify-center max-md:space-y-12 max-md:mx-auto max-md:px-4 md:space-x-12 mt-10 md:py-20 max-md:max-w-96">
            <div className="space-y-4">
                <Paragraph weight="bold" customClasses="md:w-96">Associația Institutul Educațional pentru Politici Sociale Margareta</Paragraph>
                <Paragraph color="green"><img src={LocationIcon} className="inline mr-2"/>Strada Dorului nr. 20C, Sibiu, Romania</Paragraph>
                <Paragraph color="green"><a href="tel:+40727373060"><img src={PhoneIcon} className="inline mr-2"/>+40 727 373 060</a></Paragraph>
                <Paragraph color="green"><a href='mailto:asociatia.margareta@gmail.com'><img src={EmailIcon} className="inline mr-2"/>sociatia.margareta@gmail.com</a></Paragraph>
            </div>

            <div className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                    <Input type="text" name="name" placeholder="Full Name" icon="profile" />
                    <Input type="tel" name="phoneNumber" placeholder="Phone Number" icon="phone"/>
                </div>
                
                <Input type="email" name="email" placeholder="Email" icon="email"/>
                <div className="flex space-x-2">
                    <Input type="text" name="county" placeholder="County" icon="county"/>
                    <Input type="text" name="city" placeholder="City" icon="city"/>
                </div>
                <Button color="secondary" size="" customClasses="mx-0">Submit</Button>
            </div>
        </form>
    </div>
  )
}

export default Contact