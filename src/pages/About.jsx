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

import Image from '../assets/images/about-img.png'
import Image2 from '../assets/images/newsletter-bg.png'
import Icon from '../assets/icons/green-icon.svg'
import Icon2 from '../assets/icons/green-icon-2.svg'
import Icon3 from '../assets/icons/green-icon-3.svg'

function About() {
     const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"`

     const statsData = [
        { stat: '100', text: 'Users' },
        { stat: '200', text: 'Downloads' },
        { stat: '300', text: 'Likes' },
        { stat: '400', text: 'Followers'}
      ];

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
    <section className="py-32">
        <div className="text-center">
            <Heading color="black" weight="bold" size="h2" underline="true" customClasses="inline max-sm:block">Partenerii nostri</Heading>
        </div>
        <div className="max-w-2xl mx-auto mt-24">
            <KeyPoint
                title="Understanding Recycling:"
                text="Explanation of what recycling is and why it’s important."
                icon={Icon}
                customClasses="pt-2"
            />
            <KeyPoint
                title="How to Recycle Effectively:"
                text="Tips on sorting and preparing materials for recycling."
                icon={Icon2}
            />
            <KeyPoint
                title="The Impact of Recycling:"
                text="Statistics and facts about how recycling benefits the environment."
                icon={Icon3}
            />
        </div>
    </section>

    <section className="py-32"> 
        <div className="max-md:text-center">
            <Heading color="black" size="h2" weight="bold" underline="true" customClasses="inline md:ml-32">Finantare</Heading>
            <div className="md:px-20 mx-auto"> 
                <Paragraph customClasses="my-14 px-12" underline="true">{lorem}{lorem}<br/><br/>{lorem}{lorem}</Paragraph>
                <Grid 
                image1={Image} text1="text1" 
                image2={Image2} text2="text2" 
                image3={Image2} text3="text3" 
                image4={Image} text4="text4"
            />
            </div>
        </div>
    </section>

    <section className="py-32">
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
        <Paragraph customClasses="my-14 px-12" underline="true">{lorem}{lorem}<br/><br/>{lorem}{lorem}</Paragraph>
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

    <section className="py-32 px-2 md:px-10 xl:px-32">
        <Project 
            category="Test"
            title="Titlu"
            description={lorem}
            image={Image}
        />
        <div className="grid grid-cols-1 xl:grid-cols-3">
            <Project 
                category="Test"
                title="Titlu"
                description={lorem}
                image={Image}
                size="small"
            />
            <Project 
                category="Test"
                title="Titlu"
                description={lorem}
                image={Image}
                size="small"
            />
            <Project 
                category="Test"
                title="Titlu"
                description={lorem}
                image={Image}
                size="small"
            />
        </div>
       
    </section>
    
    <div className="py-32">
        <Table col1="col1" col2="col2" col3="col3" col4="col4">
            <TableRow 
            text1="Hello"
            text2="Hello"
            text3="Hello"
            text4="Hello"
            />
            <TableRow 
            text1="Hello"
            text2="Hello"
            text3="Hello"
            text4="Hello"
            />
            <TableRow 
            text1="Hello"
            text2="Hello"
            text3="Hello"
            text4="Hello"
            />
            <TableRow 
            text1="Hello"
            text2="Hello"
            text3="Hello"
            text4="Hello"
            />
        </Table>
    </div>

        
  </>

      
  )
}

export default About