import React from 'react';

const Input = ({ type, color, width, icon, position, placeholder, customClasses }) => {
    const baseStyle = "border-2 py-2 px-4 pr-10 rounded-[10px] outline-0 w-full text-[#27C25C]";
    const colorStyles = {
        primary: "border-[#27C25C] placeholder-[#27C25C]",
        black: "border-customBlack placeholder-customBlack",
        gray: "border-customGray placeholder-customGray"
    };

    return (
        <div className={`max-w-${width} ${position}`}>
            <div className="relative w-full">
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`${baseStyle} ${colorStyles[color]} ${customClasses}`}
                />
            { icon === 'send' ? (<span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13Z" fill="#27C25C"/>
                    </svg>
                </span>) : ''}

            { icon === 'email' ? (<span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#27C25C"/>
                </svg>

                </span>) : ''}
                
            { icon === 'profile' ? (<span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0C10.1935 0 11.3381 0.500445 12.182 1.39124C13.0259 2.28204 13.5 3.49022 13.5 4.75C13.5 6.00978 13.0259 7.21796 12.182 8.10876C11.3381 8.99956 10.1935 9.5 9 9.5C7.80653 9.5 6.66193 8.99956 5.81802 8.10876C4.97411 7.21796 4.5 6.00978 4.5 4.75C4.5 3.49022 4.97411 2.28204 5.81802 1.39124C6.66193 0.500445 7.80653 0 9 0ZM9 11.875C13.9725 11.875 18 14.0006 18 16.625V19H0V16.625C0 14.0006 4.0275 11.875 9 11.875Z" fill="#27C25C"/>
                </svg>

                </span>) : ''}

            { icon === 'password' ? (<span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 16C10.0967 16 10.669 15.7893 11.091 15.4142C11.5129 15.0391 11.75 14.5304 11.75 14C11.75 13.4696 11.5129 12.9609 11.091 12.5858C10.669 12.2107 10.0967 12 9.5 12C8.90326 12 8.33097 12.2107 7.90901 12.5858C7.48705 12.9609 7.25 13.4696 7.25 14C7.25 14.5304 7.48705 15.0391 7.90901 15.4142C8.33097 15.7893 8.90326 16 9.5 16ZM16.25 7C16.8467 7 17.419 7.21071 17.841 7.58579C18.2629 7.96086 18.5 8.46957 18.5 9V19C18.5 19.5304 18.2629 20.0391 17.841 20.4142C17.419 20.7893 16.8467 21 16.25 21H2.75C2.15326 21 1.58097 20.7893 1.15901 20.4142C0.737053 20.0391 0.5 19.5304 0.5 19V9C0.5 8.46957 0.737053 7.96086 1.15901 7.58579C1.58097 7.21071 2.15326 7 2.75 7H3.875V5C3.875 3.67392 4.46763 2.40215 5.52252 1.46447C6.57742 0.526784 8.00816 0 9.5 0C10.2387 0 10.9701 0.129329 11.6526 0.380602C12.3351 0.631876 12.9551 1.00017 13.4775 1.46447C13.9998 1.92876 14.4141 2.47995 14.6968 3.08658C14.9795 3.69321 15.125 4.34339 15.125 5V7H16.25ZM9.5 2C8.60489 2 7.74645 2.31607 7.11351 2.87868C6.48058 3.44129 6.125 4.20435 6.125 5V7H12.875V5C12.875 4.20435 12.5194 3.44129 11.8865 2.87868C11.2536 2.31607 10.3951 2 9.5 2Z" fill="#27C25C"/>
                </svg>
                </span>) : ''}
                
            </div>
        </div>
    );
};

export default Input;