import React from 'react';

const Heading = ({ size = "", color = "black", weight = "normal", children, underline = "", align, dataval, customClasses }) => {
    const baseStyle = "relative"
    const colorStyles = {
        white: "text-white",
        black: "text-customBlack",
        gray: "text-customGray",
        primary: "text-[#B0EC9A]"
    };
    const sizeStyles = {
        title: "text-[96px]",
        h1: "text-[36px] md:text-[64px]",
        h2: "text-[32px] md:text-[48px]",
        h3: "text-[26px] md:text-[40px]",
        h4: "text-[24px] md:text-[36px]",
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
            <h1 className={`${baseStyle} ${colorStyles[color]} ${sizeStyles[size]} ${weightStyles[weight]} text-${align} ${customClasses}`}
                data-val={dataval || undefined}
            >
                {children}
                { underline ? ( <span class="absolute left-0 bottom-0 w-full h-1 bg-gradient-4"></span> ) : (" ")}
            </h1>
    );
};

export default Heading;