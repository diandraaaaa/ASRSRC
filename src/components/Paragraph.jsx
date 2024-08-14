import React from 'react';

const Paragraph = ({ size, color, weight, width,children, customClasses }) => {
    const baseStyle = "m-4"
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
            </p>
    );
};

export default Paragraph;