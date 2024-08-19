import React from 'react'

import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Grid from '../components/Grid';
import Table from '../components/Table';
import TableRow from '../components/TableRow';

import Objective from '../components/Objective';
import KeyPoint from '../components/KeyPoint';
import Dropdown from '../components/Dropdown';
import Stats from '../components/Stats';
import Project from '../components/Project';
import Themes from './Themes';
import FeaturePoint from '../components/FeaturePoint';  

import Image from '../assets/images/about-img.png'
import Image2 from '../assets/images/newsletter-bg.png'

import Logo from '../assets/Logo FECID.svg'
import Logo2 from '../assets/logo_prgpers_sm 1.svg'


function About() {
     const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"`

     const statsData = [
        { stat: '100', text: 'Users' },
        { stat: '200', text: 'Downloads' },
        { stat: '300', text: 'Likes' },
        { stat: '400', text: 'Followers'}
      ];

  return (
    // <TO-DO> i thnk the first column shoukd have the elements bold and green, im not sure why the text in some paragraphs is centerd, the link for "formular de inscriere" doesnt work </TO-DO>
    <>    
    <section>
        {/*<img src={Image} alt="" className="py-10 px-4 md:px-40" /> */}
        <img src={Image} alt="" className="mb-6 px-10 mt-6 rounded-lg w-full sm:mb-0 xl:mb-6 mx-auto xl:w-4/5 " width="800" height="420"/>
    </section>
    <section className="py-20 max-md:text-center">
        <Heading color="black" size="h2" weight="bold" underline="true" customClasses="inline md:ml-32">Obiectivul general </Heading>
        <Paragraph customClasses="my-14 mx-4 md:mx-20 md:px-12" underline="true">{lorem}{lorem}{lorem}{lorem}</Paragraph>

    </section>
    <section className="py-32">
        <div className="text-center">
            <Heading color="black" weight="bold" size="h2" underline="true" customClasses="inline max-sm:block">Partenerii nostri</Heading>
        </div>
        <div className="max-w-2xl mx-auto max-md:text-center mt-24">
            <KeyPoint
                title="Fundația Europeană pentru Consultanță, Implementare și Dezvoltare"
                link="https://fecid.ro"
                text="fecid.ro"
                icon={Logo}
                customClasses="pt-2"
            />
            <KeyPoint
                title="Fundatia PROGPERS"
                link="https://fundatiaprogpers.ro/"
                text="fundatiaprogpers.ro"
                icon={Logo2}
            />
           
        </div>
    </section>
    <section className="py-32">
        <div className="text-center">
            <Heading color="black" weight="bold" size="h2" underline="true" customClasses="inline max-sm:block">Formare profesionala</Heading>
            <Paragraph customClasses="my-14 mx-4 md:mx-20 md:px-12 md:text-left" underline="true">{lorem}{lorem}{lorem}{lorem}</Paragraph>
        </div>
        <div className="py-32">
        <Table col1="" col2="" >
            <TableRow 
            text1="Calendar formare"
            text2="Derularea cursurilor de formare va debuta în luna a 2-a a proiectului ( luna august 2024) si se va finaliza în luna 9 (martie 2025)."
            />
            <TableRow 
            text1="Calendar formare"
            text2="Derularea cursurilor de formare va debuta în luna a 2-a a proiectului ( luna august 2024) si se va finaliza în luna 9 (martie 2025)."
            />
            <TableRow 
            text1="Calendar formare"
            text2="Derularea cursurilor de formare va debuta în luna a 2-a a proiectului ( luna august 2024) si se va finaliza în luna 9 (martie 2025)."
            />
            <TableRow 
            text1="Calendar formare"
            text2="Derularea cursurilor de formare va debuta în luna a 2-a a proiectului ( luna august 2024) si se va finaliza în luna 9 (martie 2025)."
            />
        </Table>
    </div>
    <div className="text-center">
            <Paragraph customClasses="my-14 mx-4 md:mx-20 md:px-12" underline="true">Pentru înscrieri la programul de formare, vă rugăm să accesați <a herf="/contact">formularul de înscriere.</a></Paragraph>
    </div>
    </section>


    <section className="py-32"> 
        <div className="max-md:text-center">
            <Heading color="black" size="h2" weight="bold" underline="true" customClasses="inline md:ml-32">Finantare</Heading>
            <div className="md:px-20 mx-auto"> 
                <Paragraph customClasses="my-14 mx-4 md:mx-20 md:px-12" underline="true">{lorem}{lorem}<br/><br/>{lorem}{lorem}</Paragraph>
                <Grid 
                image1={Image} text1="text1" 
                image2={Image2} text2="text2" 
                image3={Image2} text3="text3" 
                image4={Image} text4="text4"
            />
            </div>
        </div>
    </section>

    <section className="md:py-10">
        <Dropdown
            title="Informatii"
            text={`${lorem} ${lorem} ${lorem}`}
        />
         <Dropdown
            title="Documente necesare"
            text={`${lorem} ${lorem} ${lorem}`}
        />
         <Dropdown
            title="Subventii si beneficii"
            text={`${lorem} ${lorem} ${lorem}`}
        />
    </section>

    <section className="py-32">
        <div className="text-center">
            <Heading color="black" weight="bold" size="h1" underline="true" customClasses="inline max-sm:block">Economia Socială</Heading>
        </div>        
        <div className="max-w-5xl mx-auto"> 
        <Paragraph customClasses="my-14 mx-4 md:mx-20 md:px-12" underline="true">{lorem}{lorem}<br/><br/>{lorem}{lorem}</Paragraph>
        </div>
    </section>

    <section className="py-32 h-full">
        <div className="text-center">
            <Heading color="black" weight="bold" size="h1" underline="true" customClasses="inline max-sm:block">Beneficii</Heading>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 items-center max-w-7xl mx-auto">
            <Paragraph customClasses="my-14 px-12 md:px-20 break-inside-avoid">{lorem}<br/><br/></Paragraph>
            <Paragraph customClasses="my-14 px-12 md:px-20 break-inside-avoid">{lorem}<br/><br/></Paragraph>
            <Paragraph customClasses="my-14 px-12 md:px-20 break-inside-avoid">{lorem}<br/><br/></Paragraph>
            <Paragraph customClasses="my-14 px-12 md:px-20 break-inside-avoid">{lorem}<br/><br/></Paragraph>
        </div>
    </section>

    <Stats stats={statsData} />

    <Themes />

    <div className="flex max-xl:flex-col justify-center mx-auto container xl:w-4/5 px-4 xl:px-32 py-32 md:px-32">
        <div className="xl:w-1/2 space-y-10 md:space-y-20 max-md:mb-10">
            <FeaturePoint title="Test question"quesitonNr="1">{lorem}</FeaturePoint>
            <FeaturePoint title="Test Question"quesitonNr="2">{lorem}</FeaturePoint>
            <FeaturePoint title="Test question"quesitonNr="3">{lorem}</FeaturePoint>
        </div>
        <div className="xl:w-1/2 space-y-10 md:space-y-24 md:translate-y-24">
            <FeaturePoint title="Test question"quesitonNr="4">{lorem}</FeaturePoint>
            <FeaturePoint title="Test question"quesitonNr="5">{lorem}</FeaturePoint>
            <FeaturePoint title="Test question"quesitonNr="6">{lorem}</FeaturePoint>
        </div>
    </div>
    
  </>

      
  )
}

export default About