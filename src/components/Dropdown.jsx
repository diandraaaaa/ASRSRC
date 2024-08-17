import React, { useState } from 'react';
import Heading from './Heading'
import Paragraph from './Paragraph'
import IconUp from '../assets/icons/icon-up.svg'
import IconDown from '../assets/icons/icon-down.svg'

function Dropdown({title, text}) {
    const [isDropdownVisible, setisDropdownVisible] = useState(false);

    const dropdownToggle = () => {
        setisDropdownVisible(!isDropdownVisible);
    };

  return (
    <div className="mx-4 md:mx-32 hover:bg-gray-50 rounded-tl-[10px] rounded-tr-[10px] py-4 border-b-[3px] border-[#27C25C]" >
        <div className="flex items-center justify-between md:px-16 cursor-pointer" onClick={dropdownToggle}>
         <Heading color="black" size="h5" weight="bold">{title}</Heading>
         <img 
            src={IconUp}
            className={`max-md:size-12 transition-transform duration-300 ${isDropdownVisible ? 'rotate-180' : ''}`} 
            
        />
        </div>   
        { isDropdownVisible ? (<div><Paragraph color="black" size="small" customClasses="m-4 px-2 md:px-16">{text}</Paragraph></div>) : ' '}
    </div>
  )
}

export default Dropdown