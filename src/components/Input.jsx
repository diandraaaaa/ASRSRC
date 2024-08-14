import React from 'react';

const Input = ({ type, color, weight, placeholder , customClasses }) => {
    const baseStyle = "border-2 py-2 px-4 rounded-[10px] outline-0"
    const colorStyles = {
        primary: "border-[#27C25C] placeholder-[#27C25C]",
        black: "border-customBlack placeholder-customBlack",
        gray: "border-customGray placeholder-customGray"
    };

    return (
            <input type={type} placeholder={placeholder} className={`${baseStyle} ${colorStyles[color]} ${customClasses} `} />
    );
};

export default Input;