import { useParams } from 'react-router-dom';

import Image from '../assets/images/about-img.png'
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import Error from './Error';
import data from '../data/teme.json';

function Page() {
    const params = useParams()
    const foundSection = data.sections.find(section => section.link === params.title);

    return (
        <>  
        { foundSection ? 
        <div>
            <img src={Image} alt="" className="py-10 px-4 md:px-40" />
            <section className="py-10 px-4 md:px-40">
                <Heading size="h1" weight="bold" customClasses="text-center capitalize" underline="true">{foundSection.title}</Heading>
                <div className="py-20">
                    {foundSection.paragraphs.map((paragraph, index) => 
                    ( 
                        <Paragraph key={index} customClasses="my-14 px-4 md:px-20 break-inside-avoid" underline='true'>{paragraph}</Paragraph> 
                    ))}   
                </div>
            </section> 
        </div> 
        : <Error />
        }
        </>
    );
}

export default Page;