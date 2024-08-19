import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

import Dropdown from '../components/Dropdown';
import Objective from '../components/Objective';
import FeaturePoint from '../components/FeaturePoint';  




function Intreprinderi() {
    const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"`

    return (
        <>
        <div className="py-32">  
        <Heading size="h1" weight="bold" customClasses="text-center">ÎNTREPRINDERI SOCIALE</Heading>
        </div>
        <section className="py-20 max-md:text-center">
        <Heading color="black" size="h2" weight="bold" underline="true" customClasses="inline md:ml-32">Întreprinderi Nou Înființate</Heading>
        <Paragraph customClasses="my-14 mx-20 px-12" underline="true">{lorem}{lorem}{lorem}{lorem}</Paragraph>
        </section>
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
        <Paragraph customClasses="my-14 mx-20 px-12">ATESTATUL certifică scopul social al întreprinderii sociale și conformarea acesteia la cele 7 principii ale economiei sociale, după cum urmează:</Paragraph>

        <div className="flex max-xl:flex-col justify-center mx-auto container xl:w-4/5 px-4 xl:px-32 py-32 md:px-32">
            <div className="xl:w-1/2 space-y-10 md:space-y-20 max-md:mb-10">
                <FeaturePoint quesitonNr="1">prioritate acordată individului și obiectivelor sociale față de creșterea profitului</FeaturePoint>
                <FeaturePoint quesitonNr="3">solidaritate și responsabilitate colectivă</FeaturePoint>
                <FeaturePoint quesitonNr="5">convergența dintre interesele membrilor asociați şi interesul general şi/sau interesele unei colectivității;</FeaturePoint>
                <FeaturePoint quesitonNr="7">alocarea celei mai mari părți a profitului/excedentului financiar pentru atingerea obiectivelor de interes general, ale unei colectivității sau în interesul personal nepatrimonial al membrilor.</FeaturePoint>
            </div>
            <div className="xl:w-1/2 space-y-10 md:space-y-24 md:translate-y-24">
                <FeaturePoint quesitonNr="2">control democratic al membrilor, exercitat asupra activităților desfășurate</FeaturePoint>
                <FeaturePoint quesitonNr="4">caracter voluntar şi liber al asocierii în formele de organizare specifice domeniului economiei sociale;</FeaturePoint>
                <FeaturePoint quesitonNr="6">personalitate juridică distinctă, autonomie de gestiune şi independență față de autoritățile publice;</FeaturePoint>
            </div>
        </div>
    
        <section className="py-20">
        <Heading color="black" size="h2" weight="bold" underline="true" customClasses="inline md:ml-32">Criterii eligibiitate</Heading>
        <Dropdown
            title="Pentru a înființa o întreprindere socială"
            text={`${lorem} ${lorem} ${lorem}`}
        />
         <Dropdown
            title="Pentru a deveni o întreprindere socială în România"
            text={`${lorem} ${lorem} ${lorem}`}
        />
    </section>
        </>
    )
}

export default Intreprinderi