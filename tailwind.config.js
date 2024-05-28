/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./images/banner.webp')",
        'about': "url('./images/k-18.png')",
      },
      maxWidth: {
        '8xl': '1218px',
      },
      screens: {
        'lg2': '1080px',
      },
      boxShadow: {
        'header': '6px 6px 6px rgba(0,0,0,0.05)',
        'custom': '0px 3px 16px -4px rgba(0, 0, 0, 0.5)',
        'card': '0px 0px 16px 0px #0000003D'
      },
      borderColor: {
        'custom': '#00316b',
        'secondary': '#ebf2f8',
        'active': '#f78e2e',
      },
      fontFamily: {
        'sans': ['Avenir', 'Arial', 'Helvetica', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif']
      },
      fill: {
        'custom': '#00316b',
        'secondary': '#4497cb',
        'active': '#f78e2e',
      },
      accentColor: {
        'custom': '#00316b',
        'secondary': '#4497cb',
        'active': '#f78e2e',
      },
      textColor: {
        'custom': '#1d4189',
        'secondary': '#00316b',
        'active': '#f78e2e',
      },
      backgroundColor: {
        'primary': '#1d4189',
        'custom': '#00316b',
        'active': '#f78e2e',
        'assistants': '#4497cb',
        'secondary': '#ebf2f8',
        'tertiary': '#f7f7f7',
      }
    },
  },
  plugins: [],
}

