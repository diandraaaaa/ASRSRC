import React, { useState } from 'react';
import Logos from '../assets/Nav Header.png';

function Nav() {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    const menuToggle = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
    };

    const pages = [
        {link: '/despre-noi', pageName: 'Despre noi'},
        {link: '/concurs-planuri-de-afacere', pageName:'Concurs planuri de afacere'},
        {link: '/intreprinderi-sociale', pageName: 'Intreprinderi sociale'},
        {link: '/teme-fse+', pageName: 'Teme FSE+'},
        {link: '/noutati', pageName: 'Noutati'},
        {link: '/contact', pageName: 'Contact'}
    ]
    return (
        <>
            <div>
                <img src={Logos} alt="" className="max-w-60 md:max-w-sm md:ml-8" />
            </div>
            <nav className="hidden md:flex justify-between bg-gradient-4 py-8 md:text-[16px] xl:text-[20px]">
                <a href='/' className="hover:text-white"><h1 className="ml-12">Antreprenoriat social rural sustenabil in Regiunea Centru</h1></a>

                <div className="flex">
                    <ul className="flex justify-center space-x-6 mr-12 text-customBlack font-bold hover:cursor-pointer">
                        { pages.map((page, index) => (
                            <li key={index}><a href={page.link} className="hover:text-white">{page.pageName}</a></li>
                        ))
                        }
                    </ul>
                </div>
            </nav>
            <nav className="flex md:hidden bg-gradient-4 py-8" onClick={menuToggle}>
                <div className="mx-4">
                    { !isMobileNavVisible ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="5" width="24" height="2" fill="#000" />
                        <rect y="11" width="24" height="2" fill="#000" />
                        <rect y="17" width="24" height="2" fill="#000" />
                    </svg>
                    ): (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#000" strokeWidth="2"/>
                            <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="#000" strokeWidth="2"/>
                        </svg>
                    )}
                </div>
            </nav>

            {isMobileNavVisible && (
                <nav className="absolute z-10 size-64 bg-[#B3E5A0]">
                    <ul className="ml-4 space-y-4 text-customBlack font-bold hover:cursor-pointer">
                        {pages.map((page, index) => (
                            <li key={index}><a href={page.link} className="hover:text-white">{page.pageName}</a></li>
                            ))
                        }
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Nav;