const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
       ['primary-darkest']: 'rgba(0,0,0,0.8)',
      //  ['primary-darkest']: '#1c1c1c',
       ['primary-dark']: '#202020',
       ['primary-medium']: 'rgba(0,0,0,0.7)',
      //  ['primary-medium']: '#252526',
       ['secondary-dark']: 'rgba(248, 45, 72, 0.5)',
       ['secondary-medium']: 'rgb(248, 45, 72)',
       ['neutral-darkest']: 'rgba(0,0,0,0.1)',
       ['neutral-dark']: '#555',
       ['neutral-medium']: '#D2D2D2',
       ['neutral-light']: '#F6F6F6',
       ['neutral-lightest']: 'rgba(255,255,255,0.05)',
       info: '#1068DB',
       category: '#3dd36a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
