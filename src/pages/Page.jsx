import { useParams } from 'react-router-dom';

import Image from '../assets/images/about-img.png'
import Stats from '../components/Stats';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import Error from './Error';
import data from '../data/teme.json';

function Page() {
    const params = useParams()
    const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

    const foundSection = data.sections.find(section => section.link === params.title);

    const statsData = [
        { stat: '100', text: 'Users' },
        { stat: '200', text: 'Downloads' },
        { stat: '300', text: 'Likes' },
        { stat: '400', text: 'Followers'}
      ];

    return (
        <>  
        {foundSection ? 
        <div>
            <img src={Image} alt="" className="py-10 px-4 md:px-40" />
            <section className="py-10 px-4 md:px-40">
                <Heading size="h1" weight="bold" customClasses="text-center capitalize" underline="true">{foundSection.title}</Heading>
                <div className="py-20">
                {foundSection.paragraphs.map((paragraph, index) => (
                <Paragraph key={index} customClasses="my-14 px-4 md:px-20 break-inside-avoid" underline='true'>{paragraph}</Paragraph>
          ))}
                   
                </div>
            </section> 
        </div> : 
            <Error />
        }
            
        </>


    );
}

export default Page;