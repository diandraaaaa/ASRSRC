import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

import Dropdown from '../components/Dropdown';
import Objective from '../components/Objective';


function Intreprinderi() {
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