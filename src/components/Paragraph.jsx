import React from 'react';

const Paragraph = ({ size = "", color = "black", weight = "normal", children, underline = "", customClasses }) => {
    const baseStyle = "relative"
    const colorStyles = {
        white: "text-white",
        black: "text-customBlack",
        gray: "text-customGray",
        green: "text-[#27C25C]"
    };
    const sizeStyles = {
        small: "text-[12px] md:text-[16px]",
        normal: "text-[16px] md:text-[20px]",
        large: "text-[20px] md:text-[24px]"

    };
    const weightStyles = {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        black: "font-black"
    }

    return (
            <p className={`${baseStyle} ${colorStyles[color]} ${sizeStyles[size]} ${weightStyles[weight]} ${customClasses}`}>
                    {children}
                {underline ? (<span className="absolute -top-3 -left-3 w-1 h-6 bg-gradient-4"></span>) : ''}
                {underline ? (<span className="absolute -top-3 -left-3 w-6 h-1 bg-gradient-4"></span>) : ''}
                {underline ? ( <span className="absolute bottom-0 right-0 w-1 h-6 bg-gradient-4"></span>) : ''}
                {underline ? ( <span className="absolute bottom-0 right-0 w-6 h-1 bg-gradient-4"></span>) : ''}
            </p>
    );
};

export default Paragraph;