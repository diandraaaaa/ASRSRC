import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

import Dropdown from '../components/Dropdown';

function Concurs() {
    const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"`

    return(
        <>
        <div className="py-32">  
        <Heading size="h1" weight="bold" customClasses="text-center">CONCURS PLANURI DE AFACERI</Heading>
        </div>
        <section className="py-20 max-md:text-center">
        <Heading color="black" size="h2" weight="bold" underline="true" customClasses="inline md:ml-32">Informatii Concurs</Heading>
        <Paragraph customClasses="my-14 mx-20 px-12" underline="true">{lorem}{lorem}{lorem}{lorem}</Paragraph>
        </section>
        <section className="py-20">
        <Dropdown
            title="Etapele Concursului"
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
    </>
    )
}

export default Concurs