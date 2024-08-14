import React, { useState } from 'react';
import Logos from '../assets/Nav Header.png';

function Nav() {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    const menuToggle = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
    };

    return (
        <>
            <div>
                <img src={Logos} alt="" className="max-w-60 md:max-w-sm md:ml-8" />
            </div>
            <nav className="hidden md:flex justify-between bg-gradient-4 py-8 md:text-[16px] xl:text-[20px]">
                <h1 className="ml-12">Antreprenoriat social rural sustenabil in Regiunea Centru</h1>

                <div className="flex">
                    <ul className="flex justify-center space-x-12 mr-12 text-customBlack font-bold hover:cursor-pointer">
                        <li><a href='/'>Page 1</a></li>
                        <li><a href='/'>Page 2</a></li>
                        <li><a href='/'>Page 3</a></li>
                        <li><a href='/'>Page 4</a></li>
                        <li><a href='/'>Page 5</a></li>
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
                <nav className="absolute size-64 bg-[#B3E5A0]">
                    <ul className="ml-4 space-y-4 text-customBlack font-bold hover:cursor-pointer">
                        <li><a href='/'>Page 1</a></li>
                        <li><a href='/'>Page 2</a></li>
                        <li><a href='/'>Page 3</a></li>
                        <li><a href='/'>Page 4</a></li>
                        <li><a href='/'>Page 5</a></li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Nav;