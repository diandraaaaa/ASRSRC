import Image from '../assets/images/about-img.png'

import Stats from '../components/Stats';
import Paragraph from '../components/Paragraph';

function Page() {
    const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

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
            <section>
            <Stats stats={statsData} />
            </section>
            <section className="py-10 px-4 md:px-40">
                <div className="py-20">
                    <Paragraph customClasses=" my-14 px-12 md:px-20 break-inside-avoid" underline='true'>{lorem}{lorem}{lorem}{lorem}</Paragraph>
                </div>
            </section>
        </>


    );
}

export default Page;