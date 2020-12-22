const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '620px',
      md: '840px',
      lg: '1200px',
    },
    colors: {
      transparent: 'transparent',
      transparentWhite: 'rgba(256,256,256,0.95)',
      brightRed: '#FE1717',
      textRed: '#fe1717',
      inputRed: '#E3203F',
      textBlack: '#333333',
      btnBlack: '#222222',
      lineBlack: '#404040',
      orange: '#fe7e17',
      btnOrange: '#ec523f',
      white: '#FFFFFF',
      black: '#000000',
      bgGray: '#FAFAFA',
      lightGray: '#868686',
      darkGray: '#555555',
      seperator: '#efefef',
      bottomBorder: '#CACACA',
      lightBlue: 'rgba(82, 168, 236, 0.8)',
    },
    boxShadow: {
      inner: 'inset 0 1px 1px rgba(0,0,0,0.075)',
      focus: 'inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(82,168,236,.6)',
    },
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        sans: ['Nimbus Sans', ...defaultTheme.fontFamily.sans],
        sansBold: ['Nimbus Sans Bold', 'Nimbus Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.icon:hover img': {
          '-webkit-filter':
            'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)',
          filter:
            'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)',
        },
        '.member-image:hover img': {
          transform: 'scale(1.05)',
        },
        '.dark-overlay': {
          '@apply m-0 p-0 w-full h-full': {},
          'background-color': 'rgba(0,0,0,0.7)',
        },
        '.light-overlay': {
          '@apply m-0 p-0 w-full h-full': {},
          'background-color': 'rgba(255,255,255,0.7)',
        },
      })
    },
  ],
}
