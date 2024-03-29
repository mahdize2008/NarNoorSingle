/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'dark',
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      // '2xl': '1270px',
    },
    container: {
      padding: '1rem',
      center: true,
    },
    colors: {
      white: '#ffffff',
      transparent: 'transparent',
      black: '#000',


      natural:'#D9D9D9',
      'natural-alpha':'rgba(0, 0, 0, 0.60)',
      'natural-beta': '#BCBCBC',
      'natural-tetha': 'rgba(244, 244, 244, 0.93)',
      'natural-gamma': '#6c6c6c',


      primary: '#FDCF08',
      'primary-dark': '#cba603',
  
      dark: '#4E4E4E',
      darker: '#303030',
      'dark-alpha': '#4A4A4A',

      secondary:'#264065',

      orange:'#FF8256',
      light: '#868686',
      lighter: '#D9D9D9',
    },
    fontSize: {
      '3xs': '8px',
      '2xs': '10px',
      xs: '12px',
      '2sm': '13px',
      sm: '14px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
      '6xl': '32px',
      '7xl': '34px',
      '8xl': '36px',
      '9xl': '38px',
      '10xl': '40px',
      '11xl': '42px',
      '12xl': '44px',
      '13xl': '46px',
      '14xl': '48px',
      '15xl': '50px',
      '20xl': '60px',
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '750',
      black: '800',
      extrablack: '900',
    },
    boxShadow: {
      'alpha-light':'0px 4px 16px 0px #EAEAEA',
      'beta-light':'0px 24px 50px rgba(0, 0, 0, 0.15)',
      'tetha-light':'0px 28px 57px 0px rgba(190, 190, 190, 0.25)',
    }
    
  },
  plugins: [],
}
