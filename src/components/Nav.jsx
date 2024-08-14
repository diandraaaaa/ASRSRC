import React from 'react';

function Nav() {
  return (
    <>
    <nav className="hidden md:flex justify-between bg-gradient-4 py-8 md:text-[16px] xl:text-[20px]">
            <h1 className="ml-12">Antreprenoriat social rural sustenabil in Regiunea Centru</h1>

            <div className="flex">
                <ul className="flex justify-center space-x-12 mr-12 text-customBlack font-bold hover:cursor-pointer">
                    <li>
                        <h1>Page 1</h1>
                    </li>
                    <li>
                        <h1>Page 2</h1>
                    </li>
                    <li>
                        <h1>Page 3</h1>
                    </li>
                    <li>
                        <h1>Page 4</h1>
                    </li>
                    <li>
                        <h1>Page 5</h1>
                    </li>
                </ul>
            </div>
    </nav>
    <nav className="flex md:hidden bg-gradient-4 py-8">
        <div className="mx-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5" width="24" height="2" fill="#000" />
                <rect y="11" width="24" height="2" fill="#000" />
                <rect y="17" width="24" height="2" fill="#000" />
            </svg>
        </div>
    </nav>
    
    </>
  );
}

export default Nav;