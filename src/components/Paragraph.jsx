import React from 'react';

const Paragraph = ({ size, color, weight, width, children, underline,customClasses }) => {
    const baseStyle = "m-4 relative"
    const colorStyles = {
        white: "text-white",
        black: "text-customBlack",
        gray: "text-customGray",
    };
    const widthStyles = {
        half: "w-1/2",
    }
    const sizeStyles = {
        small: "text-[16px]",
        normal: "text-[20px]",
        large: "text-[24px]"

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
            <p className={`${baseStyle} ${colorStyles[color]} ${sizeStyles[size]} ${weightStyles[weight]} ${widthStyles[width]} ${customClasses} `}>
                    {children}
                {underline ? (<span className="absolute -top-3 -left-3 w-1 h-4 bg-gradient-4"></span>) : ''}
                {underline ? (<span className="absolute -top-3 -left-3 w-4 h-1 bg-gradient-4"></span>) : ''}
                {underline ? ( <span className="absolute bottom-0 right-0 w-1 h-4 bg-gradient-4"></span>) : ''}
                {underline ? ( <span className="absolute bottom-0 right-0 w-4 h-1 bg-gradient-4"></span>) : ''}
            </p>
    );
};

export default Paragraph;