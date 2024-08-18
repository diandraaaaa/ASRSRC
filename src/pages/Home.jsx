import React from 'react'

import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

import Newsletter from '../components/Newsletter';
import Objective from '../components/Objective';

import Image from '../assets/landing-img.png'
import Image2 from '../assets/home-img.png'

function Home() {

  return (
    <>
      <section className="text-center py-32 h-screen">
        <div>
          <img src={Image} alt="" className="absolute max-md:hidden max-w-xl z-0"/>
          <Heading color="black" size="h1" weight="bold" customClasses="md:mt-14 max-w-5xl mx-auto z-9">“Empowering Tomorrow, One <span className="text-[#27C25C]">Green</span> Choice at a Time.”</Heading>
          <Button color="secondary" size="small" customClasses="block mx-auto z-9">Citeste mai mult</Button>
        </div>
      </section>

      <section className="py-32 h-full"> 
        <div className="max-w-5xl mx-auto">
          <img src={Image2} alt="" className="mx-auto max-md:px-4 md:max-w-md xl:max-w-6xl mb-12"/>
          <Heading size="h4" underline="true" weight="bold" align="center"> Antreprenoriat social rural sustenabil in Regiunea Centru</Heading>
          <Paragraph customClasses="my-14 px-12" underline="true">Aceasta este pagina de prezentare a proiectului european cu titlul – „Antreprenoriat social urban sustenabil în Regiunea Centru”, proiect cofinanțat din Fondul Social European prin Programul Incluziune si Demnitate Sociala 2021-2027, ce este derulat de către Asociația Institutul Educațional pentru Politici Sociale Margareta în parteneriat cu Fundația Europeană pentru Consultanță, Implementare și Dezvoltare și Fundația Progpers, în perioada 01 iulie 2024 – 31 decembrie 2026.
          <br/><br/>
            Pentru informații detaliate despre celelalte programe cofinanțate de Uniunea Europeană, vă invităm să vizitați mfe.gov.ro</Paragraph>
        </div>
      </section>

    </>
  );
}

export default Home;


