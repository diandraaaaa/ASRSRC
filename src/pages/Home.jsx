import React from 'react'

import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Image from '../assets/landing-img.png'

function Home() {
  return (
    <>
      <div className="text-center py-32">
          <img src={Image} alt="" className="absolute max-md:hidden max-w-2xl"/>
          <Heading color="black" size="h1" weight="bold" customClasses="md:mt-14 max-w-5xl mx-auto z-99">“Empowering Tomorrow, One <span className="text-[#27C25C]">Green</span> Choice at a Time.”</Heading>
          <Button color="secondary" size="small" customClasses="z-99">Citeste mai mult</Button>
      </div>

      <div className="h-screen"> 

      </div>
    </>
  );
}

export default Home;


