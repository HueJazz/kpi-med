/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./images/banner.webp')",
      },
      maxWidth: {
        '8xl': '1440px',
      },
      screens: {
        'lg2': '1080px',
      },
      boxShadow: {
        'header': '0 0 10px 0 rgba(0,0,0,.15)',
        'custom': '0px 3px 16px -4px rgba(0, 0, 0, 0.5)',
      },
      borderColor: {
        'custom': '#00316b',
        'active': '#f78e2e',
      },
      fontFamily: {
        'sans': ['Avenir', 'Arial', 'Helvetica', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif']
      },
      fill: {
        'custom': '#00316b',
        'active': '#f78e2e',
      },
      textColor: {
        'custom': '#00316b',
        'active': '#f78e2e',
      },
      backgroundColor: {
        'custom': '#00316b',
        'active': '#f78e2e',
        'secondary': '#ebf2f8',
        'tertiary': '#f7f7f7',
      }
    },
  },
  plugins: [],
}

