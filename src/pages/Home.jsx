import React from 'react'

import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

import Newsletter from '../components/Newsletter';
import Objective from '../components/Objective';

import Image from '../assets/landing-img.png'
import Image2 from '../assets/home-img.png'

function Home() {
  const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
  return (
    <>
      <section className="text-center py-32 h-screen">
        <div>
          <img src={Image} alt="" className="absolute max-md:hidden max-w-xl"/>
          <Heading color="black" size="h1" weight="bold" customClasses="md:mt-14 max-w-5xl mx-auto z-9">“Empowering Tomorrow, One <span className="text-[#27C25C]">Green</span> Choice at a Time.”</Heading>
          <Button color="secondary" size="small" customClasses="z-9 block mx-auto">Citeste mai mult</Button>
        </div>
      </section>

      <section className="py-32 h-full"> 
        <div className="max-w-5xl mx-auto">
          <img src={Image2} alt="" className="mx-auto max-md:px-4 md:max-w-md xl:max-w-6xl mb-12"/>
          <Heading size="h4" underline="true" align="center">Antreprenoriat social rural sustenabil in Regiunea Centru</Heading>
          <Paragraph customClasses="my-14 px-12" underline="true">{lorem}{lorem}<br/><br/>{lorem}{lorem}</Paragraph>
        </div>
      </section>

      <Newsletter position="center"/>

      <section className="grid grid-cols-1 md:grid-cols-3 max-md:space-y-32 py-32 md:px-20">
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

      </section>
    </>
  );
}

export default Home;


