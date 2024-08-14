import React from 'react'

import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Image from '../assets/landing-img.png'

function Home() {
  return (
    <>
      <div className="text-center py-32 h-screen">
        <div>
        <img src={Image} alt="" className="absolute max-md:hidden max-w-2xl"/>
          <Heading color="black" size="h1" weight="bold" customClasses="md:mt-14 max-w-5xl mx-auto z-99">“Empowering Tomorrow, One <span className="text-[#27C25C]">Green</span> Choice at a Time.”</Heading>
          <Button color="secondary" size="small" customClasses="z-99 block mx-auto">Citeste mai mult</Button>
        </div>
         
      </div>

      <div className="py-32 h-full"> 
        <div className="max-w-5xl mx-auto">
        <Heading size="h4" underline="true" align="center">Antreprenoriat social rural sustenabil in Regiunea Centru</Heading>
          <Paragraph customClasses="my-14" underline="true">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Paragraph>
        </div>
      </div>
    </>
  );
}

export default Home;


