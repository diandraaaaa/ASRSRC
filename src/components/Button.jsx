import React from 'react'

const Button = ({size, color, children, onClick, customClasses}) => {
    const baseStyles = "py-3 px-6 text-white font-semibold rounded-[10px] transition-all m-4"
    const sizeStyles = {
        small: 'text-[20px] md:text-[24px]',
        medium: 'text-[24px] md:text-[32px]',
        large: 'text-[32px] md:text-[40px]',
    }
    const colorStyles = {
        main: "bg-gradient-3 text-white hover:bg-gradient-2",
        primary: "bg-gradient-4 text-[#1F1F1F] hover:text-customBlack",
        secondary: "bg-gradient-1 text-white hover:bg-gradient-4",
        outline: "border-[3px] border-customColor1 text-green-500 hover:bg-customColor1 hover:text-white"
    }

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${customClasses}`}
        >
         {children}
        </button>
    )
}


export default Button