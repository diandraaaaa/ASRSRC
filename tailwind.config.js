/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#1F1F1F',
        customColor1: '#27C25C',
        customGray: '#676767',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(270deg, #61D539 0%, #27C25C 25%, #15AD6F 75%, #61D539 100%)', 
        'gradient-2': 'linear-gradient(0deg, #B0EC9A 0%, #A4E88C 100%)',
        'gradient-3': 'linear-gradient(90deg, #ADF09B 0%, #54C996 100%)',
        'gradient-4': 'linear-gradient(0deg, #B3E5A0 0%, #CBFDB9 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}