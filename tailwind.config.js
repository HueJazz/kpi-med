/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./images/banner_3.jpg')",
      },
      maxWidth: {
        '8xl': '1440px',
      },
      screens: {
        'lg2': '1080px',
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

