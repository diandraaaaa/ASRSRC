import React from 'react'

import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

import Newsletter from '../components/Newsletter';
import Objective from '../components/Objective';

import Image from '../assets/landing-img.png'
import Image2 from '../assets/home-img.png'

function Home() {
  const continut = `📌Ai o idee de afacere și nu știi de unde să începi? <br/>
          📌Ai un plan de afaceri, dar nu ai resurse financiare pentru a-l pune în aplicare?<br/><br/>

          Înscrie-te în proiectul „Antreprenoriat social urban sustenabil în Regiunea Centru” și descoperă cum poți să-ți transformi visul în realitate. 🌳🌳<br/><br/>

          Cine poate participa?<br/>
          ✅ Persoane cu domiciliul în mediul rural din regiunea Centru<br/>
          ✅ Persoane cu vârsta 18-64 ani<br/>
          ✅ Studii medii finalizate <br/><br/>

          Vei beneficia de <br/>
          -	Cursuri GRATUITE de specializare în Antreprenoriat social și de o subvenție de participare de 900 lei<br/>
          -	Mentorat și consiliere în domeniul antreprenoriatului social<br/>
          -	Șansa de a câștiga un grant de pana la 100.000 euro pentru finanțarea afacerii tale.<br/><br/>

          🎯Înscrie-te acum și ai posibilitatea de a-ți transforma visul în realitate. <br/>
          🎯Contribuie și tu la dezvoltarea comunității tale.<br/>`

  return (
    <>
    {/* TO-DO i think the text should be moved a lil up and make the button do smth also the link at the end should be green and underliend*/}
      <section className="text-center py-32 h-screen">
        <div>
          <img src={Image} alt="" className="absolute max-md:hidden max-w-xl z-0"/>
          <Heading color="black" size="h1" weight="bold" customClasses="md:mt-14 max-w-5xl mx-auto z-9">Înscrie-te în proiectul <span className="text-[#27C25C]">„Antreprenoriat social urban sustenabil în Regiunea Centru” </span> și descoperă cum poți să-ți transformi visul în realitate.n</Heading>
          <Button color="main" size="small" customClasses="block mx-auto z-9">Citeste mai mult</Button>
        </div>
      </section>

      <section className="py-32 h-full"> 
        <div className="max-w-5xl mx-auto">
          <img src={Image2} alt="" className="mx-auto max-md:px-4 md:max-w-md xl:max-w-6xl mb-12"/>
          <Heading size="h4" underline="true" weight="bold" align="center"> Antreprenoriat social rural sustenabil in Regiunea Centru</Heading>
          <Paragraph customClasses="my-14 px-12" underline="true">📌Ai o idee de afacere și nu știi de unde să începi? <br/>
          📌Ai un plan de afaceri, dar nu ai resurse financiare pentru a-l pune în aplicare?<br/><br/>

          Înscrie-te în proiectul „Antreprenoriat social urban sustenabil în Regiunea Centru” și descoperă cum poți să-ți transformi visul în realitate. 🌳🌳<br/><br/>

          Cine poate participa?<br/>
          ✅ Persoane cu domiciliul în mediul rural din regiunea Centru<br/>
          ✅ Persoane cu vârsta 18-64 ani<br/>
          ✅ Studii medii finalizate <br/><br/>

          Vei beneficia de <br/>
          -	Cursuri GRATUITE de specializare în Antreprenoriat social și de o subvenție de participare de 900 lei<br/>
          -	Mentorat și consiliere în domeniul antreprenoriatului social<br/>
          -	Șansa de a câștiga un grant de pana la 100.000 euro pentru finanțarea afacerii tale.<br/><br/>

          🎯Înscrie-te acum și ai posibilitatea de a-ți transforma visul în realitate. <br/>
          🎯Contribuie și tu la dezvoltarea comunității tale.<br/>
          <br/><br/>
          Aceasta este pagina de prezentare a proiectului european cu titlul – „Antreprenoriat social urban sustenabil în Regiunea Centru”, proiect cofinanțat din Fondul Social European prin Programul Incluziune si Demnitate Sociala 2021-2027, ce este derulat de către Asociația Institutul Educațional pentru Politici Sociale Margareta în parteneriat cu Fundația Europeană pentru Consultanță, Implementare și Dezvoltare și Fundația Progpers, în perioada 01 iulie 2024 – 31 decembrie 2026.
          <br/><br/>
            Pentru informații detaliate despre celelalte programe cofinanțate de Uniunea Europeană, vă invităm să vizitați <a href='https://mfe.gov.ro'>mfe.gov.ro</a>
          </Paragraph>
        </div>
      </section>

    </>
  );
}

export default Home;


