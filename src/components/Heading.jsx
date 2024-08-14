import React from 'react';

const Heading = ({ size, color, weight, children, customClasses }) => {
    const baseStyle = "m-4"
    const colorStyles = {
        white: "text-white",
        black: "text-customBlack",
        gray: "text-customGray",
        primary: "text-[#B0EC9A]"
    };
    const sizeStyles = {
        title: "text-[96px]",
        h1: "text-[64px]",
        h2: "text-[48px]",
        h3: "text-[40px]",
        h4: "text-[36px]",
        h5: "text-[32px]",
        h6: "text-[24px]",
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
            <h1 className={`${baseStyle} ${colorStyles[color]} ${sizeStyles[size]} ${weightStyles[weight]} ${customClasses} `}>
                {children}
            </h1>
    );
};

export default Heading;