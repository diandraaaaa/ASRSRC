import React from 'react'

import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

import Objective from '../components/Objective';

import Image from '../assets/images/about-img.png'

function About() {
    const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
  return (
    <>    
    <section>
        <img src={Image} alt="" className="py-10 px-4 md:px-40" />
    </section>
    <section className="py-20 max-md:text-center">
        <Heading color="black" size="h2" weight="bold" underline="true" customClasses="inline md:ml-32">Obiective generale </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 max-md:space-y-32 py-32 md:px-20">
        <Objective 
        text={lorem} 
        number="1"
        title="Objective"
        />
        <Objective 
        text={lorem}
        number="2" 
        title="Objective"
        />
        <Objective
        text={lorem} 
        number="3" 
        title="Objective"
        />
    </div>
    </section>
    <section>
        <div className="text-center">
            <Heading color="black" weight="bold" size="h1" underline="true" customClasses="inline">Partenerii nostri</Heading>
        </div>
       
    </section>
  </>

      
  )
}

export default About