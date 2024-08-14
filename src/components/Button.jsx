import React from 'react'

const Button = ({size, color, children, onClick, classes}) => {
    const baseStyles = "py-3 px-6 text-white font-semibold rounded-[10px] transition-all m-4"
    const sizeStyles = {
        small: 'text-[24px]',
        medium: 'text-[32px]',
        large: 'text-[48px]',
    }
    const colorStyles = {
        primary: "bg-gradient-4 text-[#1F1F1F] hover:bg-gradient-1 hover:text-white",
        secondary: "bg-gradient-1 text-white hover:bg-gradient-4",
        outline: "border-[3px] border-customColor1 text-[#27C25C] hover:bg-customColor1 hover:text-white"
    }

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${classes}`}
        >
         {children}
        </button>
    )
}


export default Button